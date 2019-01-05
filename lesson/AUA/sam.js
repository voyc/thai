/**
	class Sam
	singleton
**/
voyc.Sam = function() {
	this.req = {};
}

voyc.Sam.prototype.setup = function(container) {
	voyc.vocab = new voyc.Vocab();
	voyc.sengen = new voyc.SenGen();
	voyc.chat = new voyc.Chat();
	voyc.chat.setup(container);
	voyc.idhost = voyc.chat.addUser('Sam', true, false);
	voyc.idguest = voyc.chat.addUser('John', false, true);
	voyc.observer = new voyc.Observer();
	var self = this;
	voyc.observer.subscribe( "ChatPost", 'sam', function(note) {
		console.log('on post');
		if (note.payload.userid != voyc.idhost) {
			self.reply(note.payload);
		}
	});

	voyc.chat.post(voyc.idhost, 'สวัสดีคะ');
}

voyc.Sam.prototype.reply = function(o) {
	var w = o.msg.split(/\s+/);
	switch(w[0]) {
		case 'no':
			voyc.chat.post(voyc.idhost, 'OK');
			break;
		case 'set':
			var r = this.setVocab(o.msg);
			voyc.chat.post(voyc.idhost, 'done');
			break;
		case 'get':
			var r = this.getVocab(o.msg);
			var s = voyc.printArray(r,voyc.breakSentence);
			voyc.chat.post(voyc.idhost, s);
			break;
		case 'sample':
			this.req.target = voyc.cloneArray(w);
			this.req.target.splice(0,1);
		case 'yes':
		case 'again':
			var r = voyc.sengen.genRequest(this.req);
			voyc.chat.post(voyc.idhost, r[0], ['again']);
			break;
		default:
			voyc.chat.post(voyc.idhost, 'Would you like an example sentence?', ['yes', 'no']);
			break;
	}
}

/**
	process and reply to a "set" request
**/
voyc.Sam.prototype.setVocab = function(msg) {
	var r = 0;
	var c = msg.split(/\n/);
	for (var i=0; i<c.length; i++) {
		var w = c[i].split(/\s/);
		var word = w[1];
		var value = w[2];
		r += voyc.vocab.set(word,value);
	}
	return r;
}

voyc.Sam.prototype.getVocab = function(msg) {
	/** usage
		get word
		get all status
		get all all
	**/
	var r = [];
	var w = msg.split(/\s/);
	var word = w[1];
	var status = w[2];
	if (word == 'all') {
		status = (status == 'all') ? '' : status;
		var list = voyc.vocab.getlist(status);
		for (var i=0; i<list.length; i++) {
			e = list[i];
			var s = e.w + '\t' + e.s;
			r.push(s);
		}
	}
	else {
		var e = voyc.vocab.get(word);
		if (e) {
			var s = word + '\t' + e.s;
			r.push(s);
		}
	}
	return r;
}
