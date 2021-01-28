p.x = {};

p.x.exec = function(e, url, s, t) {
    q = x();
    q.open(e, url, !1);
    if (t === "string") q.setRequestHeader("Content-Type", t || "application/x-www-form-urlencoded");
    q.send(s || u);
    return q;
};

p.x.get = function(url, s) {
    return p.x.exec("GET", url, s);
};

p.x.post = function(url, s, t) {
    return p.x.exec("POST", url, s, t);
};

p.x.head = function(url, s) {
    return p.x.exec("HEAD", url, s);
};
