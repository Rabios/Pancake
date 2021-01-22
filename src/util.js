p.u = {};

p.u.random = function(a) {
    return (m.random() * a) | 0;
};

p.u.randomBetween = function(a, b) {
    return p.u.random(b - a) + a;
};

p.u.quote = function(s) {
    return ("\"" + s + "\"");
};
