/**
	class SenGen
	singleton
	public function genRequest(request);
	@param request {object|null}
	@return {array} of strings

	// example 1. a literal work string containing literals, arrays, label, function
	var a = genRequest({count:10, pattern:'ถ้าอ [ถ้าอ_อกไป_ข้างนอก,เมื่อ_ออกไป_ข้างนอก] [,จะ] [,ไม่] @wear $number(1,3,1) [หมวก,แว่นกันแดด,เสื้อแขนยาว]'});
	
	Required:
		voyc.semantics
		voyc.vocab
**/

voyc.SenGen = function() {
	this.breakSentence = '<br/>';
	this.breakWord = ' ';
	this.maxSentences = 10000;
	this.target = [];
}

/**
	process one request
	@input {object} req
	@return {array} sentences

	a req object contains
		pattern {string}
		count {number}
**/
voyc.SenGen.prototype.genRequest = function(req) {
	var r = [];

	// default request
	var req = req || {};
	req.count = req.count || 1;
	req.shuffle = req.shuffle || 1;
	this.target = req.target || [];
	
	// loop for request count
	if (req.pattern) {
		for (var n=0; n<req.count; n++) {
			var ts = this.tokenize(req.pattern);
			var a = this.substitute(ts);
			r = r.concat(a);
		}
	}
	else {
		for (var i=0; i<voyc.semantics.length; i++) {
			if (voyc.semantics[i].pos == 'sentence' || voyc.semantics[i].pos == 'conversation') {
				var ts = this.tokenize(voyc.semantics[i].name);
				var a = this.substitute(ts);
				r = r.concat(a);
			}
		}
	}

	r = this.filter(r,req.count);

	this.setRecency(r);
	return r;
}

/**
	filter
**/
voyc.SenGen.prototype.filter = function(a,cnt) {
	var r = this.filterStatus(a);
	r = voyc.shuffleArray(r);
	r = this.sortRecency(r);
	r.splice(cnt,r.length-cnt);
	return r;
}
	
/**
	sort by recency
**/
voyc.SenGen.prototype.sortRecency = function(a) {
	// build sorted array of sentence + max recency
	var sa = [];
	for (var i=0; i<a.length; i++) {
		var w = a[i].split(' ');
		var rr = 0;
		var ro = 0;
		for (var j=0; j<w.length; j++) {
			var v = voyc.vocab.get(w[j]);
			if (!v) console.log('word not in vocab');
			if (v.r > rr) {
				rr = v.r;
			}
			if (ro == 0 || v.r < ro) {
				ro = v.r;
			}
		}
		var o = {s:a[i], rr:rr, ro:ro};
		sa.push(o);
	}
	
	// sort the array, reverse order of recency (oldest first)
	sa.sort(function(a, b) {
		var r = a.rr - b.rr;
		if (r == 0) {
			r = a.ro = b.ro;
		}
		return r;
	});
	
	// rebuild array of sentences
	var r = [];
	for (var i=0; i<sa.length; i++) {
		r.push(sa[i].s);
	}
	return r;
}

/**
	set recency on each vocabulary word
	@input {array} vocab list
**/
voyc.SenGen.prototype.setRecency = function(a) {
	var timestamp = new Date().getTime();
	for (var i=0; i<a.length; i++) {
		var w = a[i].split(' ');
		for (var j=0; j<w.length; j++) {
			voyc.vocab.finger(w[j], timestamp);
		}
	}
}

/**
	return an array of sentences
	all sentences, with every item in every array
**/
voyc.SenGen.prototype.substitute = function(tokenStack) {
	var a = [];
	var n = 0;
	do {
		var s = this.genOne(tokenStack);
		a.push(s);
	} while (this.inc(tokenStack) && (n++ < this.maxSentences))
	return a;
}

/**
	increment the array indexes
	@input {array} tokenStack
	@return {boolean} true if still working, false if finished
**/
voyc.SenGen.prototype.inc = function(tokenStack) {
	var r = true;
	for (var i=0; i<tokenStack.length; i++) {
		var t = tokenStack[i];
		if (t.type == 'list') {
			t.ndx++;
			if (t.ndx >= t.value.length) {
				t.ndx = 0;
			}
			else {
				break;
			}
		}
	}
	if (i >= tokenStack.length) {
		r = false;
	}
	return r;
}
/**
	generate one sentence
	@input {array} tokenStack
	@return {string} sentence
	Each token with type=array contains an ndx.
**/
voyc.SenGen.prototype.genOne = function(tokenStack) {
	var s = '';
	
	for (var i=0; i<tokenStack.length; i++) {
		var t = tokenStack[i];
		if (t.type == 'literal') {
			s += t.value;
		}
		else if (t.type == 'function') {
			s += this.callFunction(t.value);
		}
		else if (t.type == 'list') {
			s += t.value[t.ndx];
		}
		s += this.breakWord;
	}
	s = s.trim();
	s = s.replace(/ +/g,' ');
	return s;
}

