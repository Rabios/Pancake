p.g = {};
p.g.r = {};
p.images = [];
p.g.FILL = 1;
p.g.STROKE = 2;
p.g.BOTH = 3;
var Mode = { FILL: 1, STROKE: 2, BOTH: 3 };
p.g.tint = "";
p.g.fits = !1;
p.g.scissor = !0;
p.g.mode = p.g.FILL;
p.g.context = u;
p.g.c = u;
p.g.ca = u;
p.g.backend = "CanvasRenderingContext2D";

p.g.r.alpha = function() {
    return m.random();
};

p.g.r.RGB = function() {
    f = p.u.random;
    return ("rgb(" + f(255) + "," + f(255) + "," + f(255) + ")");
};

p.g.r.RGBA = function() {
    f = p.u.random;
    return ("rgba(" + f(255) + "," + f(255) + "," + f(255) + "," + f(255) + ")");
};

p.g.r.HSL = function() {
    f = p.u.random;
    return ("hsl(" + f(361) + "," + f(100) + "%," + f(100) + "%)");
};

p.g.r.HSLA = function() {
    f = p.u.random;
    return ("hsla(" + f(361) + "," + f(100) + "%," + f(100) + "%," + m.random() + ")");
};

p.g.fit = function() {
    v = p.g.ca;
    v.style.position = "absolute";
    v.style.left = v.style.top = 0;
    v.width = p.can.compatible_width + 20;
    v.height = p.can.compatible_height + 20;
    p.g.fits = !0;
};

p.g.fullscreen = function() {
    return (d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen);
};
    
p.g.toggleFullscreen = function() {
    v = p.g.ca;
    if (v.requestFullscreen) v.requestFullscreen();
    if (v.mozRequestFullScreen) v.mozRequestFullScreen();
    if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
    if (v.webkitRequestFullScreen) v.webkitRequestFullScreen();
    if (v.msRequestFullscreen) v.msRequestFullscreen();
};

p.g.exitFullscreen = function() {
    v = p.g.ca;
    if (d.exitFullscreen) d.exitFullscreen();
    if (d.mozCancelFullScreen) d.mozCancelFullScreen();
    if (d.webkitExitFullscreen) d.webkitExitFullscreen();
    if (d.webkitCancelFullScreen) d.webkitCancelFullScreen();
    if (d.msExitFullscreen) d.msExitFullscreen();
    v.width = p.can.compatible_width;
    v.height = p.can.compatible_height;
};

p.g.useContext = function(c) {
    p.g.context = p.contexts[c];
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
};

p.g.setContext = function(c, i) {
    p.g.context = c;
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
    p.con.set(c, i);
};
    
p.g.setAlpha = function(a) {
    p.g.c.globalAlpha = a;
};

p.g.RGB = function(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
};

p.g.RGBA = function(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
};

p.g.HSL = function(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
};

p.g.HSLA = function(h, s, l, a) {
    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
};

p.g.HEX = function(h) {
    return ("#" + h);
};

p.g.color = function(f, s) {
    p.g.c.fillStyle = f;
    p.g.c.strokeStyle = s || "black";
};

p.g.setBackgroundColor = function(c) {
    v = p.g.ca;
    v.style.backgroundColor = c;
    v.style.backgroundSize = (v.width + "px " + v.height + "px");
};

p.g.setBackgroundImage = function(s) {
    v = p.g.ca;
    v.style.backgroundImage = "url(" + s + ")";
    v.style.backgroundSize = (v.width + "px " + v.height + "px");
};

p.g.setBackground = function(c) {
    v = p.g.ca;
    v.style.background = c;
    v.style.backgroundSize = (v.width + "px " + v.height + "px");
};

p.g.setFont = function(f, s) {
    p.g.c.font = (s + "px " + f);
};

p.g.clear = function() {
    v = p.g.ca;
    p.g.clearRect(0, 0, v.width, v.height);
};

p.g.render = function(v, f) {
    if (v == p.g.FILL) f.fill();
    if (v == p.g.STROKE) f.stroke();
    if (v == p.g.BOTH) {
        f.fill();
        f.stroke();
    }
};

p.g.text = function(t, x, y) {
    v = p.g.mode;
    f = p.g.c;
    if (v == p.g.FILL) f.fillText(t, x, y);
    if (v == p.g.STROKE) f.strokeText(t, x, y);
    if (v == p.g.BOTH) {
        f.fillText(t, x, y);
        f.strokeText(t, x, y);
    }
};

p.g.rect = function(x, y, w, h) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.rect(x, y, w, h);
    f.closePath();
    p.g.render(v, f);
};

p.g.roundedRect = function(x, y, w, h, r) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.moveTo(x + r, y);
    f.lineTo(x + w - r, y);
    f.quadraticCurveTo(x + w, y, x + w, y + r);
    f.lineTo(x + w, y + h - r);
    f.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    f.lineTo(x + r, y + h);
    f.quadraticCurveTo(x, y + h, x, y + h - r);
    f.lineTo(x, y + r);
    f.quadraticCurveTo(x, y, x + r, y);
    f.closePath();
    p.g.render(v, f);
};

p.g.circle = function(x, y, r) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.arc(x, y, r, 90, 180 * m.PI);
    f.closePath();
    p.g.render(v, f);
};

