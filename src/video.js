p.v = {};
p.videos = [];

p.v.load = function(s, v) {
    q = d.createElement("video");
    q.src = s;
    q.autoplay = !0;
    q.loop = !1;
    q.is_paused = !1;
    q.load();
    p.videos[v] = q;
};

p.v.play = function(v, x, y, w, h) {
    q = p.g.context.canvas;
    k = p.videos[v];
    if (!k.is_paused) {
        if (!k.ended) {
            p.g.c.drawImage(k, x || 0, y || 0, w || q.width, h || q.height);
            k.play();
        }
    } else k.pause();
};

p.v.pause = function(v) {
    p.videos[v].pause();
    p.videos[v].is_paused = !0;
};

p.v.setVolume = function(vo, v) {
    p.videos[v].volume = vo;
};

p.v.setMute = function(m, v) {
    p.videos[v].muted = m;
};

p.v.setLoop = function(l, v) {
    p.videos[v].loop = l;
};

p.v.finished = function(v) {
    return p.videos[v].ended;
};

p.v.reset = function(v) {
    p.v.pause(v);
    p.videos[v].currentTime = 0;
};