/**
**/
voyc.SenGen.prototype.filterStatus = function(a) {
	var r = [];
	for (var i=0; i<a.length; i++) {
		var sen = a[i];
		var w = sen.split(' ');
		var numwords = w.length;
		var mcnt = wcnt = tcnt = 0;
		for (var j=0,q=1; j<numwords && q; j++) {
			var word = w[j];
			if (this.target.indexOf(word) >= 0) {
				tcnt++;
			}
			else if (!isNaN(parseInt(word))) {  // is number
				mcnt++;
			}
			else {
				var e = voyc.vocab.get(word);
				if (e) {
					if (e.s == 'm') {
						mcnt++;
					}
					if (e.s == 'w') {
						wcnt++;
					}
				}
			}
		}
		var numt = this.target.length;
		if (((numt && tcnt) || !numt) && (tcnt+mcnt == numwords)) {
		//if ((numt && tcnt && tcnt+mcnt == numwords) || (!numt && mcnt == numwords)) {
			r.push(sen);
		}
	}
	return r;
}

/**
	execute a function
	currently supported function names: number
**/
voyc.SenGen.prototype.callFunction = function(f) {
	var s = '';
	var x = f.replace(/\$(.*)\((.*)\)/gm,'$1 $2');
	var a = x.split(' ');
	var fname = a[0];
	var params = a[1].split(',');
	switch(fname) {
		case 'number':
			var args = [];
			for (var i=0; i<params.length; i++) {
				args.push(parseInt(params[i]));
			}
			s += voyc.genNumber.apply(this, args);
			break;
	}
	return s;
}

/**
	@input {string} pattern
	@return {array} tokenstack
	a tokenstack is an array of objects. 
	each object describes one token: ndx, type, source, value
		ndx {number} index into the voyc.semantics table
		type {string} [literal,array,function]
		value {string}
**/
voyc.SenGen.prototype.tokenize = function(pattern) {
	var tokenStack = [];

	// build initial stack
	var tokens = pattern.split(' ');
	for (var i=0; i<tokens.length; i++) {
		var type = 'literal';
		var source = 'input';
		var value = tokens[i];
		tokenStack.push({ndx:0, type:type, source:source, value:value});
	}

	// loop recursively to unpack nested patterns and arrays
	var loop = 0;
	var failsafe = 100;
	var stillGoing = true;
	while (stillGoing || loop > failsafe) {
		stillGoing = false;
		loop++;
		for (var i=0; i<tokenStack.length; i++) {
			var t = tokenStack[i];
			if (t.type == 'cat') {
				console.log('cat');
				var a = [];
				for (var j=0; j<t.value.length;j++) {
					console.log('cat one');
					var pndx = this.lookupSemantics(t.value[j]);
					if (pndx < 0) {
						console.log([t.value[j], 'not found']);
						break;
					}
					a = a.concat(voyc.semantics[pndx].value);
				}
				t.value = a;
				t.type = 'list';
			}
			if (typeof(t.value) == 'string' && t.value.substring(0,1) == '[') {
				t.type = 'list';
				var x = t.value.replace(/\[|\]/gm,''); // strip brackets
				//x = x.replace(/_/gm,' ');  // underscore to space
				t.value = x.split(',');  // split on comma
				stillGoing = true;
			}
			if (typeof(t.value) == 'string' && t.value.substring(0,1) == '$') {
				t.type = 'function';
			}
			if (typeof(t.value) == 'string' && t.value.substring(0,1) == '@') {
				var pndx = this.lookupSemantics(t.value);
				if (pndx < 0) {
					console.log([t.value, 'not found']);
					break;
				}
				t.type = voyc.semantics[pndx].type;
				t.value = voyc.semantics[pndx].value;
				if (t.type == 'pattern') {
					var ts = this.tokenize(t.value);  // recursive call
					tokenStack.splice.apply(tokenStack, [i, 1].concat(ts)); //tokenStack.splice(i,1,ts);
				}
				stillGoing = true;
			}
		}
	}
	
	return tokenStack;
}

/**
	look up one name in the semantics table
	@input {string} tokenName
	@return {number} index into the semantics table
**/
voyc.SenGen.prototype.lookupSemantics = function(tokenName) {
	ndx = -1;
	for (var i=0; i<voyc.semantics.length; i++) {
		if (tokenName == voyc.semantics[i].name) {
			ndx = i;
			break;
		}
	}
	return ndx;
}
