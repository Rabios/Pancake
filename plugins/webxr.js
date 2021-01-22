if (p && pancake && p == pancake && n.xr) {
	p.xr = {};
	p.xr.INLINE_MODE = "inline";
	p.xr.IMMERSIVE_VR_MODE = "immersive-vr";
	p.xr.session = u;
	p.xr.update = u;
		
	p.xr.start = function(m, f) {
		if (n.xr && !p.xr.session && !p.xr.update) {
			n.xr.requestSession(m).then(function(xrSession) {
				p.xr.session = xrSession;
				p.xr.update = f;
				p.xr.session.requestAnimationFrame(p.xr.update);
				p.xr.session.onend = p.xr.end;
			});
		}
	};
		
	p.xr.end = function() {
		if (p.xr.session) p.xr.session = u;
	};
		
	p.xr.update = function() {
		if (p.xr.session && p.xr.update) p.xr.session.requestAnimationFrame(p.xr.update);
	};
		
	pancake.xr = p.xr;
}
