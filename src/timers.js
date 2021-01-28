p.t = {};
p.t.t1 = da();
p.t.t2 = 0;
p.t.rdt = 0;

p.t.countdown = function(f, ms) {
    return w.setTimeout(f, ms);
};

p.t.interval = function(f, ms) {
    return w.setInterval(f, ms);
};

p.t.dt = function() {
    p.t.t2 = da();
    p.t.rdt = p.t.t2 - p.t.t1;
    p.t.t1 = p.t.t2;
    return p.t.rdt;
};

p.t.fps = function() {
    return (1000 / p.t.dt());
};

p.t.timer = function(f, fps) {
    return p.t.interval(f, 1000 / fps);
};

p.t.animate = function(f) {
    return w.requestAnimationFrame(f);
};

p.t.pause = function(t) {
    return (w.clearTimeout || w.clearInterval || w.cancelAnimationFrame)(t);
};
