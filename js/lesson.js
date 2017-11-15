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

// a panel has title and ida
voyc.drawPanel = function(panel) {
	var s = '';
	s += "<div select class='panel list blu'>";
	s += "<h3>" + panel.title + "</h3>";
	s += "<table>";
	var c = {id:0, th:'', translit:'', en:''};
	var p = {};
	for (var i=0; i<panel.ida.length; i++) {  // loop thru each p in panel
		//p = voyc.getCardById(panel.ida[i]);
		p = panel.ida[i];
		c = {id:0, th:'', translit:'', en:''};
		c = voyc.composeSet(p,c);
		s += voyc.drawRow(c);
	}
	s += "</table></div>";
	return s;
}

voyc.composeSet = function(p, c) {
	var item = {};
	if (p.length) {
		for (var i=0; i<p.length; i++) {  // loop thru each item in p
			item = p[i];
			if (item.length) {
				c = voyc.composeSet(item, c);  // recursive call to self
			}
			else {
				card = voyc.getCardById(item);
				switch(card.typ) {
					case 'word':
						c = voyc.composeCard(card, c);
						break;
					case 'phrase':
					case 'sentence':
						c = voyc.composeSet(card.set, c);
						break;
				}
			}
		}
	}
	else {
		card = voyc.getCardById(p);
		switch(card.typ) {
			case 'word':
				c = voyc.composeCard(card, c);
				break;
			case 'phrase':
			case 'sentence':
				c = voyc.composeSet(card.set, c);
				break;
		}
	}
	return c;
}

// concatenate one card to a group of cards
// card is input
// c is input and output
voyc.composeCard = function(card, c) {
	c.id += card.id;
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

voyc.xdrawSetSentence = function(set) {
	s = '';
	s += "<div select class='panel list blu'>";
	s += "<h3>" + set.title + "</h3>";
	s += "<table>";
	var sen,card;
	idseq = set.idseq;
	for (var i=0; i<set.ida.length; i++) {
		sen = set.ida[i];
		th = en = translit = '';
		for (var j=0; j<sen.length; j++) {
			card = voyc.getCardById(sen[j]);
			th += card.th;
			if (translit) translit += ' ';
			translit += card.translit;
			if (en) en += ' ';
			en += card.en;
		}
		s += "<tr id=" + idseq + ">";
		s += "<td class='thai'>" + th + "</td>";
		s += "<td class='english'>" + translit + "</td>";
		s += "<td class='english'>" + en + "</td>";
		s += "</tr>";
		idseq++;
	}
	s += "</table></div>";
	return s;
}


voyc.xdrawPanel = function(title,cb) {
	s = '';
	s += "<div select class='panel list blu'>";
	s += "<h3>" + title + "</h3>";
	s += "<table>";
	for (key in voyc.dict) {
		card = voyc.dict[key];
		if (cb(card)) {
			s += "<tr id=" + card.id + ">";
			s += "<td class='thai'>" + card.th + "</td>";
			s += "<td class='english'>" + card.translit + "</td>";
			s += "<td class='english'>" + card.en + "</td>";
			s += "</tr>";
			}
		}
	s += "</table></div>";
	return s;
}
	
voyc.practice = function(opt) {
	// pull an array of selected elements, or all
	var ra = document.querySelectorAll('tr[id].selected');
	if (!ra.length) {
		ra = document.querySelectorAll('tr[id]');
	}

	// build data array pulling cards from dict
	var cards = [];
	var r,o,a;
	if (ra.length) {
		var seq = 1;
		for (var i=0; i<ra.length; i++) {
			a = ra[i];
			r = voyc.getCardById(a.id);
			o = {
				'i':r['id'],
				'n':seq++,
				'q':r['th'],
				't':r['translit'],
				'a':r['en'],
			};
			cards.push(o);
		}
	}
	
	// add options and cards to flashdata
	var data = voyc.clone(voyc.flashdata);
	voyc.merge(data,opt)
	data['cards'] = cards	

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
