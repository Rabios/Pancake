p.ga = {};

p.ga.title = function(t) {
    d.title = t;
};

p.ga.restart = function() {
    l.reload();
};

p.ga.close = function() {
    if (n.app) n.app.exitApp();
    else if (n.device) n.device.exitApp();
    else w.close();
};
