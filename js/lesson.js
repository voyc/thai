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

voyc.drawGroup = function(group) {
	s = '';
	s += "<div select class='panel list blu'>";
	s += "<h3>" + group.title + "</h3>";
	s += "<table>";
	var card;
	for (var i=0; i<group.ida.length; i++) {
		card = voyc.getCardById(group.ida[i]);
		s += "<tr id=" + card.id + ">";
		s += "<td class='thai'>" + card.th + "</td>";
		s += "<td class='english'>" + card.translit + "</td>";
		s += "<td class='english'>" + card.en + "</td>";
		s += "</tr>";
	}
	s += "</table></div>";
	return s;
}

voyc.drawPanel = function(title,cb) {
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
		card.translit = card.translit.replace( /(.*)\_(.*)/, '$1<sup>$2</sup>');
	}
	
	// create post object to call flash
	voyc.post = new voyc.Post('flash','http://flash.voyc.com','../../flash/index.html');
}, false);
