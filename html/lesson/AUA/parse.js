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

	// split input into array of one-byte alphabet characters
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

	Requires presence of Dictionary.

split into syllables
	index, length of each
for each syllable
identify
	leading consonant
	leading consonants dipthong
	vowel
	vowel dipthong
	default vowel open
	default vowel closed
	tone mark
	ending consonant
lookup
	class of leading consonant
	length of vowel
	live or dead
apply rules
	M mid-class live
	L mid-class dead
	L mid-class mai eak
	F mid-class mai toh
	R high-class live
	L high-class dead
	L high-class mai eak
	F high-class mai toh
	M low-class live
	H low-class dead short
	F low-class dead long
	F low-class mai eak
	H low-class mai toh

result: tone, one of five
*/
voyc.parseWord = function(input) {
	var matched  = [];
	var word = input;
	var leadingConsonant = '';
	var leadingConsonantDipthong = '';
	var vowel = '';
	var vowelDipthong = '';
	var defaultVowelOpen = '';
	var defaultVowelClosed = '';
	var toneMark = '';
	var endingConsonant = '';
	var midClass = [];
	var highClass = [];
	var lowClass = [];
	var sonorant = [];

	function isConsonant(ch) {
		alphabet.lookup();
		return consonants.contains(ch);
	}

	// input word
	// scan backwords
	var wlen = word.length;
	for (var w=wlen-1; w>-1; w--) {
		var ch = input[w];
		if (isConsonant(ch)) {
			endingConsonant = ch
		}

	}

}

