if (p && pancake && p == pancake && n.clipboard) {
	p.cl = {};
	p.cl.str = "";
	
	p.cl.copy = function(s) {
		n.clipboard.writeText(s).then(function(){});
	};
	
	p.cl.get = function() {
		n.clipboard.readText().then(function(s) {
			p.cl.str = s;
			return p.cl.str;
		});
	};
	
	pancake.clipboard = p.cl;
}
