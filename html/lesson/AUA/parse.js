/**
Find common vocab among pop songs

test strings:
single character
words
phrases
sentences
tweets
songs
movies
stories
dialogs
literature


Generate dict from sheet
Generate comp from dict
Generate js from dict
Generate js from comp
Read and write vocab from local storage

Combine comp and vocab, number of components at each mastery level

Order by lowest number untried, working
*/	

/**
	Find all the parts within a string.
	
	public static function voyc.parse(input)
		@input string input
		@return two-dimensional array
		[
			var identifed = [],  // array of strings, entries in Dictionary
			var unidentified = []  // array of strings, not found in Dictionary
		]

	Requires presence of Dictionary, sorted by length.
*/
voyc.parse = function(input) {
	function sto(s, i, b) {
		if (b) {
			matched.push(s);
		}
		else {
			unmatched.push(s);
		}
	}
	var matched  = [];
	var unmatched = [];
	var s = input;
	var slen = s.length;
	var t = '';	// test string to lookup
	var tlen = t.length;
	var m = '';	// matched dict entry, array of objects
	var ui = -1;	// starting index of unmatched substring
	var us = '';	// unmatched string

	// scan input char by char. i is starting index pos.  step forward.
	for (var i=0; i<slen; i++) {

		// j is ending index pos. step backwards.
		for (var j=slen; j>i; j--) {
			t = s.substring(i,j);
			if (t == s) {
				continue;
			}
			tlen = t.length;
			m = this.dictionary.lookup(t);  // find t in Dictionary
			if (m.length) {
				if (ui >= 0) {
					us = s.substring(ui,i);
					sto(us, ui, false);  // save unmatched part
				}
				ui = j;
				us = m[0].t;
				sto(us, i, true);  // save matched part
				i += us.length-1;  // bump up to next start position
				break;
			}
		}
		// comment this please, wtf?
		if (j <= i) {
			if (ui < 0) {
				ui = i;
			}
		}
	}
	// unmatched piece at end
	if (ui >= 0 && i-1>ui) {
		us = s.substring(ui,i);
		if (us != s) {
			sto(us, ui, false);  // save unrecognized part
		}
	}
	
	return [
		matched,
		unmatched
	];
}

/**
	Find all the words using only a subset of the alphabet.
	
	public static function voyc.collect(input)
		@return array

	Requires presence of Dictionary.
*/
voyc.collect = function(input) {
	var matched  = [];

	// split input into table of char/state objects
	var inp = input.split(/\n/);

	var vocab = [];
	for (var k in inp) {
		var a = inp[k].split(/[ ;\t]/);
		vocab.push({
			char:a[0],
			state:a[1]
		});
	}
	
	function inVocab(ch) {
		var r = false;
		for (var k in vocab) {
			if (vocab[k].char == ch) {
				r = vocab[k];
				break;
			}
		}
		return r;
	}

	// scan the dictionary
	this.dictionary.iterate(function(dict,n) {
		var t = dict.t;
		var tlen = t.length;
		var cnt = 0;
		var wcnt = 0;
		for (var i=0; i<tlen; i++) {
			var m = inVocab(t[i]);
			if (m) {
				cnt++;
				if (m.state == 'w') {
					wcnt++;	
				}
			}
		}
		if (cnt == tlen && wcnt > 0) {
			matched.push(dict);
		}
	});
	return matched;
}

