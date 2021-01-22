if (p && pancake && p == pancake && "getVRDisplays" in n) {
	p.vr = {};
	p.vr.display = u;
	p.vr.data = u;
	p.vr.left_eye = u;
	p.vr.right_eye = u;
	p.vr.frame = u;
	p.vr.update = u;
	
	p.vr.init = function(di) {
		n.getVRDisplays().then(function(vrd) {
			if (vrd.length > 0 && vrd[di || 0]) p.vr.display = vrd[di || 0];
		});
	};
	
	p.vr.start = function(f2, f1) {
		if (p.vr.display && p.g.ca) {
			p.vr.display.requestPresent([{ source: p.g.ca }]).then(function() {
				p.vr.left_eye = p.vr.display.getEyeParameters("left");
				p.vr.right_eye = p.vr.display.getEyeParameters("right");
				p.ca.width = m.max(p.vr.left_eye.renderWidth, p.vr.right_eye.renderWidth) * 2;
				p.ca.height = m.max(p.vr.left_eye.renderHeight, p.vr.right_eye.renderHeight);
				if (f1) w.cancelAnimationFrame(f1);
				p.vr.update = f2;
				p.vr.frame = p.vr.display.requestAnimationFrame({
					p.vr.update();
					p.vr.display.getFrameData(p.vr.data);
					p.vr.display.submitFrame();
				});
			});
		}
	};
	
	p.vr.end = function() {
		if (p.vr.display && p.vr.update) {
			p.vr.display.exitPresent();
			p.vr.cancelAnimationFrame(p.vr.frame);
		}
	};
	
	pancake.vr = p.vr;
}
