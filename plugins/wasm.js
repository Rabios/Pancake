if (p && pancake && p == pancake && w.WebAssembly) {
	var wa = w.WebAssembly;
	
	p.wa = {};
	p.wa.module = u;
	p.wa.instance = u;
	p.wa.method = u;
	p.wa.cache = u;
	
	p.wa.execute = function(c, m) {
		p.wa.cache = new Uint8Array(c);
		if (wa.validate(p.wa.cache)) {
			p.wa.module = new wa.Module(p.wa.cache);
			p.wa.instance = new wa.Instance(p.wa.module);
			p.wa.method = m || "main";
			return (p.wa.instance.exports[p.wa.method]());
		}
	};
	
	p.wa.run = function(mo, me, im) {
		wa.instantiateStreaming(fetch(mo), im).then(function(o) {
			p.wa.module = mo;
			p.wa.method = me || "main";
			o.instance.exports[p.wa.method]();
		});
	};
	
	p.wa.table = function(i, m, e) {
		return new wa.Table({ initial: i, maximum: m, element: el || "anyfunc" });
	};
	
	p.wa.get = function(t, i) {
		return t.get(i)();
	};
	
	pancake.wasm = p.wa;
}
