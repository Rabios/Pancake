p.con = {};
p.contexts = [];

p.con.create = function(c, co) {
    v = p.g.backend;
    f = p.canvases[c];
    q = { antialias: !0, preserveDrawingBuffer: !0 };
    if (v == "CanvasRenderingContext2D") p.contexts[co] = f.getContext("2d");
    if (v == "WebGLRenderingContext") p.contexts[co] = f.getContext("webgl", q) || f.getContext("experimental-webgl", q);
};

p.con.use = function(c, co) {
    v = p.g.backend;
    q = { antialias: !0, preserveDrawingBuffer: !0 };
    if (v == "CanvasRenderingContext2D") p.contexts[co] = c.getContext("2d");
    if (v == "WebGLRenderingContext") p.contexts[co] = c.getContext("webgl", q) || c.getContext("experimental-webgl", q);
    p.g.useContext(co);
    p.can.set(c, co);
};

p.con.set = function(nc, co) {
    p.contexts[co] = nc;
};
