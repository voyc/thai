/**
 task 1: nested variables
 'person > {family,professional,personGender,familyGender]}'
 'personGender > '
 'familyGender > '
 
 task 2: controlled vocabulary
   one target word
   remainder mastered words

 subtask: evaluate strings to internal structures
**/



/**
	class SenGen
	Sentence Generator
**/
function SenGen() {
}

SenGen.prototype.load = function() {
	var a = this.expandPatterns();
	var s = a.join(voyc.breakSentence);
	document.getElementById('content').innerHTML = s;
}

SenGen.prototype.expandPatterns = function() {
	// read through syntacticStructures, rewrite with substitution
	var patterns = [];
	for (var i=0; i<voyc.syntacticStructures.length; i++) {
		var pattern = voyc.syntacticStructures[i];
		var a = this.expandPattern(pattern);
		
		if (a.length > 0) {
			//patterns.splice(0,1);
			patterns = patterns.concat(a);
		}
		//Rewrites should be replaced.
	}
	return patterns;
}

SenGen.prototype.expandPattern = function(pattern) {
	// read through syntacticStructures, rewrite with substitution
	var a = pattern.value.split(' ');
	var an = [];
	for (var j=0; j<a.length; j++) {
		// find all matching patterns with this name, push each one with substitution
		this.lookupName(a[j], function(value) {
			var s = '';
			for (var k=0; k<a.length; k++) {
				if (k == j) {
					s += value + voyc.breakWord;
				}
				else {
					s += a[k] + voyc.breakWord;
				}
			}
			an.push(s);
		});
	}
	return an;
}

SenGen.prototype.lookupName = function(name,cb) {
	for (var i=0; i<voyc.syntacticStructures.length; i++) {
		var pattern = voyc.syntacticStructures[i];
		if (pattern.name == name) {
			cb(pattern.value);
		}
	}
}



function load() {
	var pattern = 'waaverb ว่า';
	var pattern = 'person ว่า [สั่ง,ต้ม,ผัด] food';
	var pattern = '[ญาติ,เด็ก,พี่,น้อง,หลาน] [ชาย,หญิง] [สั่ง,ต้ม,ผัด] food';
	var pattern = 'person auxverb cook meat';
	var pattern = 'meat cook';
	var pattern = 'person cook meat';
	var pattern = 'gperson gender cook meat';
	var pattern = 'gperson gender adjperson';
	//var a = substitute(tokenize('gperson gender adjperson'));
	//var b = substitute(tokenize('meat adjfood'));
	//var c = substitute(tokenize('room adjroom'));

	var a = substitute(tokenize('personJob verbSee mammal adjmammal'));
	var b = substitute(tokenize('personJob verbSee insect adjinsect'));
	//a = a.concat(b,c);
	a = a.concat(b);
	a = shuffle(a);
	a = a.splice(0,200);
	var s = a.join(voyc.breakSentence);

	//s = translate();
	document.getElementById('content').innerHTML = s;
}

function gen(pattern) {
	voyc.tokenStack = tokenize(pattern);
	var a = substitute(voyc.tokenStack);
	a = shuffle(a);
	var s = a.join(voyc.breakSentence);
	return s;
}

