// data object to be posted to flash
voyc.flashdata = {
	'name': 'practice',
	'title': 'title',
	'reversible':true,
	'language':true,
	'sketch':true,
	'translit':true,  // what is this
	'audio':false,
	'db': false,
	'hm': true, // show translit with question or answer
	'cards': [],
}

// post object for contacting flash
voyc.post = {};

voyc.merge = function(a,b) {
	for (var x in b) {
		a[x] = b[x];
	}
}

// load sounds
voyc.initLesson = function() {
	voyc.initDict();
}

voyc.initDict = function() {
	// called once up front to initialize the dict
	// called again if necessary to initialize custom words

	// build out dict
	//    at completion:
	//       required: id, typ, lvl, ns, ln, th, translit, hint, wo, en
	//    ns = 0:
	//       typ=glyph
	//    ns = 1
	//       typ=[syllable,word]
	//       required: ccls, end, mark, tone
	//    ns > 1
	//       typ:[cword,phrase,expression,sentence,story]
	//       required: set ?
	//       input: id, typ, lvl, [th,set], 
	//         if th and no set, required: translit, hint, wo, en


	//add th for multisylable words
	var word;
	for (var i=0; i<voyc.dict.length; i++) {
		word = voyc.dict[i];
		if (typeof(!word.ns) == 'undefined') {
			debugger;
		}
		if (word.ns > 1 && typeof(word.th) == 'undefined' && typeof(word.set) == 'undefined') {
			debugger;
		}
		if (word.ns > 1 && typeof(word.th) == 'undefined' ) {
			if (typeof(word.set) == 'undefined') {
				debugger;
			}
			card = voyc.compose(word.set);
			word.th = card.th;
			if (!word.translit) {
				word.translit = card.translit;
				word.wo = card.wo;
			}
		}
		word.ln = word.th.length;
	}

	// sort dict by length and thai
//	fix2 = function(n) {return ((''+n).length < 2) ? '0'+n : ''+n};
//	voyc.dict.sort(function(a, b) {
//		aa = fix2(a.ln) + a.th;
//		bb = fix2(b.ln) + b.th;
//		return aa.localeCompare(bb);
//	});

	voyc.dict.sort(function(a,b) {
		return (!(b.ln - a.ln)) ? a.th.localeCompare(b.th) : (b.ln - a.ln);
	});
	
	// break dict into sections by length
	voyc.dictbyln = {};
	var lastlen = 10000;
	for (var i=0; i<voyc.dict.length; i++) {
		word = voyc.dict[i];
		if (word.ln < lastlen) {
			lastlen = word.ln;
			voyc.dictbyln[lastlen] = i;
		}
	}
	
	var x = 1;
}

voyc.decompose = function(word) {
	var set = [];
	var start = 0;
	nf = 0;
	var test = word.substring(start);
	var found = false;
	while (start < word.length) {
		found = false;
		card = voyc.findWordInDictByLength(test);
		if (card) {
			if (start > nf) {
				console.log('not found: ' + word.substring(nf,start));
			}
			//console.log('found: ' + card.th);
			set.push(card.id);
			start += card.th.length;
			nf = start;
		}
		else {
			//console.log('not found: ' + test);
			start ++;
		}
		test = word.substring(start);
		
	}
	return set;
}

voyc.findWordInDictByLength = function(str) {
	var card = false;
	var b = 0;
	var word = {};
	for (var i=0; i<voyc.dict.length; i++) {
		word = voyc.dict[i];
		b = str.indexOf(word.th);
		if (!b) {
			card = voyc.dict[i];
			break;
		}
	}
	return card;
}


voyc.getCardByWord = function(word) {
	var card = false;
	for (var i=0; i<voyc.dict.length; i++) {
		if (voyc.dict[i].th == word) {
			card = voyc.dict[i];
			break;
		}
	}
	return card;
}

voyc.getCardById = function(id) {
	var card = false;
	for (var i=0; i<voyc.dict.length; i++) {
		if (voyc.dict[i].id == id) {
			card = voyc.dict[i];
			break;
		}
	}
	return card;
}