/**
	Parse a word into syllables.
	
	public static function voyc.parseWord(input)
		@return array

		return: tone, one of five: L,M,H,R,F

		test cases
			ไก่	L	ok
			แดน	M	ok
			ใด	M	ok
			ทน	M	ok, default vowel closed
			ทวีป	HF	error, is M, default vowel open not detected
			ทำไม	MM	ok
			นี่	F	ok
			ที่นี่	FF	ok
			นม	M	ok
			นวด	F	ok
			แน่	F	ok
			ปวด	L	ok
			ปาก	L	error, is M, finalConsonant not detected
			ปี	M	ok
			แปด	L	ok
			ไม่	F	ok

		todo
			count trailing orphan glyphs
			look at orphan glyphs
			if consonant, try to add to previous syllable as finalConsonant
			if cannot, try to make default vowel open
*/
voyc.parseWord = function(input, returnDetails) {
	returnDetails = returnDetails || false;
	var word = input;

	// find matching pattern for input word
	var numMatches = 0;
	var matchedPatterns = [];
	for (var k in voyc.vowelPatterns) {
		var pattern = new RegExp(voyc.vowelPatterns[k].syllablePattern, 'g');
		var cnt = 0;
		var m = [];
		// for global pattern, must exec repeatedly, once for each match

		while (m = pattern.exec(word)) {
			m.patternIndex = k;
			m.string = m[0];
			m.vowel = voyc.vowelPatterns[k].print;
			m.leadingConsonant = m[1];
			m.toneMark = m[2];
			if (m.length > 3) {
				m.finalConsonant = m[3];
			}

			//m.leadingConsonant = voyc.alphabet.lookup(m[1])[0];
			//m.finalConsonant = voyc.alphabet.lookup(m[3])[0];
			//m.tonemark = voyc.alphabet.lookup(m[2])[0];

			m.begin = m.index;
			m.end = m.index + m.string.length; // up to but not including
			matchedPatterns.push(m);
			cnt++;
			if (cnt > 50) {
				break;  // stop runaway loop
			}
		}
	}
	var numMatches = matchedPatterns.length;

	// sort matched patterns by index and length, both ascending
	matchedPatterns.sort(function(a,b) {
		var x = a.index - b.index;
		if (x == 0) {
			(a.end - a.begin) - (b.end - b.end);
		}
		return x;
	});

	// assemble possible chains of syllables
	function addSyllableToChain(chain, syllable) {
		chain.orphans.push({begin:chain.end, end:syllable.begin});
		chain.numOrphanGlyphs += syllable.begin - chain.end;
		chain.syllables.push(syllable);
		chain.end = syllable.end;
	}

	function isOverlap(chain, syllable) {
		return (syllable.begin < chain.end);
	}

	var chains = [];
	for (var k in matchedPatterns) {
		var syllable = matchedPatterns[k];
		var chained = false;

		// add the syllable to each chain where it fits
		for (var c in chains) {
			chain = chains[c];
			if (!isOverlap(chain, syllable)) {
				addSyllableToChain(chain, syllable);
				chained = true;
			}
		}

		// if it did not fit on any chain, create a new chain and add it there
		if (!chained) {
			var chain = {
				syllables:[],
				orphans:[],
				numOrphanGlyphs:0,
				end:0
			};
			addSyllableToChain(chain, syllable);
			chains.push(chain);
		}
	}

	// choose the chain with the lowest number of orphans
 	var winnerIndex = -1;
	var winnerNumOrphanGlyphs = 100;
	for (var c in chains) {
		chain = chains[c];
		if (chain.numOrphanGlyphs < winnerNumOrphanGlyphs) {
			winnerNumOrphanGlyphs = chain.numOrphanGlyphs;
			winnerIndex = c;
		}
	}
	var winner = chains[c];
	var numSyllables = winner.syllables.length;

	// analyze each syllable
	var tone = '';
	for (var s in winner.syllables) {
		var syl = winner.syllables[s];
		syl.rules = [];
		syl.ending = '';
		if (syl.finalConsonant) {
			var finalConsonantMeta = voyc.alphabet.lookup(syl.finalConsonant)[0];
			if (finalConsonantMeta.a == 's')  // sonorant
				syl.ending = 'live', syl.rules.push('final sonorant consonant: live');
			else
				syl.ending = 'dead', syl.rules.push('final non-sonorant consonant: dead');
		}
		else {
			var vowelMeta = voyc.vowelPatterns[syl.patternIndex];
			if (vowelMeta.l == 's')
				syl.ending = 'dead', syl.rules.push('open vowel short: dead');
			else
				syl.ending = 'live', syl.rules.push('open vowel long: live');
		}

		// apply tone rules
		syl.tone = false;
		var maiaek = '่';
		var maitoh = '้';
		var maidtree = '๊';
		var maidtawaa = '๋';
		var leadingConsonantMeta = voyc.alphabet.lookup(syl.leadingConsonant)[0];
		var vowelMeta = voyc.vowelPatterns[syl.patternIndex];
		if (leadingConsonantMeta.m == 'm' && syl.ending == 'live') syl.tone = 'M', syl.rules.push('mid-class live: M');
		if (leadingConsonantMeta.m == 'm' && syl.ending == 'dead') syl.tone = 'L', syl.rules.push('mid-class dead: L');
		if (leadingConsonantMeta.m == 'm' && syl.toneMark == maiaek) syl.tone = 'L', syl.rules.push('mid-class mai eak: L');
		if (leadingConsonantMeta.m == 'm' && syl.toneMark == maitoh) syl.tone = 'F', syl.rules.push('mid-class mai toh: F');
		if (leadingConsonantMeta.m == 'h' && syl.ending == 'live') syl.tone = 'R', syl.rules.push('high-class live: R');
		if (leadingConsonantMeta.m == 'h' && syl.ending == 'dead') syl.tone = 'L', syl.rules.push('high-class dead: L');
		if (leadingConsonantMeta.m == 'h' && syl.toneMark == maiaek) syl.tone = 'L', syl.rules.push('high-class mai eak: L');
		if (leadingConsonantMeta.m == 'h' && syl.toneMark == maitoh) syl.tone = 'F', syl.rules.push('high-class mai toh: F');
		if (leadingConsonantMeta.m == 'l' && syl.ending == 'live') syl.tone = 'M', syl.rules.push('low-class live: M');
		if (leadingConsonantMeta.m == 'l' && syl.ending == 'dead' && vowelMeta.l == 's') syl.tone = 'H', syl.rules.push('low-class dead short: H');
		if (leadingConsonantMeta.m == 'l' && syl.ending == 'dead' && vowelMeta.l == 'l') syl.tone = 'F', syl.rules.push('low-class dead long: F');
		if (leadingConsonantMeta.m == 'l' && syl.toneMark == maiaek) syl.tone = 'F', syl.rules.push('low-class mai eak: F');
		if (leadingConsonantMeta.m == 'l' && syl.toneMark == maitoh) syl.tone = 'H', syl.rules.push('low-class mai toh: H');
		if (!syl.tone) 
			debugger;

		tone += syl.tone;
	}

	return {tone:tone, syllables:winner.syllables};
}

