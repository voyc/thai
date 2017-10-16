﻿/**
	class Keyboard\
	@constructor
**/
voyc.Keyboard = function() {
	// is singleton
	if (voyc.Keyboard._instance) return voyc.Keyboard._instance;
	else voyc.Keyboard._instance = this;

	this.rownames = ['', 'Middle&nbsp;Class', 'High&nbsp;Class', 'Low&nbsp;Class', 'Sonorant', 'Sanskrit', 'Digit'];
	this.rowtags  = ['', 'mid', 'high', 'low', 'sonorant', 'sanskrit', 'digit'];
	this.buffer = [];  // array of keys to the alphabet table
	this.typing = true;
	this.alphabet = {};  // table will be loaded dynamically from ./alphabet/th.js file
	this.post = new voyc.Post('flash','http://flash.voyc.com','../flash/index.html');
}

voyc.Keyboard.configdefault = {	
	mode: 'typewriter',  // typewriter or learning
	showtranslit: 'on',  // on or off
}

voyc.Keyboard.prototype = {
	setup: function(container) {
		var s = this.drawKeypad();
		container.innerHTML = s;
		this.drawKeys();
		this.attachDomEventHandlers();
		this.initConfig();
	},

	getConfig: function(name) {
		var value = localStorage.getItem(name);
		console.log('localStorage get ' + name + ': ' + value);
		if (!value) {   // (value === null)
			value = voyc.Keyboard.configdefault[name];
		}
		return value;
	},
	setConfig: function(name, value) {
		localStorage.setItem(name, value);
		console.log('localStorage set ' + name + ': ' + value);
		if (name == 'mode') {
			if (value == 'typewriter') {
				voyc.keyboard.toggleAnalytics(false);
				voyc.keyboard.toggleTyping(true);
			} 
			else if (value == 'learning') {
				voyc.keyboard.toggleAnalytics(true);
				voyc.keyboard.toggleTyping(false);
			} 
		}
		else if (name == 'showtranslit') {
			var b = (value == 'on') ? true : false;
			this.toggleTranslit(b);
		}
		return value;
	},
	initConfig: function() {
		var mode = this.setConfig( 'mode', this.getConfig('mode'));
		var showtranslit = this.setConfig( 'showtranslit', this.getConfig('showtranslit'));
		voyc.$('showtypewriter').checked = (mode == 'typewriter');
		voyc.$('showanalytics').checked = (mode == 'learning');
		voyc.$('showanalytics').checked = (mode == 'learning');
		voyc.$('showtranslit').checked = (showtranslit == 'on');
	},

	drawKeypad: function() {
		// typing subtable
		var skybd = '<table id="keyboard_subtable" class="sub"><tr>';
		skybd += '<td class="noborder hog"><textarea id="tbs" class="typingwindow devanagari"></textarea></td>';
		skybd += '<td class="noborder"><button id="clear">Clear</button></td>';
		skybd += '<td class="noborder hog hidden"><textarea id="tbt" class="typingwindow translit"></textarea></td>';
		skybd += '</tr></table>';

		// analytics subtable
		sanal = '';
		sanal += '<table id="analytics"><tr>';
		sanal += '<td><fieldset>';
		sanal += '<table>';
		sanal += '<tr><td><td class="hdr pool" tag="tonemark">Tone Mark</td></tr>';
		sanal += '<tr><td><td class="hdr pool" tag="special">Special</td></tr>';
		sanal += '<tr><td><td class="hdr pool" tag="combo">Combo</td></tr>';
		sanal += '</table></fieldset></td>';
		sanal += '<td>';
		sanal += '<button id="practice" >Practice</button>';
		sanal += '<button id="clearselection" >Clear Selection</button>';
		sanal += '</td></tr>';
		sanal += '</table>';

		// big table starts here
		var s = '<div id="keypad"><table>';

		// typing
		s += '<tr id="typing"><td colspan="16" class="noborder">' + skybd + '</td></tr>';

		// first row: consonant, ending, vowel
		s += '<tr class="colhdrrow"><td class="noborder"></td><td class="hdr" colspan="7">Consonant</td><td class="hdr" colspan="6">Vowel</td><td class="hdr"></td></tr>';

		// draw keypad rows and columns
		var numcols=14;
		var numrows = 6;
		var a;
		var cell = '';
		for (var row=1; row<=numrows; row++) {
			s += '<tr>';
			s += '<td class="rowhdr hdr" id="rowhdr_' + row + '" tag="' + this.rowtags[row] + '">'+this.rownames[row]+'</td>';
			for (var col=1; col<=(numcols); col++) {
				var id = 'cell_' + row + '_' + col;
				s += '<td class="key" id="' +id+ '">&nbsp;</td>';
			}
			s += '</tr>';
		}

		// analytics
		s += '<tr><td id="analyticscontainer" colspan="16" class="noborder">'+sanal+'</td></tr>';

		// end big table
		s += '</table>';

		s += '</div>';
		return s;
	},

	drawKeys: function() {
		var i;
		var cell = '';
		var id = '';
		var a;
		for (var i in this.alphabet['alphabet']) {
			a = this.alphabet['alphabet'][i];
			id = this.getId(a);
			if (voyc.$(id)) {
				cell  = '<div class="devanagari">'+a['s']+'</div>';
				cell += '<div class="translit hidden">'+a['t']+'</div>';
				voyc.$(id).innerHTML = cell;
				voyc.$(id).setAttribute('u', i);
			}
		}

		// spacebar
		id = 'cell_6_11';
		cell  = '<div class="devanagari">&#x23b5;</div>';
		cell += '<div class="translit hidden"></div>';
		voyc.$(id).innerHTML = cell;
		voyc.$(id).setAttribute('u', 0x0020);

		// hide the empty cells
		for (var i=0; i<this.alphabet['empties'].length; i++) {
			var a = this.alphabet['empties'][i];
			var id = this.getId(a);
			voyc.$(id).classList.add('noborder');
		}
	},

	attachDomEventHandlers: function() {
		var self = this;

		// keys
		var a, e;
		for (var i in this.alphabet['alphabet']) {
			a = this.alphabet['alphabet'][i];
			id = this.getId(a);
			e = voyc.$(id);
			if (e) {
				e.addEventListener('click', function(event) {
					self.onkey(event);
				});
			}
		}

		// analytics checkboxes
		var a = document.querySelectorAll('#analytics input[type=checkbox]');
		var e;
		for (var i=0; i<a.length; i++) {
			e = a[i];
			e.addEventListener('click', function(event) {
				var tag = event.target.id;
				var boo = event.target.checked;
				self.highTag( event, tag, boo);
				event.target.classList.toggle('selected', boo);
			})
		}

		// row/column headers
		var a = document.querySelectorAll('td.hdr');
		var e;
		for (var i=0; i<a.length; i++) {
			e = a[i];
			e.addEventListener('click', function(event) {
				var tag = (event.target.getAttribute('tag')) ? event.target.getAttribute('tag') : event.target.innerHTML.toLowerCase();
				var boo = !event.target.classList.contains('selected');
				self.highTag( event, tag, boo);
				event.target.classList.toggle('selected', boo);
			}, false);
		}

		// clear typing button
		voyc.$('clear').addEventListener('click', function(event) {
			self.clearTyping();
			voyc.$('tbs').value = '';
			voyc.$('tbt').value = '';
			self.buffer = [];
		});

		// clear selection button
		voyc.$('clearselection').addEventListener('click', function(event) {
			self.unhighAll();
		});

		// practice button
		voyc.$('practice').addEventListener('click', function(event) {
			self.practice(event);
		});

		window.addEventListener('keyup', function(event) {
		    if (event.keyCode === 88 && event.altKey) {   // alt-x
				self.promptDeveloper();
		        return false;
		    }
		});

		voyc.$('tbs').addEventListener('input', function(event) {
			self.oninput(event);
		}, false);
	},

	clearTyping: function() {
		voyc.$('tbs').value = '';
		voyc.$('tbt').value = '';
		this.buffer = [];
	},

	highTag: function(event, tag, boo) {
		if (!event.ctrlKey) {
			this.unhighAll();
		}
		var to = this.alphabet['tags'][tag];
		for (var m in this.alphabet['alphabet']) {
			ao = this.alphabet['alphabet'][m];
			if (ao[to['t']] == to['v']) {
				id = this.getId(ao);
				if (boo) {
					voyc.$(id).classList.add('selected');
				}
				else {
					voyc.$(id).classList.remove('selected');
				}
			}
		}
	},

	unhighAll: function() {
		var keys = document.querySelectorAll('.selected');
		for (var i=0; i<keys.length; i++) {
			e = keys[i];
			e.classList.remove('selected');
		}
	},

	getId: function(a) {
		return 'cell_'+a['r']+'_'+a['c'];
	},

	toggleTyping: function(force) {
		this.unhighAll();
		this.clearTyping();
		var b = force;
		this.typing = b;
		voyc.toggleAttribute(voyc.$('typing'), 'hidden', '', !b);
	},

	toggleAnalytics: function(force) {
		var b = force;

		// column headers
		var colhdrrows = document.getElementsByClassName('colhdrrow');
		for (var i=0; i<colhdrrows.length; i++) {
			e = colhdrrows[i];
			voyc.toggleAttribute(colhdrrows[i], 'hidden', '', !b);
		}

		// row headers
		var rowhdrs = document.getElementsByClassName('rowhdr');
		for (var i=0; i<rowhdrs.length; i++) {
			voyc.toggleAttribute(rowhdrs[i], 'hidden', '', !b);
		}

		// row of fieldsets
		voyc.toggleAttribute(voyc.$('analytics'), 'hidden', '', !b);
	},

	toggleTranslit: function(force) {
		var boo = force;
		var keys = document.querySelectorAll('div.translit');
		for (var i=0; i<keys.length; i++) {
			e = keys[i];
			if (boo) {
				e.classList.remove('hidden');
			}
			else {
				e.classList.add('hidden');
			}
		}
	},

	// user has typed on the real keyboard
	oninput: function(event) {
		var s = voyc.$('tbs').value;
		this.buffer = this.getBufferFromString(s);
		this.redrawTypingWindows(event);
	},

	// user has clicked a key on our page
	onkey: function(event) {
		var e = event.target.parentElement;

		// if in typing mode, add this char to the window
		if (this.typing) {
			var u = e.getAttribute('u');
			if (!u) return;

			// insert the character at the caret position in textarea and buffer
			var selStart = voyc.$('tbs').selectionStart;
			var selEnd = voyc.$('tbs').selectionEnd;
			var out = selEnd - selStart;
			this.buffer.splice(selStart, out, parseInt(u,10));
			var s = this.getStringFromBuffer(this.buffer);
			voyc.$('tbs').value = s;
			voyc.$('tbs').selectionStart = voyc.$('tbs').selectionEnd = (selStart + 1);
			voyc.$('tbs').focus();

			this.redrawTypingWindows(event);
		}

		// if NOT in typing mode, highlight the key
		else {
			if (!event.ctrlKey) {
				this.unhighAll();
			}
			e.classList.toggle('selected');
		}
	},

	redrawTypingWindows: function(event) {
		//voyc.$('tbt').value = this.buffer;
		//voyc.$('tbt').value = this.getStringFromBuffer(this.buffer);
		voyc.$('tbt').value = this.getTranslitFromBuffer(this.buffer);
	},

	promptDeveloper: function() {
		// redraw the four display strings
		var tbs = voyc.$('tbs').value;  // sanskrit
		var tbt = voyc.$('tbt').value;  // translit
		var tbc = '';  // components
		var tbu = '';  // unicode
		var numComponents = 1;

		var comma = ',';
		var hyphen = '-';

		var len = this.buffer.length;
		var u, a;  // current character
		var un, an; // next character
		var up, ap; // previous character
		var tween = false;
		var hasSpace = this.bufferContainsSpace(this.buffer);
		for (var i=0; i<len; i++) {
			u = this.buffer[i];
			a = this.alphabet['alphabet'][u];  // current charcter
			un = (i<len-1) ? this.buffer[i+1] : null;
			an = this.alphabet['alphabet'][un];  // next character

			// if current char is letter, and prev char is not space, this is beginning of syllable
			tween = ((a['b'] == 'l' && ap && ap['b'] != ' '));

			// components: syllables separated by commas, or words separated by spaces
			if (hasSpace) {
				if (a['s'] == ' ') {
					tbc += comma;
					numComponents++;
				}
				else {
					tbc += a['s'];
				}
			}
			else {
				if (tween) {
					tbc += comma;
					numComponents++;
				}
				tbc += a['s'];
			}

			// unicode: symbols separated by commas
			if (tbu) {
				tbu += comma;
			}
			tbu += a['u'];

			up = u;
			ap = this.alphabet['alphabet'][up];  // previous character
		}

		var s = "insert into flash.quest (q, a, components, numcomponents) values ('$1', '$2', '$3', $4)";
		s = s.replace('$1', tbs);
		s = s.replace('$2', tbt);
		s = s.replace('$3', tbc);
		s = s.replace('$4', numComponents.toString());
		prompt('',s);
	},

	setLanguage: function(lang) {
		voyc.appendScript('alphabet/' + lang + '.js');
		console.log('loading alphabet ' + lang);
	},
	
	practice: function(evt) {
		// build an array of selected cards, or all cards
		var selector = '.key.selected';
		var ra = document.querySelectorAll(selector);
		var cards = [];
		var r,o;
		if (ra.length) {
			for (var i=0; i<ra.length; i++) {
				r = ra[i];
				o = {
					'i':parseInt(r.getAttribute('u'),10),
					'n':i+1,
					'q':r.querySelector('div:nth-child(1)').innerHTML,
					't':r.querySelector('div:nth-child(1)').innerHTML,
					'a':r.querySelector('div:nth-child(2)').innerHTML,
				};
				cards.push(o);
			}
		}
		else {
			var seq = 1;
			for (key in this.alphabet['alphabet']) {
				r = this.alphabet['alphabet'][key];
				if (r['t'] && r['t'] != ' ') {
					o = {
						'i':r['i'],
						'n':seq++,
						'q':r['s'],
						't':r['t'],
						'a':r['t'],
					};
					cards.push(o);
				}
			}
		}
		
		// build data structure including array of cards
		data = {
			'name': 'practice',
			'title': 'Thai Alphabet',
			'reversible':true,
			'language':true,
			'sketch':true,
			'translit':false,
			'audio':false,
			'db': false,
			'hm': false, // show translit with question or answer
			'cards': cards,
		}
		
		this.post.post(data);
	},
}

