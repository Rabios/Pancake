// Rewritten by Rabia Alhaffar in 9/February/2020
p.con = {};
p.contexts = [];

p.con.create = function(c, co) {
    p.contexts[co] = p.canvases[c].getContext("2d");
};

p.con.use = function(c, co) {
    p.contexts[co] = c.getContext("2d");
    p.g.useContext(co);
    p.can.set(c, co);
};

p.con.set = function(nco, co) {
    p.contexts[co] = nco;
};