// story
voyc.drawStory = function(storyid) {
	// read from dict where typ = 'sentence' and story = storyid order by line
	var dic = {};
	var s = '';
	for (var i=0; i<voyc.dict.length; i++) {
		dic = voyc.dict[i];
		if (dic.typ == 'sentence' && dic.story == storyid) {
			s += voyc.composeSentenceEnglish(dic);
		}
	}
	document.getElementById('content').innerHTML = s;
}

/**
	entry point, draw a panel
	input panel is an object containing 
		title and set, where set:[234,52254,6234,52345,2453], or 
		title and cb, where cb is a callback function that returns a set of matching words from dict, or 
		title and custom, where custom is an array of th/en custom
	output is a panel with selectable table rows suitable for practice.
	
	When the input has custom, the output will be either new words, or a complete panel.
**/
voyc.drawPanel = function(panel) {
	var s = '';
	s += "<div select class='panel list blu'>";
	s += "<h3>" + panel.title + "</h3>";
	s += "<table>";

	panel.set = panel.set || [];

	// build set from callback function
	if (panel.cb) {
		for (key in voyc.dict) {
			card = voyc.dict[key];
			if (panel.cb(card)) {
				panel.set.push(card.id);
			}
		}
	}

	// build set from custom rows, add custom rows to dict
	if (panel.custom) {
		//return 'missing panel';

		// loop thru panel.custom
		for (var i=0; i<panel.custom.length; i++) {
			line = panel.custom[i];
			word = { id:voyc.nextsetid++, th:line.th, en:line.en};
			word.set = voyc.decompose(line.th);
			panel.set.push(word.id);
			voyc.tempset[word.id] = word.set;
		}
	}

	// compose and draw
	var p,c;
	for (var i=0; i<panel.set.length; i++) {  // loop thru each p in panel
		p = panel.set[i];
		c = voyc.compose(p);
		if (c) {
			s += voyc.drawRow(c);
		}
	}

	s += "</table></div>";
	return s;
}

/**
	Compose a set of cards.
	A set can contain nested sets.  set=[1,2,[3,4,[5,6,7]],8,9]
	input set array; Each element is an id or an array of ids.  
	output/output c is an object that looks very much like a card
*/
voyc.firstsetid = 1000000;
voyc.nextsetid = voyc.firstsetid;
voyc.tempset = {};

voyc.compose = function(set, c) {
	// first time, initialize output c
	var id = set;
	if (!c) {
		if (set.length) {
			id = voyc.nextsetid++;
			voyc.tempset[id] = set;
		}
		else if (set >= voyc.firstsetid ) {
			id = set;
			set = voyc.tempset[id];
		}
		c = {'id':id, th:'', en:'', translit:''};
	}

	// force set to always be an array
	if (!set.length)  set = [set];

	var item = {};
	for (var i=0; i<set.length; i++) {  // loop thru each item in set
		item = set[i];
		if (item.length) {
			c = voyc.compose(item, c);  // recursive call to self
		}
		else {
			card = voyc.getCardById(item);  // ** get card
			if (card.set) {
				c = voyc.compose(card.set, c);  // recursive call to self
			}
			else {
				c = voyc.composeCard(card, c);  // ** compose card
			}
		}
	}
	return c;
}

/**
	compose a set
	input p is either a set or a single id
	output c
*/

/** 
	concatenate one card to a group of cards
	card is input
	c is input and output
*/
voyc.composeCard = function(card, c) {
	if (!c.id)  c.id = card.id;
	c.th += card.th;
	c.translit = voyc.concatWords(c.translit, card.translit);
	c.en = voyc.concatWords(c.en, card.en);
	return c;
}

voyc.concatWords = function(t,s,sep) {
	sp = sep || ' ';
	if (t) 
		t += ' ';
	t += s;
	return t;
}

voyc.drawRow = function(card, s) {
	var s = '';
	s += "<tr id=" + card.id + ">";
	s += "<td class='thai'>" + card.th + "</td>";
	s += "<td class='english'>" + card.translit + "</td>";
	s += "<td class='english'>" + card.en + "</td>";
	s += "</tr>";
	return s;
}

