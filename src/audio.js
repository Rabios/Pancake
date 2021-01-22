p.a = {};
p.audio_files = [];

p.a.play = function(s) {
    new Audio(s).play();
};

p.a.load = function(s, a) {
    v = new Audio(s);
    v.loop = !1;
    v.load();
    p.audio_files[a] = v;
};

p.a.playFromIndex = function(a) {
    p.audio_files[a].play();
};

p.a.pause = function(a) {
    p.audio_files[a].pause();
};

p.a.setVolume = function(v, a) {
    p.audio_files[a].volume = v;
};

p.a.setMute = function(m, a) {
    p.audio_files[a].muted = m;
};

p.a.setLoop = function(l, a) {
    p.audio_files[a].loop = l;
};

p.a.finished = function(a) {
    return p.audio_files[a].ended;
};

p.a.reset = function(a) {
    p.audio_files[a].pause();
    p.audio_files[a].currentTime = 0;
};
