
chooseone3 = function(a) {
	var r = Math.random();
	r = a.length * r;
	r = Math.floor(r);
	r = a[r];
	return r;
}

gen = function() {
	var s = '';
	for (var i=0; i<which.length; i++) {
		for (var j=0; j<unittime.length; j++) {
			s += "{q:'" + which[i].q + " " + unittime[j].q + "', a:'" + which[i].a + " " + unittime[j].a + "'},<br/>";
		}
	}
	document.getElementById('testout').innerHTML = s;
}

var which = [
	{q:'nii', a:'this'},
	{q:'naa', a:'next'},
	{q:'tii-laeo', a:'last'},
	{q:'tuk', a:'every'},
];

var unittime = [
	{q:'wan',  a:'day'},
	{q:'atit', a:'week'},
	{q:'duan', a:'month'},
	{q:'bpee', a:'year'},
	{q:'chua-moong', a:'hour'},
	{q:'naa-tii', a:'minute'},
	{q:'winaa-tii', a:'second'},
];