window.addEventListener('load', function(evt) {
	// set up keyboard
	voyc.keyboard = new voyc.Keyboard();
	voyc.keyboard.setLanguage('th');

	// attach leftnav menu
	voyc.$('showtypewriter').addEventListener('click', function(evt) {
		voyc.keyboard.setConfig('mode', 'typewriter');
	}, false);
	voyc.$('showanalytics').addEventListener('click', function(evt) {
		voyc.keyboard.setConfig('mode', 'learning');
	}, false);
	voyc.$('showtranslit').addEventListener('click', function(evt) {
		voyc.keyboard.setConfig('showtranslit', (evt.currentTarget.checked ? 'on' : 'off'));
	}, false);
}, false);

window['voyc']['onAlphabetLoaded'] = function(alphabet) {
	(new voyc.Keyboard).alphabet = alphabet;
	console.log('alphabet loaded');
	voyc.keyboard.setup(voyc.$('content'));
}


/**
	Utilities for accessing the alphabet
**/

voyc.Keyboard.prototype.getUnicodeFromChar = function(c) {
	return c.charCodeAt(0)
}

voyc.Keyboard.prototype.getCharFromUnicode = function(u) {
	return String.fromCharCode(u);
}

voyc.Keyboard.prototype.getBufferFromString = function(s) {
	var b = s.split(''); 
	for (var i=0; i<b.length; i++) {
		b[i] = this.getUnicodeFromChar(b[i]);
	}
	return b;
}

