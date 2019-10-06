/**
	class Alphabet
	singleton
	
	public function:
**/
voyc.Alphabet = function() {
	this.alpha = [];
	this.load();
}

voyc.Alphabet.prototype.load = function() {
	this.alpha = voyc.alphabetData;
}

voyc.Alphabet.prototype.isEnglish = function(s) {
	return (s.match(/^[ \?\-A-Za-z0-9]*$/));
}

voyc.Alphabet.prototype.lang = function(s) {
	return (this.isEnglish(s) ? 'e' : 't');
}

voyc.Alphabet.prototype.lookup = function(word,lang) {
	var lang = lang || this.lang(word);
	var m = [];
	if (word) {
		for (var i=0; i<this.alpha.length; i++) {
			if (this.alpha[i][lang].toLowerCase() == word.toLowerCase()) {
				m.push(this.alpha[i]);
			}
		}
	}
	return m;
}

voyc.Alphabet.prototype.printDiacritic = function(glyph) {
	var t = glyph.t;
	if (glyph.a == 'd') {
		t = '&#9676' + t;
	}
	return t;
}

voyc.Alphabet.prototype.iterate = function(cb, primaryOnly) {
	primaryOnly = primaryOnly || true;
	for (var i=0; i<this.alpha.length; i++) {
		if (primaryOnly && ([' ', 'u', 'o'].includes(this.alpha[i].p))) {
			continue;
		}
		cb(this.alpha[i],i);
	}
}

voyc.Alphabet.prototype.listAll = function() {
	var s = ''
	s += this.alpha.length + ' total' + '<br/>';
	var cnt = 0;
	this.iterate(function(m,i) {
		s += voyc.alphabet.printDiacritic(m) + '\t' + m.e + '\t' + m.p + '<br/>';
		cnt++;
	});
	s = cnt + ' active' + '<br/>' + s;
	return s;
}
