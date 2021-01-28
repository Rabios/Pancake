p.sf = {};
p.fonts = [];

p.sf.load = function(s, o, i) {
    q = new Image();
    q.src = s;
    p.fonts[i] = { image: q, chars: o };
};

p.sf.draw = function(sf, txt, x, y, s, sp, c, op) {
    var f = sp;
    var o = p.g.tint != u ? p.g.tint : u;
    for (var i = 0; i < txt.length; i++) {
        if (i === 0) sp = 0; else sp = f;
        var q = p.fonts[sf].chars[txt[i]];
        if (p.g.backend === "WebGLRenderingContext") {
            o[3] = op || o[3] || 1;
            po.c.tint = p.g.tint = c || p.g.tint;
            if (q) p.g.drawImage(p.fonts[sf].image, q.x, q.y, q.w, q.h, x + (i * (s + sp)), y, s, s);
        }
        else if (p.g.backend === "CanvasRenderingContext2D") {
            var oo = d.createElement("canvas").getContext("2d");
            oo.canvas.width = p.fonts[sf].image.width;
            oo.canvas.height = p.fonts[sf].image.height;
            oo.save();
            oo.fillStyle = c;
            oo.globalAlpha = op || 0.8;
            oo.fillRect(0, 0, oo.canvas.width, oo.canvas.height);
            oo.globalCompositeOperation = "destination-atop";
            oo.globalAlpha = 1;
            oo.drawImage(p.fonts[sf].image, 0, 0);
            oo.restore();
            if (q) p.g.drawImage(oo.canvas, q.x, q.y, q.w, q.h, x + (i * (s + sp)), y, s, s);
        }
    }
    if (p.g.backend === "WebGLRenderingContext") po.c.tint = p.g.tint = o;
};
