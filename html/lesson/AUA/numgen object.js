/** 
	Choose a random element from an array
**/
voyc.randomElement = function(a) {
	return a[Math.floor(Math.random()*a.length)];
}

/**
	Generate a random number within certain constraints
**/
voyc.genNumber = function(start, end, interval) {
	var a = [];
	for (var i=start; i<=end; i+=interval) {
		a.push(i);
	}
	var r = voyc.randomElement(a);
	return r;
}

/**
	Translate and format a number.
	language:, en, th
	format: digit, words
**/
voyc.translateNumber = function(n,la,fmt) {
	word = {
		en: [
			'zero',
			'one',
			'two',
			'three',
			'four',
			'five',
			'six',
			'seven',
			'eight',
			'nine',
		],
		th: [
			'ศูนย์',
			'หนึ่ง',
			'สอง',
			'สาม',
			'สี่',
			'ห้า',
			'หก',
			'เจ็ด',
			'แปด',
			'เก้า',
		]
	};

	digit = {
		en: [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
		],
		th: [
			'๐',	
			'๑',	
			'๒',	
			'๓',	
			'๔',	
			'๕',	
			'๖',	
			'๗',	
			'๘',	
			'๙',	
		]
	};

	magnitude = {
		en:[
			'',		// one
			'',		// ten
			'hundred',
			'thousand', 
			'',		// ten thousand
			'',		// hundred thousand
			'million',
		],
		th:[
			'',
			'สิบ',
			'ร้อย',
			'พัน',
			'หมื่น',
			'แสน',
			'ล้าน',
		]
	};

	var s = '';
	var t = n.toString();
	var wordbreak = ' ';

	if (fmt == 'digit') {
		var j = 0;
		for (var i=0; i<t.length; i++) {
			j = parseInt(t[i],10);
			s += voyc.NumGen.digit[la][j];
		}
	}
	else if (la == 'th') {
		var j = 0;
		var p = 0;
		for (var i=0; i<t.length; i++) {   // i = left to right index
			if (s.length) s += wordbreak;
			j = parseInt(t[i],10);   // digit in current position
			p = t.length - i - 1;    // mag = decimal position left of .

			var dig = digit[la][j];
			var mag = magnitude[la][t.length - i - 1];

			// exception: trailing zeros
			if (j == 0 && n > 0) {
				break;
			}

			// exception: one, หนึ่ง to เอ็ด
			if (p == 0 && j == 1) {
				dig = 'เอ็ด';
			}

			// exception: teens
			if (p == 1 && j == 1) {
				dig = '';
			}

			// exception: twenties, สอง to ยี่
			if (p == 1 && j == 2) {
				dig = 'ยี่';
			}

			s += dig;
			s += wordbreak;
			s += mag;
		}
	}
	return s;
}









/**
	NumGen Number Generator
	Generate a random number, within constraints.
**/
voyc.NumGen = function() {
	
}

voyc.NumGen.prototype.genNumber = function(start, end, interval) {
	var a = [];
	for (var i=start; i<=end; i+=interval) {
		a.push(i);
	}
	var r = voyc.randomElement(a);
	return r;
}

voyc.NumGen.prototype.translateNumber = function(n,la) {
	if (la == 'en') {
		var t = n.toString();
		var s = '';
		var j = 0;
		for (var i=0; i<t.length; i++) {
			if (s.length) s += ' ';
			j = parseInt(t[i],10);
			s += voyc.NumGen.digit['en'][j];
		}
		return s;
	}
	if (la == 'thdigit') {
		var t = n.toString();
		var s = '';
		var j = 0;
		for (var i=0; i<t.length; i++) {
			if (s.length) s += '';
			j = parseInt(t[i],10);
			s += voyc.NumGen.digit['thdigit'][j];
		}
		return s;
	}
	else if (la == 'th') {
		var wordbreak = ' ';
		var t = n.toString();
		var s = '';
		var j = 0;
		var p = 0;
		for (var i=0; i<t.length; i++) {   // i = left to right index
			if (s.length) s += wordbreak;
			j = parseInt(t[i],10);   // digit in current position
			p = t.length - i - 1;    // mag = decimal position left of .

			var digit = voyc.NumGen.digit['th'][j];
			var mag = voyc.NumGen.magnitude['th'][t.length - i - 1];

			// exception: trailing zeros
			if (j == 0 && n > 0) {
				break;
			}

			// exception: one, หนึ่ง to เอ็ด
			if (p == 0 && j == 1) {
				digit = 'เอ็ด';
			}

			// exception: teens
			if (p == 1 && j == 1) {
				digit = '';
			}

			// exception: twenties, สอง to ยี่
			if (p == 1 && j == 2) {
				digit = 'ยี่';
			}

			s += digit;
			s += wordbreak;
			s += mag;
		}
		return s;
	}
}

voyc.NumGen.digit = {};
voyc.NumGen.digit['en'] = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
];

voyc.NumGen.digit['th'] = [
	'ศูนย์',	// 'soon',
	'หนึ่ง',	// 'nung',     // et
	'สอง',	// 'song',     // yii
	'สาม',	// 'saam',
	'สี่',		// 'si',
	'ห้า',		// 'haa',
	'หก',		// 'hok',
	'เจ็ด',	// 'jet',
	'แปด',	// 'bad',
	'เก้า',	// 'kao',
];

voyc.NumGen.digit['thdigit'] = [
	'๐',	
	'๑',	
	'๒',	
	'๓',	
	'๔',	
	'๕',	
	'๖',	
	'๗',	
	'๘',	
	'๙',	
];

// exceptions
// eleven สิบ เอ็ด

voyc.NumGen.magnitude = {
	th:[
		'',		//'', // one
		'สิบ',		//'sip', // ten
		'ร้อย',	//'roi´', // hundred
		'พัน',	//'pan',  // thousand, 
		'หมื่น',	//'mʉʉn`', // ten thousand
		'แสน',	//'saenˇ', // hundred thousand
		'ล้าน',	//'laan´', // million
	]
};