var news = [
'โลกออนไลน์แห่แชร์ ราคาตุ๊กตุ๊กเชียงใหม่ หลังมีเหตุไล่นักท่องเที่ยว-ขู่แกร็บคาร์ ',
'ราคาตุ๊กตุ๊กเชียงใหม่ – เป็นเรื่องราวที่ถูกวิพากษ์วิจารณ์อย่างกว้างขวางในสังคมออนไลน์ หลังผู้ใช้เฟซบุ๊กชื่อ Winston Vaduz โพสต์คลิปวิดีโอลงกลุ่ม “จังหวัดเชียงใหม่ CM108.com” พร้อมกับแคปชั่นว่า “Welcome to Chiang Mai” ? โดยในคลิปเป็นเหตุการณ์ของกลุ่มคนขับรถรับจ้าง ตุ๊กตุ๊ก แท๊กซี่ เข้ารุมรถแกร็บ ขณะรับนักท่องเที่ยวมาส่ง ทั้งด่า ข่มขู่ กระโดดถีบ เรื่องแย่งลูกค้านักท่องเที่ยว บริเวณหน้าอาเขตเชียงใหม่ ซึ่งมีผู้ชายสวมเสื้อสีน้ำตาลเป็นคนขับรถสามล้อรับจ้าง ตะโกนท้าทายด่าทอคนขับรถแกร็บเป็นภาษาเหนือว่า “มันเป๋นจะได คิงเป็นไค๋ คิงบะมีสิทธิอู้จะอี้ คิงลงมา คิงลงมา (มันเป็นยัง มึงเป็นใคร มึงไม่มีสิทธิพูดอย่างนี้ มึงลงมาจากรถเลย)”',
'ต่อมาขนส่งเชียงใหม่ นำตัวผู้ก่อเหตุมาสอบสวนและเตรียมดำเนินคดี ที่ทำให้เสื่อมเสียชื่อเสียง และภาพลักษณ์ด้านการท่องเที่ยวของจังหวัดเชียงใหม่',
'ต่อมาขนส่งเชียงใหม่ นำตัวผู้ก่อเหตุมาสอบสวนและเตรียมดำเนินคดี ที่ทำให้เสื่อมเสียชื่อเสียง และภาพลักษณ์ด้านการท่องเที่ยวของจังหวัดเชียงใหม่',
'ขณะที่ในสังคมออนไลน์ มีผู้ถ่ายภาพราคารถตุ๊กตุ๊กเชียงใหม่ มาเผยแพร่ ซึ่งมีผู้แชร์ต่อ และเข้ามาแสดงความคิดเห็นเป็นจำนวนมาก เนื่องจากมีราคาแพง ทำให้คนหันไปใช้บริการแกร็บคาร์ ที่มีความแน่นอนในเรื่องของราคา และระยะทางให้ผู้บริโภคพิจารณา ถึงแม้ว่าจะเป็นการบริการที่ยังไม่ได้การรับรองทางกฎหมายก็ตาม',
];

function translate() {
	//thai1000.sort(function(a,b) {return (a.length - b.length);});
	thai1000.sort(function(a,b) {
		var x = b.t.length - a.t.length;	// by length descending
		//if (x == 0) {
		//	// we need a sort method per http://www.thai-language.com/ref/alphabetical-order
		//	x = (a.t == b.t) ? 0 : (a.t > b.t) ? 1 : -1;	// by thai alpha, incorrect
		//}
		return x;
	});
	
	var s = '';
	for (var i=0; i<thai1000.length; i++) {
		s += ' ' + thai1000[i].t.length + ' ' + thai1000[i].t + '<br/>';
	}
	return s;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function substitute(tokenStack) {
	var a = [];
	var n = 0;
	do {
		var s = genOne(tokenStack);
		a.push(s);
	} while (inc(tokenStack) && (n++ < voyc.maxSentences))
	return a;
}

function inc(tokenStack) {
	var r = true;
	for (var i=0; i<tokenStack.length; i++) {
		var t = tokenStack[i];
		if (t.type == 'array') {
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

function genOne(tokenStack) {
	var s = '';
	
	for (var i=0; i<tokenStack.length; i++) {
		var t = tokenStack[i];
		if (t.type == 'constant') {
			s += t.value;
		}
		else if (t.type == 'array') {
			s += t.value[t.ndx];
		}
		s += voyc.breakWord;
	}
	return s;
}

function tokenize(pattern) {
	var tokens = pattern.split(' ');
	var tokenStack = [];

	// match each token to variables
	for (var i=0; i<tokens.length; i++) {
		var type = 'string';
		var source = 'input';
		var value = tokens[i];
		var variableIndex = matchVariable(tokens[i]);
		if (variableIndex > -1) {
			type = 'array';
			source = 'variable';
			value = voyc.variables[variableIndex].value;
		}
		tokenStack.push({ndx:0, type:type, source:source, value:value});
	}
	
	for (var i=0; i<tokenStack.length; i++) {
		var t = tokenStack[i];
		if (t.type == 'string' && t.value.substring(0,1) == '[') {
			t.type = 'array';
			// strip the brackets and split the string on comma
			var x = t.value.replace(/\[|\]/gm,'');
			t.value = x.split(',');
		}
	}
	
	return tokenStack;
}

function matchVariable(token) {
	// match each token to variables
	variableIndex = -1;
	for (var i=0; i<voyc.variables.length; i++) {
		if (token == voyc.variables[i].name) {
			variableIndex = i;
			break;
		}
	}
	return variableIndex;
}

window.addEventListener('load', function() {
	voyc.sengen = new SenGen();
	voyc.sengen.load();
}, false);
