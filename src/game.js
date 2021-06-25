p.ga = {};

p.ga.title = function(t) {
    if (w.Windows) w.Windows.UI.ViewManagement.ApplicationView.getForCurrentView().title = t;
    else d.title = t;
};

p.ga.restart = function() {
    l.reload();
};

p.ga.close = function() {
    if (n.app) n.app.exitApp();
    else if (n.device) n.device.exitApp();
    else if (w.tizen) {
        var tza = w.tizen.application;
        if (tza) {
            var tzp = tza.getCurrentApplication();
            try { tzp.exit(); } catch (e) {}
        }
    }
    else w.close();
};
