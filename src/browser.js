p.b = {};
p.b.s = {};

var _ = d.createElement("audio");
var __ = d.createElement("video");
function _a(s) { return _.canPlayType(s) != ""; }

p.b.s.WEBGL = function() {
    v = d.createElement("canvas");
    return (!!v.getContext && (v.getContext("experimental-webgl") || v.getContext("webgl"))) != u;
};

p.b.s.CANVAS = function() {
    v = d.createElement("canvas");
    return (!!v.getContext && v.getContext("2d")) != u;
};

p.b.s.GAMEPAD = function() {
    return (n.getGamepads || n.webkitGetGamepads || n.webkitGamepads);
};

p.b.s.JAVA = function() {
    return n.javaEnabled();
};

p.b.s.MP3 = function() {
    return _a("audio/mp3");
};

p.b.s.MPEG = function() {
    return _a("audio/mpeg");
};

p.b.s.OGG = function() {
    return _a("audio/ogg");
};

p.b.s.FLAC = function() {
    return _a("audio/flac");
};

p.b.s.AAC = function() {
    return _a("audio/aac");
};

p.b.s.AACP = function() {
    return _a("audio/aacp");
};

p.b.s.CAF = function() {
    return _a("audio/x-caf");
};

p.b.s.WAV = function() {
    return _a("audio/wav");
};

p.b.s.MP4 = function() {
    return __.canPlayType("video/mp4") != "";
};

p.b.s.WEBM = function() {
    return __.canPlayType("video/webm") != "";
};

p.b.supports = function(s) {
    return p.b.s[s]();
};

p.b.is = function(s) {
    return (ua.match(s) != u);
};

p.b.open = function(url) { w.open(url); }

f = p.b.is;
p.b.CHROME = f("Chrome");
p.b.FIREFOX = f("Firefox");
p.b.OPERA = f("OPR");
p.b.OPERA_MINI = f("Opera Mini");
p.b.SAFARI = f("Safari");
p.b.EDGE = f("Edg");
p.b.IE = (d.documentMode != u);
p.b.MAXTHON = f("Maxthon");
p.b.SAMSUNG_INTERNET = f("SamsungBrowser");
p.b.SEAMONKEY = f("SeaMonkey");
