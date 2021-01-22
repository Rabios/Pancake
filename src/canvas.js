p.can = {};
p.canvases = [];
p.can.compatible_width = w.innerWidth - 20;
p.can.compatible_height = w.innerHeight - 20;

p.can.create = function(w, h, c) {
    v = d.createElement("canvas");
    v.width = w;
    v.height = h;
    b.appendChild(v);
    p.canvases[c] = v;
};

p.can.resize = function(w, h, c) {
    p.canvases[c].width = w;
    p.canvases[c].height = h;
};

p.can.setAttribute = function(v, va, c) {
    w.p.canvases[c][v] = va;
};

p.can.remove = function(c) {
    v = p.canvases[c];
    v.parentNode.removeChild(v);
};

p.can.hide = function(c) {
    p.canvases[c].style.visibility = "hidden";
};

p.can.show = function(c) {
    p.canvases[c].style.visibility = "visible";
};

p.can.set = function(ca, c) {
    p.canvases[c] = ca;
};
