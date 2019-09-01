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
			if (i == 0) 
				j--;
			t = s.substring(i,j);
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
				i += us.length;  // bump up to next start position
				break;
			}
		}
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
