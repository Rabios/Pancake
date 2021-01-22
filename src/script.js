p.s = {};

p.s.create = function(s) {
    v = d.createElement("script");
    for (k in s) v[k] = s[k];
    b.appendChild(v);
};

p.s.loadSource = function(s) {
    p.s.create({
        src: s,
        type: "text/javascript",
        defer: !0
    });
};
