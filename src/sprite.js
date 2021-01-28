p.sp = {};
p.sprites = [];

p.sp.load = function(s, o, i) {
    q = new Image();
    q.src = s;
    p.sprites[i] = {
        src: q,
        states: o,
    };
};

p.sp.draw = function(i, st, x, y, w, h) {
    v = p.sprites[i].states[st];
    v.start = v.start || 0;
    v.end = v.end || v.info.length;
    v.frame = v.frame || 0;
    v.time = v.time || 0;
    v.paused = v.paused || !1;
    q = v.info[v.frame];
    if (q && (v.frame <= v.end - 1)) {
        p.g.drawImage(p.sprites[i].src, q.x, q.y, q.w, q.h, x, y, w, h);
        if (!v.paused) {
            if (v.time === v.duration) {
                v.time = 0;
                v.frame++;
            }
            v.time++;
        }
    } else v.frame = v.start;
};

p.sp.pause = function(i, st) {
    p.sprites[i].states[st].paused = !0;
};

p.sp.resume = function(i, st) {
    p.sprites[i].states[st].paused = !1;
};
