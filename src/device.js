p.de = {};
p.de.screen_width = s.width;
p.de.screen_height = s.height;
p.de.language = n.language;

p.de.vibrate = function(p) {
    return n.vibrate(p);
};

p.de.stopVibrating = function() {
    return n.vibrate(0);
};

p.de.online = function() {
    try {
        f = p.x.get("https://ipinfo.io/json").status;
        return (f >= 200 && (f < 300 || f === 304));
    } catch (e) {
        return !1;
    }
};

p.de.geoInfo = function() {
    return j.parse(p.x.get("https://ipinfo.io/json").response);
};
