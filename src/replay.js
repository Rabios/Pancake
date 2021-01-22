p.re = {};
p.replays = [];

p.re.load = function(i, st, en, dur, rev, l) {
    var st = st || 0;
    var en = en;
    var rev = rev || !1;
    var l = l || !1;
    var dur = dur || 1;
    p.replays[i] = {
        start: st,
        time: 0,
        duration: dur,
        end: en,
        reversed: rev,
        loop: l,
        finished: !1,
        paused: !1,
        frames: []
    };
    p.replays[i].current = rev ? en : st;
};

p.re.save = function(i, obj) {
    var o = {};
    for (var key in p.i) {
        if (typeof(p.i[key]) != "function") o[key] = p.i[key];
    }
    o.global = obj || w || u;
    p.replays[i].frames.push(o);
};

p.re.frames = function(i) {
    return (p.replays[i].frames.length - 1);
};

p.re.play = function(i) {
    v = p.replays[i];
    if (!v.end) v.end = p.replays[i].frames.length - 1;
    if (!v.finished) {
        q = p.replays[i].frames[v.current];
        if (q != u) {
            for (var key in q) p.i[key] = q[key];
            
            if (q.global) {
                for (var key in q.global) w[key] = q.global[key];
            }
            
            if (v.reversed && v.current <= v.start && v.loop) {
                v.finished = !1;
                v.current = v.end;
            }
            
            else if (!v.reversed && v.current >= v.end && v.loop) {
                v.finished = !1;
                v.current = v.start;
            }
            
            if (!v.paused) {
                if (v.time == v.duration) {
                    if (v.reversed) {
                        if (!(v.current-- <= v.start)) v.current--;
                    } else {
                        if (!(v.current++ >= v.end)) v.current++;
                    }
                    v.time = 0;
                } else v.time++;
            }
        } else v.finished = !0;
    }
};

p.re.clear = function(i) {
    p.replays[i] = u;
};

p.re.pause = function(i) {
    p.replays[i].paused = !0;
};

p.re.resume = function(i) {
    p.replays[i].paused = !1;
};
