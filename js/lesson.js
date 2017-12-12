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
	input panel is an object containing title and set, or title and cb
**/
voyc.drawPanel = function(panel) {
	var s = '';
	s += "<div select class='panel list blu'>";
	s += "<h3>" + panel.title + "</h3>";
	s += "<table>";

	// build set
	if (panel.cb) {
		panel.set = panel.set || [];
		for (key in voyc.dict) {
			card = voyc.dict[key];
			if (panel.cb(card)) {
				panel.set.push(card.id);
			}
		}
	}

	// compose and draw
	var p;
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
	}
	c = {'id':id, th:'', en:'', translit:''};

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
		c = voyc.compose(parseInt(a.id));
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