voyc.Keyboard.prototype.getStringFromBuffer = function(b) {
	var a = [];
	for (var i=0; i<b.length; i++) {
		a[i] = this.getCharFromUnicode(b[i]);
	}
	return a.join('');
}

voyc.Keyboard.prototype.bufferContainsSpace = function(b) {
	var r = false;
	for (var i=0; i<b.length; i++) {
		if (this.alphabet['alphabet'][b[i]].n == 'space') {
			r = true;
			break;
		}
	}
	return r;
}

voyc.Keyboard.prototype.getTranslitFromBuffer = function(b) {
	var comma = ',';
	var hyphen = '-';
	var tbt = '';
	var u, a;  // current character
	var un, an; // next character
	var up, ap; // previous character
	var hasSpace = this.bufferContainsSpace(b);
	for (var i=0; i<b.length; i++) {
		u = b[i];
		a = this.alphabet['alphabet'][u];  // current character
		un = (i<b.length-1) ? b[i+1] : null;
		an = this.alphabet['alphabet'][un];  // next character

		// if current char is letter, and prev char is not space, this is beginning of syllable
		tween = ((a['b'] == 'l' && ap && ap['b'] != ' '));

		// translit: 
		//    1. hypens between syllables, 
		//    2. add 'a' to consonants with no following vowel diacritic
		if (tween && !hasSpace) {  //} && this.config.translitUsingHypens) {
			tbt += hyphen;
		}
		tbt += a.t;
		//tbt += (a.p == 'c' && (!an || an.p != 'a')) ? 'a' : '';
		if ((a['p'] == 'c' && a['b'] == 'l') && (!an || !(an['p'] == 'v' && an['b'] == 'd'))) {
			tbt += 'a';
		}

		up = u;
		ap = this.alphabet['alphabet'][up];  // previous character 
	}
	return tbt;
}

voyc.Keyboard.prototype.getTranslitFromString = function(s) {
	var b = this.getBufferFromString(s);
	var t = this.getTranslitFromBuffer(b);
	return t;
}

	