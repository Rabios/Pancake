p.con = {};
p.contexts = [];

p.con.create = function(c, co) {
    p.contexts[co] = p.canvases[c].getContext("webgl", { antialias: p.g.antialias, preserveDrawingBuffer: true }) || p.canvases[c].getContext("experimental-webgl", { antialias: p.g.antialias, preserveDrawingBuffer: true });
};

p.con.use = function(c, co) {
    p.contexts[co] = c.getContext("webgl", { antialias: p.g.antialias, preserveDrawingBuffer: true }) || c.getContext("experimental-webgl", { antialias: p.g.antialias, preserveDrawingBuffer: true });
    p.g.useContext(co);
    p.can.set(c, co);
};

p.con.set = function(nco, co) {
    p.contexts[co] = nco;
};
