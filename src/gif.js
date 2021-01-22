p.gf = {};
p.gifs = [];

p.gf.load = function(im, t, g) {
    p.gifs[g] = {
        images: [],
        frame: 0,
        duration: t,
        time: 0,
        paused: !1
    };
    for (var i = 0; i < im.length; i++) {
        p.gifs[g].images[i] = new Image();
        p.gifs[g].images[i].src = im[i];
    }
};

p.gf.draw = function(g, x, y, w, h) {
    v = p.gifs[g];
    q = v.images[v.frame];
    if (q) {
        p.g.image(q, x, y, w, h);
        if (!v.paused) {
            v.time++;
            if (v.time == v.duration) {
                v.time = 0;
                v.frame++;
            }
        }
    } else v.frame = 0;
};

p.gf.pause = function(g) {
    p.gifs[g].paused = !0;
};

p.gf.resume = function(g) {
    p.gifs[g].paused = !1;
};