voyc.setFromString = function(s) {
	var a = s.split(',');
	for (var i=0; i<a.length; i++) {
		a[i] = parseInt(a[i]);
	}
	return a;
}

voyc.practice = function(opt) {
	// pull an array of selected elements, or all
	var ra = document.querySelectorAll('tr[id].selected');
	if (!ra.length) {
		ra = document.querySelectorAll('tr[id]');
	}
	if (!ra.length) {
		console.log( 'array is empty');
		alert( 'array is empty');
		return;
	}

	// build data array pulling cards from dict
	var cards = [];
	var a,o;
	var seq = 1;
	for (var i=0; i<ra.length; i++) {
		a = ra[i];
		set = voyc.setFromString(a.id);
		c = voyc.compose(set);
		o = {
			'i':c['id'],
			'n':seq++,
			'q':c['th'],
			't':c['translit'],
			'a':c['en'],
		};
		cards.push(o);
	}
	
	// add options and cards to flashdata
	var data = voyc.clone(voyc.flashdata);
	voyc.merge(data,opt)
	data['cards'] = cards	

	// send to flash
	voyc.post.post(data);
}

voyc.composeDeck = function(deck) {
	var s = '';
	for (var i=0; i<deck.length; i++) {
		switch (voyc.dmode) {
			case 'Thai': s += voyc.composeSentenceThai(deck[i]); break;
			case 'Hint': s += voyc.composeSentenceHint(deck[i]); break;
			case 'English' : s += voyc.composeSentenceEnglish(deck[i]); break;
			case 'Literal' : s += voyc.composeSentenceLiteral(deck[i]); break;
		}
	}
	return s;
}

voyc.composeSentenceEnglish = function(item) {
	var s = '';
	s += '<sentence class="english">';
	s += "<button a="+item.t+"><icon type=draw name=speaker></icon></button>";
	s += item.en;
	s += '</sentence>';
	return s;
}
voyc.composeSentenceLiteral = function(item) {
	var s = '';
	s += '<sentence class="english">';
	s += "<button a="+item.t+"><icon type=draw name=speaker></icon></button>";
	s += item.wo;
	s += '</sentence>';
	return s;
}
voyc.composeSentenceThai = function(item) {
	var s = '';
	s += '<sentence class="thai">';
	s += "<button a="+item.t+"><icon type=draw name=speaker></icon></button>";
	s += item.th;
	s += '</sentence>';
	return s;
}

voyc.composeSentenceHint = function(item) {
	var s = '';
	var syl = '';
	var spc = '';
	s += '<sentence class="thai">';
	s += "<button a="+item.t+"><icon type=draw name=speaker></icon></button>";
	s += '<word>';
	var syllen = '';
	var ndx = 0;
	var n=0;
	while (ndx<item.hint.length) {
		syllen = item.hint[ndx];
		ndx++;
		
		// word spacing
		if (syllen == ' ' || syllen == '-') {
			s += '</word>';
			if (ndx < item.hint.length-1) {
				if (syllen == '-') {
					s += '<word break>';
				}
				else {
					s += '<word>';
				}
			}
		}

		else {
			syllen = Number(syllen);
			syltone = item.hint[ndx];
			ndx++;
			for (var i=0; i<syllen; i++) {
				spc +=item.th[n];
				syl +=item.th[n]; 
				n++;
			}
		}
		s += '<sylcont><syllable hint="' + syltone + '">' + syl + '</syllable><sylspc>' + spc + '</sylspc></sylcont>';
		spc = syl = '';
	}
	s += '</word>';
	s += '</sentence>';
	return s;
}

addEventListener('load', function() {
	// fix translit
	for (key in voyc.dict) {
		card = voyc.dict[key];
		if (card.translit) {
			//card.translit = card.translit.replace( /(.*)\_(.*)/g, '$1<sup>$2</sup>');
			card.translit = card.translit.replace( /(.*?)\_([FMRHL])/g, '$1<sup>$2</sup>');
		}
	}
	
	// create post object to call flash
	voyc.post = new voyc.Post('flash','http://flash.voyc.com','../../flash/index.html');
}, false);