p.g.line = function(x1, y1, x2, y2) {
    f = p.g.c;
    f.beginPath();
    f.moveTo(x1, y1);
    f.lineTo(x2, y2);
    f.closePath();
    f.stroke();
};

p.g.triangle = function(x1, y1, x2, y2, x3, y3) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.moveTo(x1, y1);
    f.lineTo(x2, y2);
    f.lineTo(x3, y3);
    f.lineTo(x1, y1);
    f.closePath();
    p.g.render(v, f);
};
    
p.g.polygon = function(x, y, s, si) {
    v = p.g.mode;
    f = p.g.c;
    var o = [];
    o.push(x + s * 1, y + s * 0);
    for (var i = 1; i <= si; i++) {
        q = i * 2 * m.PI / si;
        o.push([ x + s * m.cos(q), y + s * m.sin(q) ]);
    }
    f.beginPath();
    f.moveTo(o[0][0], o[0][1]);
    for (var i = 0; i < o.length; i++) f.lineTo(o[i][0], o[i][1]);
    f.closePath();
    p.g.render(v, f);
};

p.g.loadImage = function(src, i) {
    p.images[i] = new Image();
    p.images[i].src = src;
};

p.g.loadImageFromDocument = function(e, i) {
    p.images[i] = e;
};

p.g.drawImage = function(i, sx, sy, sw, sh, dx, dy, dw, dh) {
    p.g.c.imageSmoothingEnabled = !1;
    var oo = d.createElement("canvas").getContext("2d");
    oo.canvas.width = i.width;
    oo.canvas.height = i.height;
    oo.save();
    if (p.g.tint) {
        oo.fillStyle = p.g.tint;
        oo.globalAlpha = 0.7;
        oo.fillRect(0, 0, oo.canvas.width, oo.canvas.height);
        oo.globalCompositeOperation = "destination-atop";
        oo.globalAlpha = 1;
    }
    oo.drawImage(i, 0, 0, i.width, i.height);
    oo.restore();
    p.g.c.drawImage(oo.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
};

p.g.drawImageFromIndex = function(i, sx, sy, sw, sh, dx, dy, dw, dh) {
    p.g.drawImage(p.images[i], sx, sy, sw, sh, dx, dy, dw, dh);
};

p.g.image = function(i, x, y, w, h) {
    p.g.drawImage(i, 0, 0, i.width, i.height, x, y, w, h);
};

p.g.imageFromIndex = function(i, x, y, w, h) {
    p.g.drawImageFromIndex(i, 0, 0, p.images[i].width, p.images[i].height, x, y, w, h);
};

p.g.useFilters = function(f, v) {
    for (var i = 0; i < f.length; i++) p.g.ca.style.filter += (" " + f[i] + "(" + v[i] + ") ");
};

p.g.addFilter = function(f, v) {
    p.g.content.canvas.style.filter += (" " + f + "(" + v + ") ");
};

p.g.clearFilters = function() {
    p.g.ca.style.filter = "none";
};
    
p.g.clearRect = function(x, y, w, h) {
    p.g.c.clearRect(x, y, w, h);
};

p.g.canvasToImage = function(c) {
    return p.canvases[c || 0].toDataURL();
};

p.g.screenshot = function(c) {
    w.open(p.g.canvasToImage(c));
};

p.g.square = function(x, y, s) {
    p.g.rect(x, y, s, s);
};

p.g.pixel = function(x, y) {
    p.g.square(x, y, 1);
};

p.g.point = function(x, y) {
    p.g.circle(x, y, 1);
};

p.g.grid = function(s) {
    var glw = p.g.ca.width / s, glh = p.g.ca.height / s;
    var x = 0, y = 0;
    f = p.g.c;
    for (var i = 0; i < glh; i++)
    {
        for (var z = 0; z < glw; z++)
        {
            f.strokeRect(x,y,s,s);
            f.strokeRect(x + s,y,s,s);
            x += s;
        }
        x = 0, y += s;
    }
};

p.g.translate = function(x, y) {
    p.g.c.translate(x, y);
};

p.g.rotate = function(a) {
    p.g.c.rotate(a);
};

p.g.scale = function(x, y) {
    p.g.c.scale(x, y);
};

p.g.save = function() {
    p.g.c.save();
};

p.g.restore = function() {
    p.g.c.restore();
};

p.g.beginScissor = function(x, y, w, h) {
    f = p.g.c;
    v = p.g.ca;
    f.restore();
    f.save();
    f.beginPath();
    if (p.g.scissor) f.rect(x, y, w, h);
    else f.rect(0, 0, v.width, v.height);
    f.clip();
};
            
p.g.endScissor = function() {
    f = p.g.c;
    f.closePath();
    f.globalCompositeOperation = "source-over";
};

d.onfullscreenchange = d.onmozfullscreenchange = d.onmsfullscreenchange = d.onwebkitfullscreenchange = function() {
    v = p.g.ca;
    f = p.g.fullscreen();
    if (f && v != u) {
        v.width = w.innerWidth;
        v.height = w.innerHeight;
    }

    if (!f && v != u) {
        if (p.g.fits) {
            v.width = w.innerWidth;
            v.height = w.innerHeight;
        } else {
            v.width = p.can.compatible_width;
            v.height = p.can.compatible_height;
        }
    }
};
