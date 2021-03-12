// Pancake HTML5 game framework
// https://github.com/Rabios/Pancake
// Copyright (c) 2020 - 2021 Rabia Alhaffar, Licensed under MIT License.
var p = {};
p.version = "v0.0.15";

var w = window;
var c = w.console;
var d = w.document;
var n = w.navigator;
var j = w.JSON;
var l = w.location;
var b = d.body;
var s = w.screen;
var st = w.localStorage;
var m = w.Math;
var ua = n.userAgent;
var u = null;
var t = u;
var z = u;
var v = u;
var q = u;
var f = u;
var k = u;
function ex(o) { return o.clientX || o.pageX; };
function ey(o) { return o.clientY || o.pageY; };
function x() { return new (w.ActiveXObject || w.XMLHttpRequest)("Microsoft.XMLHTTP"); }
function da() { return Date.now(); }

p.a = {};
p.audio_files = [];

p.a.play = function(s) {
    new Audio(s).play();
};

p.a.load = function(s, a) {
    v = new Audio(s);
    v.loop = !1;
    v.load();
    p.audio_files[a] = v;
};

p.a.playFromIndex = function(a) {
    p.audio_files[a].play();
};

p.a.pause = function(a) {
    p.audio_files[a].pause();
};

p.a.setVolume = function(v, a) {
    p.audio_files[a].volume = v;
};

p.a.setMute = function(m, a) {
    p.audio_files[a].muted = m;
};

p.a.setLoop = function(l, a) {
    p.audio_files[a].loop = l;
};

p.a.finished = function(a) {
    return p.audio_files[a].ended;
};

p.a.reset = function(a) {
    p.audio_files[a].pause();
    p.audio_files[a].currentTime = 0;
};

p.b = {};
p.b.s = {};

var _audio = d.createElement("audio");
var _video = d.createElement("video");
function _a(s) { return _audio.canPlayType(s) != ""; }

p.b.s.WEBGL = function() {
    v = d.createElement("canvas");
    return (!!v.getContext && (v.getContext("experimental-webgl") || v.getContext("webgl"))) != u;
};

p.b.s.CANVAS = function() {
    v = d.createElement("canvas");
    return (!!v.getContext && v.getContext("2d")) != u;
};

p.b.s.GAMEPAD = function() {
    if (w.Windows) return (w.Windows.Gaming.Input.Gamepad);
    else return (n.getGamepads || n.webkitGetGamepads || n.webkitGamepads);
};

p.b.s.JAVA = function() {
    return n.javaEnabled();
};

p.b.s.MP3 = function() {
    return _a("audio/mp3");
};

p.b.s.MPEG = function() {
    return _a("audio/mpeg");
};

p.b.s.OGG = function() {
    return _a("audio/ogg");
};

p.b.s.FLAC = function() {
    return _a("audio/flac");
};

p.b.s.AAC = function() {
    return _a("audio/aac");
};

p.b.s.AACP = function() {
    return _a("audio/aacp");
};

p.b.s.CAF = function() {
    return _a("audio/x-caf");
};

p.b.s.WAV = function() {
    return _a("audio/wav");
};

p.b.s.MP4 = function() {
    return _video.canPlayType("video/mp4") != "";
};

p.b.s.WEBM = function() {
    return _video.canPlayType("video/webm") != "";
};

p.b.supports = function(s) {
    return p.b.s[s]();
};

p.b.is = function(s) {
    return (ua.match(s) != u);
};

p.b.open = function(url) {
    w.open(url);
};

f = p.b.is;
p.b.CHROME = f("Chrome");
p.b.FIREFOX = f("Firefox");
p.b.OPERA = f("OPR");
p.b.OPERA_MINI = f("Opera Mini");
p.b.SAFARI = f("Safari");
p.b.EDGE = f("Edg");
p.b.IE = (d.documentMode != u);
p.b.MAXTHON = f("Maxthon");
p.b.SAMSUNG_INTERNET = f("SamsungBrowser");
p.b.SEAMONKEY = f("SeaMonkey");

p.can = {};
p.canvases = [];
p.can.compatible_width = (!w.Windows) ? w.innerWidth - 20 : w.innerWidth;
p.can.compatible_height = (!w.Windows) ? w.innerHeight - 20 : w.innerHeight;

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

p.c = {};

p.c.load = function(c) {
    return j.parse(c);
};

p.con = {};
p.contexts = [];

p.con.create = function(c, co) {
    v = p.g.backend;
    f = p.canvases[c];
    q = { antialias: !0, preserveDrawingBuffer: !0 };
    if (v === "CanvasRenderingContext2D") p.contexts[co] = f.getContext("2d");
    if (v === "WebGLRenderingContext") p.contexts[co] = f.getContext("webgl", q) || f.getContext("experimental-webgl", q);
};

p.con.use = function(c, co) {
    v = p.g.backend;
    q = { antialias: !0, preserveDrawingBuffer: !0 };
    if (v === "CanvasRenderingContext2D") p.contexts[co] = c.getContext("2d");
    if (v === "WebGLRenderingContext") p.contexts[co] = c.getContext("webgl", q) || c.getContext("experimental-webgl", q);
    p.g.useContext(co);
    p.can.set(c, co);
};

p.con.set = function(nc, co) {
    p.contexts[co] = nc;
};

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
    else w.close();
};

p.i = {};
p.i.latest_key_down = -1;
p.i.latest_key_up = -1;
p.i.latest_mouse_button_down = -1;
p.i.latest_mouse_button_up = -1;
p.i.click = !1;
p.i.touchdown = !1;
p.i.tap = !1;
p.i.mouse_x = 0;
p.i.mouse_y = 0;
p.i.touch_x = 0;
p.i.touch_y = 0;
p.i.wheel_x = 0;
p.i.wheel_y = 0;
p.i.wheel_z = 0;
p.i.accel_x = 0;
p.i.accel_y = 0;
p.i.accel_z = 0;
p.i.wheel_up = !1;
p.i.wheel_down = !1;
p.i.wheel_left = !1;
p.i.wheel_right = !1;
p.i.swipe_start_time = 0;
p.i.swipe_start_x = 0;
p.i.swipe_start_y = 0;
p.i.swipe_finish_x = 0;
p.i.swipe_finish_y = 0;
p.i.swipe_finish_time = 0;
p.i.swipe_finish_time_limit = 1000;
p.i.swipe_finish_x_limit = { from: 100, to: 300 };
p.i.swipe_finish_y_limit = { from: 300, to: 300 };
p.i.gamepad_threshold = 0.1;
p.i.accelerometer_frequency = 60;
p.i.swipe_direction = "";
p.i.accelerometer = u;
p.i.touches = [];

if (w.Accelerometer) {
    p.i.accelerometer = new Accelerometer({ frequency: p.i.accelerometer_frequency });
    p.i.accelerometer.onreading = function(acl) {
        p.i.accel_x = acl.x;
        p.i.accel_y = acl.y;
        p.i.accel_z = acl.z;
    };
    p.i.accelerometer.start();
}

w.onmousedown = w.onmspointerdown = w.onpointerdown = function(e) {
    p.i.swipe_start_x = ex(e);
    p.i.swipe_start_y = ey(e);
    p.i.swipe_start_time = da();
    p.i.latest_mouse_button_down = e.button;
    p.i.click = !1;
};

w.onmouseup = w.onmspointerup = w.onpointerup = function(e) {
    p.i.mouse_x = ex(e);
    p.i.mouse_y = ey(e);
    p.i.swipe_finish_x = p.i.mouse_x - p.i.swipe_start_x;
    p.i.swipe_finish_y = p.i.mouse_y - p.i.swipe_start_y;
    p.i.swipe_finish_time = da() - p.i.swipe_start_time;
    if (p.i.swipe_finish_time <= p.i.swipe_finish_time_limit) {
        f = m.abs;
        if (f(p.i.swipe_finish_x) >= p.i.swipe_finish_x_limit.from && f(p.i.swipe_finish_y) <= p.i.swipe_finish_y_limit.to) {
            if (p.i.swipe_finish_x < 0) p.i.swipe_direction = "LEFT";
            else p.i.swipe_direction = "RIGHT";
        }
        else if (f(p.i.swipe_finish_y) >= p.i.swipe_finish_y_limit.from && f(p.i.swipe_finish_x) <= p.i.swipe_finish_x_limit.to) {
            if (p.i.swipe_finish_y < 0) p.i.swipe_direction = "UP";
            else p.i.swipe_direction = "DOWN";
        }
    }
    p.i.latest_mouse_button_up = e.button;
    p.i.click = !1;
};

w.onmousemove = w.onmspointermove = w.onpointermove = function(e) {
    p.i.mouse_x = ex(e);
    p.i.mouse_y = ey(e);
};

w.ontouchstart = function(e) {
    q = e.changedTouches;
    for (var i = 0; i < q.length; i++) {
        p.i.touches[i] = {
            x: ex(q[i]),
            y: ey(q[i]),
            swipe_start_x: q[i].pageX,
            swipe_start_y: q[i].pageY,
            swipe_start_time: da(),
            swipe_direction: "",
            tap: !0,
            touchdown: !1,
        };
    }
    v = p.i.touches[0];
    p.i.touch_x = v.x;
    p.i.touch_y = v.y;
    p.i.tap = !0;
    e.preventDefault();
};

w.ontouchmove = function(e) {
    q = e.changedTouches;
    for (var i = 0; i < q.length; i++) {
        t = p.i.touches[i];
        t.x = ex(q[i]);
        t.y = ey(q[i]);
        t.touchdown = !0;
    }
    v = p.i.touches[0];
    p.i.touch_x = v.x
    p.i.touch_y = v.Y;
    p.i.touchdown = !0;
    e.preventDefault();
};

w.ontouchend = function(e) {
    q = e.changedTouches;
    for (var i = 0; i < q.length; i++) {
        t = p.i.touches[i];
        t.x = ex(q[i]);
        t.y = ey(q[i]);
        t.swipe_finish_x = q[i].pageX - t.swipe_start_x;
        t.swipe_finish_y = q[i].pageY - t.swipe_start_y;
        t.swipe_finish_time = da() - t.swipe_start_time;
        t.tap = !0;
        t.touchdown = !1;
        if (t.swipe_finish_time <= p.i.swipe_finish_time_limit) {
            f = m.abs;
            if (f(t.swipe_finish_x) >= p.i.swipe_finish_x_limit.from && f(t.swipe_finish_y) <= p.i.swipe_finish_y_limit.to) {
                if (t.swipe_finish_x < 0) t.swipe_direction = "LEFT";
                else t.swipe_direction = "RIGHT";
            }
            else if (f(t.swipe_finish_y) >= p.i.swipe_finish_y_limit.from && f(t.swipe_finish_x) <= p.i.swipe_finish_x_limit.to) {
                if (t.swipe_finish_y < 0) t.swipe_direction = "UP";
                else t.swipe_direction = "DOWN";
            }
        }
    }
    v = p.i.touches[0];
    p.i.touch_x = v.x;
    p.i.touch_y = v.y;
    p.i.tap = !0;
    p.i.touchdown = !1;
    e.preventDefault();
};

w.ontouchcancel = function(e) {
    for (var i = 0; i < q.length; i++) {
        t = p.i.touches[i];
        t.tap = !1;
        t.touchdown = !1;
    }
    p.i.tap = !1;
    p.i.touchdown = !1;
    e.preventDefault();
};

w.onclick = function() {
    p.i.click = !0;
};

w.onkeydown = function(e) {
    p.i.latest_key_down = e.which || e.keyCode;
};

w.onkeyup = function(e) {
    p.i.latest_key_up = e.which || e.keyCode;
};

w.onwheel = function(e) {
    p.i.wheel_x = e.deltaX;
    p.i.wheel_y = e.deltaY;
    p.i.wheel_z = e.deltaZ;
    
    if (p.i.wheel_x > 0) {
        p.i.wheel_left = !1;
        p.i.wheel_right = !0;
    } else if (p.i.wheel_x < 0) {
        p.i.wheel_left = !0;
        p.i.wheel_right = !1;
    } else if (p.i.wheel_x === 0) p.i.wheel_left = p.i.wheel_right = !1;
    
    if (p.i.wheel_y > 0) {
        p.i.wheel_up = !1;
        p.i.wheel_down = !0;
    } else if (p.i.wheel_y < 0) {
        p.i.wheel_up = !0;
        p.i.wheel_down = !1;
    } else if (p.i.wheel_y === 0) p.i.wheel_up = p.i.wheel_down = !1;
};

p.i.mousedown = function(b) {
    return p.i.latest_mouse_button_down === b;
};

p.i.mouseup = function(b) {
    return p.i.latest_mouse_button_up === b;
};

p.i.swipe = function(d, f) {
    q = p.i.touches[f || 0];
    if (q) return (q.swipe_direction === d);
    else return (p.i.swipe_direction === d);
};

p.i.keydown = function(k) {
    return p.i.latest_key_down === k;
};

p.i.keyup = function(k) {
    return p.i.latest_key_up === k;
};

p.i.cursorState = function(s, i) {
    b.style.height = "100%";
    v = d.getElementsByTagName("html")[0];
    v.style.height = "100%";
    p.canvases[i || 0].style.cursor = s;
    if (p.g.backend === "WebGLRenderingContext" && p.g.ctx2d_enabled) p.g.ctx2d.canvas.style.cursor = s;
    b.style.height = "auto";
    v.style.height = "auto";
};

p.i.hideCursor = function(i) {
    p.i.cursorState("none", i);
};

p.i.showCursor = function(i) {
    p.i.cursorState("auto", i);
};

p.i.setCursor = function(css, i) {
    p.i.cursorState(css, i);
};

p.i.lockPointer = function() {
    f = p.g.ca.requestPointerLock;
    if (f) f();
    if (d.pointerLockElement === p.g.ca && f) f();
};

p.i.unlockPointer = function() {
    d.exitPointerLock();
};

if (p.b.s.GAMEPAD()) {
    if (!w.Windows) n.getGamepads = n.getGamepads || n.webkitGetGamepads || n.webkitGamepads;
    p.i.gamepad_move_horizontal_direction = "";
    p.i.gamepad_move_vertical_direction = "";
    p.i.gamepad_camera_horizontal_direction = "";
    p.i.gamepad_camera_vertical_direction = "";
    p.i.GAMEPAD_ANALOG_UP = -p.i.gamepad_threshold;
    p.i.GAMEPAD_ANALOG_DOWN = p.i.gamepad_threshold;
    p.i.GAMEPAD_ANALOG_LEFT = p.i.gamepad_threshold;
    p.i.GAMEPAD_ANALOG_RIGHT = -p.i.gamepad_threshold;
    p.i.GAMEPAD_MOVE_ANALOG = 1;
    p.i.GAMEPAD_CAMERA_ANALOG = 2;

    if (w.Windows) {
        p.i.GAMEPAD_ANALOG_UP = -p.i.GAMEPAD_ANALOG_UP;
        p.i.GAMEPAD_ANALOG_DOWN = -p.i.GAMEPAD_ANALOG_DOWN;
    }

    p.i.gamepadConnected = function(i) {
        if (w.Windows) return (w.Windows.Gaming.Input.Gamepad.gamepads[i]);
        else return (n.getGamepads()[i]);
    };

    p.i.gamepadID = function(i) {
        if (!w.Windows) {
            v = n.getGamepads()[i];
            if (v) return v.id;
        } else return "XInput STANDARD GAMEPAD";
    };

    p.i.gamepadButtonPressed = function(i, b) {
        if (!w.Windows) {
            v = n.getGamepads()[i];
            if (v) return v.buttons[b].pressed;
        } else {
            if (w.Windows.Gaming.Input.Gamepad.gamepads[i]) {
                v = w.Windows.Gaming.Input.Gamepad.gamepads[i].getCurrentReading();
                if (b === "leftTrigger" || b === "rightTrigger") return (v[b] >= p.i.gamepad_threshold);
                else return ((v.buttons & w.Windows.Gaming.Input.GamepadButtons[b]) != 0);
            }
        }
    };

    p.i.gamepadButtonTouched = function(i, b) {
        if (!w.Windows) {
            v = n.getGamepads()[i];
            if (v) return v.buttons[b].touched;
        } else {
            if (w.Windows.Gaming.Input.Gamepad.gamepads[i]) {
                v = w.Windows.Gaming.Input.Gamepad.gamepads[i].getCurrentReading();
                if (b === "leftTrigger" || b === "rightTrigger") return (v[b] >= p.i.gamepad_threshold);
                else return ((v.buttons & w.Windows.Gaming.Input.GamepadButtons[b]) != 0);
            }
        }
    };

    p.i.gamepadMovement = function(i, a, d) {
        if (!w.Windows) {
            v = n.getGamepads()[i];
            if (v) {
                if (a === p.i.GAMEPAD_MOVE_ANALOG) {
                    if (v.axes[1] <= d) p.i.gamepad_move_vertical_direction = "UP";
                    if (v.axes[1] >= d) p.i.gamepad_move_vertical_direction = "DOWN";
                    if (v.axes[0] <= d) p.i.gamepad_move_horizontal_direction = "LEFT";
                    if (v.axes[0] >= d) p.i.gamepad_move_horizontal_direction = "RIGHT";
                }

                if (a === p.i.GAMEPAD_CAMERA_ANALOG) {
                    if (v.axes[3] <= d) p.i.gamepad_camera_vertical_direction = "UP";
                    if (v.axes[3] >= d) p.i.gamepad_camera_vertical_direction = "DOWN";
                    if (v.axes[2] <= d) p.i.gamepad_camera_horizontal_direction = "LEFT";
                    if (v.axes[2] >= d) p.i.gamepad_camera_horizontal_direction = "RIGHT";
                }
            }
        } else {
            v = w.Windows.Gaming.Input.Gamepad.gamepads[i];
            if (v) {
                f = w.Windows.Gaming.Input.Gamepad.gamepads[i].getCurrentReading();
                if (a === p.i.GAMEPAD_MOVE_ANALOG) {
                    if (f.leftThumbstickY >= d) p.i.gamepad_move_vertical_direction = "UP";
                    if (f.leftThumbstickY <= d) p.i.gamepad_move_vertical_direction = "DOWN";
                    if (f.leftThumbstickX <= d) p.i.gamepad_move_horizontal_direction = "LEFT";
                    if (f.leftThumbstickX >= d) p.i.gamepad_move_horizontal_direction = "RIGHT";
                }

                if (a === p.i.GAMEPAD_CAMERA_ANALOG) {
                    if (f.rightThumbstickY >= d) p.i.gamepad_camera_vertical_direction = "UP";
                    if (f.rightThumbstickY <= d) p.i.gamepad_camera_vertical_direction = "DOWN";
                    if (f.rightThumbstickX <= d) p.i.gamepad_camera_horizontal_direction = "LEFT";
                    if (f.rightThumbstickX >= d) p.i.gamepad_camera_horizontal_direction = "RIGHT";
                }
            }
        }
    };

    p.i.gamepadAnalogMoved = function(i, a, d) {
        if (d === "UP") q = p.i.GAMEPAD_ANALOG_UP;
        if (d === "DOWN") q = p.i.GAMEPAD_ANALOG_DOWN;
        if (d === "LEFT") q = p.i.GAMEPAD_ANALOG_LEFT;
        if (d === "RIGHT") q = p.i.GAMEPAD_ANALOG_RIGHT;
        p.i.gamepadMovement(i, a, q);
        if (a === p.i.GAMEPAD_MOVE_ANALOG) return (p.i.gamepad_move_horizontal_direction === d || p.i.gamepad_move_vertical_direction === d);
        if (a === p.i.GAMEPAD_CAMERA_ANALOG) return (p.i.gamepad_camera_horizontal_direction === d || p.i.gamepad_camera_vertical_direction === d);
    };
} else {
    p.i.gamepadConnected = function(i) { return !1; };
    p.i.gamepadID = function(i) { return u; };
    p.i.gamepadButtonPressed = function(i, b) { return !1; };
    p.i.gamepadButtonTouched = function(i, b) { return !1; };
    p.i.gamepadMovement = function(i, a, d) { return u; };
    p.i.gamepadAnalogMoved = function(i, a, d) { return !1; };
}

p.i.preventLoop = function () {
    p.i.latest_key_down = -1;
    p.i.latest_key_up = -1;
    p.i.latest_mouse_button_down = -1;
    p.i.latest_mouse_button_up = -1;
    p.i.click = !1;
    p.i.tap = !1;
    p.i.touchdown = !1;
    p.i.wheel_up = !1;
    p.i.wheel_down = !1;
    p.i.wheel_left = !1;
    p.i.wheel_right = !1;
    p.i.swipe_direction = "";
    if (p.i.touches.length > 0) {
        for (var i = 0; i < p.i.touches.length; i++) p.i.touches[i].swipe_direction = "";
    }
    p.i.gamepad_move_horizontal_direction = "";
    p.i.gamepad_move_vertical_direction = "";
    p.i.gamepad_camera_horizontal_direction = "";
    p.i.gamepad_camera_vertical_direction = "";
};

p.i.key = {
    A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77,
    N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
    ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56,
    NINE: 57, UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, SPACE: 32, TAB: 9, SHIFT: 16, CONTROL: 17,
    ALT: 18, BACKSPACE: 8, ENTER: 13, NUMLOCK: 144, OS: 91, UNIDENTIFIED: 0, HOME: 36, PGUP: 33,
    PGDN: 34, CLEAR: 12, DELETE: 46, ESCAPE: 27, INSERT: 45
};

p.i.tvkey = {
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, CHANNEL_UP: 516, CHANNEL_DOWN: 517, CONTEXT: 623, RED: 588,
    GREEN: 589, YELLOW: 590, BLUE: 591, ENTER: 13, INFO: 615, ASPECT: 642, LASTVIEW: 651, ZERO: 48, ONE: 49, TWO: 50,
    THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57, BACK: 8, RETURN: 8, PLAY: 250, PAUSE: 19,
    STOP: 178, RECORD: 603, FORWARD: 228, REWIND: 227, FAST_FORWARD: 176, REPLAY: 177
};

p.i.button = {
    LEFT_MOUSE_BUTTON: 0, RIGHT_MOUSE_BUTTON: 2, MIDDLE_MOUSE_BUTTON: 1, A: 0, B: 1, XBOX_X: 2,
    Y: 3, LB: 4, RB: 5, LT: 6, RT: 7, SELECT: 8, BACK: 8, VIEW: 8, START: 9, MENU: 9, LEFT_ANALOG_STICK: 10, RIGHT_ANALOG_STICK: 11,
    UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15, PLAYSTATION_X: 0, O: 1, SQUARE: 2, TRIANGLE: 3, L1: 4, R1: 5, L2: 6, R2: 7
};

if (w.Windows) {
    p.i.button.A = "a";
    p.i.button.B = "b";
    p.i.button.XBOX_X = "x";
    p.i.button.Y = "y";
    p.i.button.UP = "dpadUp";
    p.i.button.DOWN = "dpadDown";
    p.i.button.LEFT = "dpadLeft";
    p.i.button.RIGHT = "dpadRight";
    p.i.button.LB = "leftShoulder";
    p.i.button.RB = "rightShoulder";
    p.i.button.LT = "leftTrigger";
    p.i.button.RT = "rightTrigger";
    p.i.button.BACK = p.i.button.SELECT = p.i.button.VIEW = "view";
    p.i.button.START = p.i.button.MENU = "menu";
    p.i.button.LEFT_ANALOG_STICK = "leftThumbstick";
    p.i.button.RIGHT_ANALOG_STICK = "rightThumbstick";
}

p.o = {};
p.o.iOS = f(/iPhone|iPad|iPod|Apple-iPhone/i);
p.o.ANDROID = f(/Android/i);
p.o.OSX = f(/Macintosh|Intel Mac OS X/i);
p.o.WINDOWS = f(/Windows|Windows NT/i);
p.o.WINDOWS_PHONE = f(/Windows Phone/i);
p.o.LINUX = f(/Linux|X11/i);
p.o.UBUNTU = f(/Ubuntu/i);
p.o.PLAYSTATION = f(/PlayStation/i);
p.o.PS4 = f(/PlayStation 4/i);
p.o.PSVITA = f(/PlayStation Vita/i);
p.o.XBOX = f(/Xbox|XBOX_ONE_ED/i);
p.o.XBOX_ONE = f(/Xbox One/i);
p.o.XBOX_ONE_S = f(/XBOX_ONE_ED/i);
p.o.BLACKBERRY = f(/Blackberry|BB/i);
p.o.CHROMECAST = f(/CrKey/i);
p.o.CHROME_OS = f(/CrOS/i);
p.o.NINTENDO = f(/Nintendo/i);
p.o.N3DS = f(/Nintendo 3DS/i);
p.o.WII_U = f(/Nintendo WiiU/i);
p.o.FIRE_TV = f(/AFTS/i);
p.o.ROKU = f(/Roku/i);
p.o.ROKU_ULTRA = f(/Roku4640X/i);
p.o.NEXUS_PLAYER = f(/Nexus Player/i);
p.o.MINIX_NEO_X5 = f(/NEO-X5/i);
p.o.APPLE_TV = f(/AppleTV/i);
p.o.KINDLE = f(/Kindle/i);
p.o.is = p.b.is;

p.re = {};
p.replays = [];

p.re.load = function(i, st, en, dur, rev, l) {
    var st = st || 0;
    var en = en;
    var rev = rev || !1;
    var l = l || !1;
    var dur = dur || 1;
    p.replays[i] = {
        start: st,
        time: 0,
        duration: dur,
        end: en,
        reversed: rev,
        loop: l,
        finished: !1,
        paused: !1,
        frames: []
    };
    p.replays[i].current = rev ? en : st;
};

p.re.save = function(i, obj) {
    var o = {};
    for (var key in p.i) {
        if (typeof(p.i[key]) != "function") o[key] = p.i[key];
    }
    o.global = obj || w || u;
    p.replays[i].frames.push(o);
};

p.re.frames = function(i) {
    return (p.replays[i].frames.length - 1);
};

p.re.play = function(i) {
    v = p.replays[i];
    if (!v.end) v.end = p.replays[i].frames.length - 1;
    if (!v.finished) {
        q = p.replays[i].frames[v.current];
        if (q != u) {
            for (var key in q) p.i[key] = q[key];
            
            if (q.global) {
                for (var key in q.global) w[key] = q.global[key];
            }
            
            if (v.reversed && v.current <= v.start && v.loop) {
                v.finished = !1;
                v.current = v.end;
            }
            
            else if (!v.reversed && v.current >= v.end && v.loop) {
                v.finished = !1;
                v.current = v.start;
            }
            
            if (!v.paused) {
                if (v.time === v.duration) {
                    if (v.reversed) {
                        if (!(v.current-- <= v.start)) v.current--;
                    } else {
                        if (!(v.current++ >= v.end)) v.current++;
                    }
                    v.time = 0;
                } else v.time++;
            }
        } else v.finished = !0;
    }
};

p.re.clear = function(i) {
    p.replays[i] = u;
};

p.re.pause = function(i) {
    p.replays[i].paused = !0;
};

p.re.resume = function(i) {
    p.replays[i].paused = !1;
};

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

p.g = {};
p.g.r = {};
p.images = [];
p.g.FILL = 1;
p.g.STROKE = 2;
p.g.BOTH = 3;
p.g.tint = "";
p.g.fits = !1;
p.g.scissor = !0;
p.g.mode = p.g.FILL;
p.g.context = u;
p.g.c = u;
p.g.ca = u;
p.g.backend = "CanvasRenderingContext2D";

p.g.r.alpha = function() {
    return m.random();
};

p.g.r.RGB = function() {
    f = p.u.random;
    return ("rgb(" + f(255) + "," + f(255) + "," + f(255) + ")");
};

p.g.r.RGBA = function() {
    f = p.u.random;
    return ("rgba(" + f(255) + "," + f(255) + "," + f(255) + "," + m.random() + ")");
};

p.g.r.HSL = function() {
    f = p.u.random;
    return ("hsl(" + f(361) + "," + f(100) + "%," + f(100) + "%)");
};

p.g.r.HSLA = function() {
    f = p.u.random;
    return ("hsla(" + f(361) + "," + f(100) + "%," + f(100) + "%," + m.random() + ")");
};

p.g.fit = function() {
    v = p.g.ca;
    v.style.position = "absolute";
    v.style.left = v.style.top = 0;
    v.width = (!w.Windows) ? p.can.compatible_width + 20 : p.can.compatible_width;
    v.height = (!w.Windows) ? p.can.compatible_height + 20 : p.can.compatible_height;
    p.g.fits = !0;
};

p.g.fullscreen = function() {
    if (w.Windows) {
        f = w.Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
        return (f.isFullScreen || f.isFullScreenMode);
    }
    else return (d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen || d.fullscreenElement !== u);
};
    
p.g.toggleFullscreen = function() {
    v = p.g.ca;
	
    if (w.nw) {
        f = w.nw.Window.get();
        if (f) {
            f.toggleFullscreen();
            f.enterFullscreen();
        }
    }
	
    if (w.require) {
        if (w.require("electron")) {
            f = w.require("electron").getCurrentWindow();
            f.setFullScreen(!0);
            f.setMenuBarVisibility(!1);
        }
    }
	
    if (w.Windows) {
        f = w.Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
        if (!f.isFullScreen || !f.isFullScreenMode) {
            if (f.tryEnterFullScreenMode()) {
                f.fullScreenSystemOverlayMode = w.Windows.UI.ViewManagement.ApplicationViewWindowingMode.fullScreen;
            }
        }
    }
	
    if (v.requestFullscreen) v.requestFullscreen();
    if (v.mozRequestFullScreen) v.mozRequestFullScreen();
    if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
    if (v.webkitRequestFullScreen) v.webkitRequestFullScreen();
    if (v.msRequestFullscreen) v.msRequestFullscreen();
};

p.g.exitFullscreen = function() {
    v = p.g.ca;
	
    if (w.nw) {
        if (w.nw.Window.get()) w.nw.Window.get().leaveFullscreen();
    }
	
    if (w.require) {
        if (w.require("electron")) {
            f = w.require("electron").getCurrentWindow();
            f.setFullScreen(!1);
            f.setMenuBarVisibility(!0);
        }
    }
	
    if (w.Windows) {
        f = w.Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
        if (f.isFullScreen || f.isFullScreenMode) {
            f.exitFullScreenMode();
            f.fullScreenSystemOverlayMode = w.Windows.UI.ViewManagement.ApplicationViewWindowingMode.preferredLaunchViewSize;
        }
    }
	
    if (d.exitFullscreen) d.exitFullscreen();
    if (d.mozCancelFullScreen) d.mozCancelFullScreen();
    if (d.webkitExitFullscreen) d.webkitExitFullscreen();
    if (d.webkitCancelFullScreen) d.webkitCancelFullScreen();
    if (d.msExitFullscreen) d.msExitFullscreen();
    v.width = p.can.compatible_width;
    v.height = p.can.compatible_height;
};

p.g.useContext = function(c) {
    p.g.context = p.contexts[c];
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
};

p.g.setContext = function(c, i) {
    p.g.context = c;
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
    p.con.set(c, i);
};
    
p.g.setAlpha = function(a) {
    p.g.c.globalAlpha = a;
};

p.g.RGB = function(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
};

p.g.RGBA = function(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a / 255 + ")";
};

p.g.HSL = function(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
};

p.g.HSLA = function(h, s, l, a) {
    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
};

p.g.HEX = function(h) {
    return ("#" + h);
};

p.g.color = function(f, s) {
    p.g.c.fillStyle = f;
    p.g.c.strokeStyle = s || "black";
};

p.g.setBackgroundColor = function(c) {
    v = p.g.ca;
    v.style.backgroundColor = c;
    v.style.backgroundSize = (v.width + "px " + v.height + "px");
};

p.g.setBackgroundImage = function(s) {
    v = p.g.ca;
    v.style.backgroundImage = "url(" + s + ")";
    v.style.backgroundSize = (v.width + "px " + v.height + "px");
};

p.g.setBackground = function(c) {
    v = p.g.ca;
    v.style.background = c;
    v.style.backgroundSize = (v.width + "px " + v.height + "px");
};

p.g.setFont = function(f, s) {
    p.g.c.font = (s + "px " + f);
};

p.g.clear = function() {
    v = p.g.ca;
    p.g.clearRect(0, 0, v.width, v.height);
};

p.g.render = function(v, f) {
    if (v === p.g.FILL) f.fill();
    if (v === p.g.STROKE) f.stroke();
    if (v === p.g.BOTH) {
        f.fill();
        f.stroke();
    }
};

p.g.text = function(t, x, y) {
    v = p.g.mode;
    f = p.g.c;
    if (v === p.g.FILL) f.fillText(t, x, y);
    if (v === p.g.STROKE) f.strokeText(t, x, y);
    if (v === p.g.BOTH) {
        f.fillText(t, x, y);
        f.strokeText(t, x, y);
    }
};

p.g.rect = function(x, y, w, h) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.rect(x, y, w, h);
    f.closePath();
    p.g.render(v, f);
};

p.g.roundedRect = function(x, y, w, h, r) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.moveTo(x + r, y);
    f.lineTo(x + w - r, y);
    f.quadraticCurveTo(x + w, y, x + w, y + r);
    f.lineTo(x + w, y + h - r);
    f.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    f.lineTo(x + r, y + h);
    f.quadraticCurveTo(x, y + h, x, y + h - r);
    f.lineTo(x, y + r);
    f.quadraticCurveTo(x, y, x + r, y);
    f.closePath();
    p.g.render(v, f);
};

p.g.circle = function(x, y, r) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.arc(x, y, r, 90, 180 * m.PI);
    f.closePath();
    p.g.render(v, f);
};

p.g.line = function(x1, y1, x2, y2) {
    f = p.g.c;
    f.beginPath();
    f.moveTo(x1, y1);
    f.lineTo(x2, y2);
    f.closePath();
    f.stroke();
};

p.g.triangle = function(x1, y1, x2, y2, x3, y3) {
    v = p.g.mode;
    f = p.g.c;
    f.beginPath();
    f.moveTo(x1, y1);
    f.lineTo(x2, y2);
    f.lineTo(x3, y3);
    f.lineTo(x1, y1);
    f.closePath();
    p.g.render(v, f);
};
    
p.g.polygon = function(x, y, s, si) {
    v = p.g.mode;
    f = p.g.c;
    var o = [];
    o.push(x + s * 1, y + s * 0);
    for (var i = 1; i <= si; i++) {
        q = i * 2 * m.PI / si;
        o.push([ x + s * m.cos(q), y + s * m.sin(q) ]);
    }
    f.beginPath();
    f.moveTo(o[0][0], o[0][1]);
    for (var i = 0; i < o.length; i++) f.lineTo(o[i][0], o[i][1]);
    f.closePath();
    p.g.render(v, f);
};

p.g.loadImage = function(src, i) {
    p.images[i] = new Image();
    p.images[i].src = src;
};

p.g.loadImageFromDocument = function(e, i) {
    p.images[i] = e;
};

p.g.drawImage = function(i, sx, sy, sw, sh, dx, dy, dw, dh) {
    p.g.c.imageSmoothingEnabled = !1;
    var oo = d.createElement("canvas").getContext("2d");
    oo.canvas.width = i.width;
    oo.canvas.height = i.height;
    oo.save();
    if (p.g.tint) {
        oo.fillStyle = p.g.tint;
        oo.globalAlpha = 0.7;
        oo.fillRect(0, 0, oo.canvas.width, oo.canvas.height);
        oo.globalCompositeOperation = "destination-atop";
        oo.globalAlpha = 1;
    }
    oo.drawImage(i, 0, 0, i.width, i.height);
    oo.restore();
    p.g.c.drawImage(oo.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
};

p.g.drawImageFromIndex = function(i, sx, sy, sw, sh, dx, dy, dw, dh) {
    p.g.drawImage(p.images[i], sx, sy, sw, sh, dx, dy, dw, dh);
};

p.g.image = function(i, x, y, w, h) {
    p.g.drawImage(i, 0, 0, i.width, i.height, x, y, w, h);
};

p.g.imageFromIndex = function(i, x, y, w, h) {
    p.g.drawImageFromIndex(i, 0, 0, p.images[i].width, p.images[i].height, x, y, w, h);
};

p.g.useFilters = function(f, v) {
    for (var i = 0; i < f.length; i++) p.g.ca.style.filter += (" " + f[i] + "(" + v[i] + ") ");
};

p.g.addFilter = function(f, v) {
    p.g.content.canvas.style.filter += (" " + f + "(" + v + ") ");
};

p.g.clearFilters = function() {
    p.g.ca.style.filter = "none";
};
    
p.g.clearRect = function(x, y, w, h) {
    p.g.c.clearRect(x, y, w, h);
};

p.g.canvasToImage = function(c) {
    return p.canvases[c || 0].toDataURL();
};

p.g.screenshot = function(c) {
    w.open(p.g.canvasToImage(c));
};

p.g.square = function(x, y, s) {
    p.g.rect(x, y, s, s);
};

p.g.pixel = function(x, y) {
    p.g.square(x, y, 1);
};

p.g.point = function(x, y) {
    p.g.circle(x, y, 1);
};

p.g.grid = function(s) {
    var glw = p.g.ca.width / s, glh = p.g.ca.height / s;
    var x = 0, y = 0;
    f = p.g.c;
    for (var i = 0; i < glh; i++)
    {
        for (var z = 0; z < glw; z++)
        {
            f.strokeRect(x,y,s,s);
            f.strokeRect(x + s,y,s,s);
            x += s;
        }
        x = 0, y += s;
    }
};

p.g.translate = function(x, y) {
    p.g.c.translate(x, y);
};

p.g.rotate = function(a) {
    p.g.c.rotate(a);
};

p.g.scale = function(x, y) {
    p.g.c.scale(x, y);
};

p.g.save = function() {
    p.g.c.save();
};

p.g.restore = function() {
    p.g.c.restore();
};

p.g.beginScissor = function(x, y, w, h) {
    f = p.g.c;
    v = p.g.ca;
    f.restore();
    f.save();
    f.beginPath();
    if (p.g.scissor) f.rect(x, y, w, h);
    else f.rect(0, 0, v.width, v.height);
    f.clip();
};
            
p.g.endScissor = function() {
    f = p.g.c;
    f.closePath();
    f.globalCompositeOperation = "source-over";
};

d.onfullscreenchange = d.onmozfullscreenchange = d.onmsfullscreenchange = d.onwebkitfullscreenchange = function() {
    v = p.g.ca;
    f = p.g.fullscreen();
    if (f && v != u) {
        v.width = w.innerWidth;
        v.height = w.innerHeight;
    }

    if (!f && v != u) {
        if (p.g.fits) {
            v.width = w.innerWidth;
            v.height = w.innerHeight;
        } else {
            v.width = p.can.compatible_width;
            v.height = p.can.compatible_height;
        }
    }
};

p.sf = {};
p.fonts = [];

p.sf.load = function(s, o, i) {
    q = new Image();
    q.src = s;
    p.fonts[i] = { image: q, chars: o };
};

p.sf.draw = function(sf, txt, x, y, s, sp, c, op) {
    var f = sp;
    var o = p.g.tint != u ? p.g.tint : u;
    for (var i = 0; i < txt.length; i++) {
        if (i === 0) sp = 0; else sp = f;
        var q = p.fonts[sf].chars[txt[i]];
        if (p.g.backend === "WebGLRenderingContext") {
            o[3] = op || o[3] || 1;
            po.c.tint = p.g.tint = c || p.g.tint;
            if (q) p.g.drawImage(p.fonts[sf].image, q.x, q.y, q.w, q.h, x + (i * (s + sp)), y, s, s);
        }
        else if (p.g.backend === "CanvasRenderingContext2D") {
            var oo = d.createElement("canvas").getContext("2d");
            oo.canvas.width = p.fonts[sf].image.width;
            oo.canvas.height = p.fonts[sf].image.height;
            oo.save();
            oo.fillStyle = c;
            oo.globalAlpha = op || 0.8;
            oo.fillRect(0, 0, oo.canvas.width, oo.canvas.height);
            oo.globalCompositeOperation = "destination-atop";
            oo.globalAlpha = 1;
            oo.drawImage(p.fonts[sf].image, 0, 0);
            oo.restore();
            if (q) p.g.drawImage(oo.canvas, q.x, q.y, q.w, q.h, x + (i * (s + sp)), y, s, s);
        }
    }
    if (p.g.backend === "WebGLRenderingContext") po.c.tint = p.g.tint = o;
};

p.gf = {};
p.gifs = [];

p.gf.load = function(im, t, g) {
    p.gifs[g] = {
        images: [],
        frame: 0,
        duration: t,
        time: 0,
        paused: !1
    };
    for (var i = 0; i < im.length; i++) {
        p.gifs[g].images[i] = new Image();
        p.gifs[g].images[i].src = im[i];
    }
};

p.gf.draw = function(g, x, y, w, h) {
    v = p.gifs[g];
    q = v.images[v.frame];
    if (q) {
        p.g.image(q, x, y, w, h);
        if (!v.paused) {
            v.time++;
            if (v.time === v.duration) {
                v.time = 0;
                v.frame++;
            }
        }
    } else v.frame = 0;
};

p.gf.pause = function(g) {
    p.gifs[g].paused = !0;
};

p.gf.resume = function(g) {
    p.gifs[g].paused = !1;
};

p.sp = {};
p.sprites = [];

p.sp.load = function(s, o, i) {
    q = new Image();
    q.src = s;
    p.sprites[i] = {
        src: q,
        states: o,
    };
};

p.sp.draw = function(i, st, x, y, w, h) {
    v = p.sprites[i].states[st];
    v.start = v.start || 0;
    v.end = v.end || v.info.length;
    v.frame = v.frame || 0;
    v.time = v.time || 0;
    v.paused = v.paused || !1;
    q = v.info[v.frame];
    if (q && (v.frame <= v.end - 1)) {
        p.g.drawImage(p.sprites[i].src, q.x, q.y, q.w, q.h, x, y, w, h);
        if (!v.paused) {
            if (v.time === v.duration) {
                v.time = 0;
                v.frame++;
            }
            v.time++;
        }
    } else v.frame = v.start;
};

p.sp.pause = function(i, st) {
    p.sprites[i].states[st].paused = !0;
};

p.sp.resume = function(i, st) {
    p.sprites[i].states[st].paused = !1;
};

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

p.p = {};

p.p.checkCollisionRecs = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
};

p.p.checkCollisionCircles = function(x1, y1, r1, x2, y2, r2) {
    f = m.pow;
    return (m.sqrt(f(x1 - x2, 2) + f(y1 - y2, 2)) <= r1 + r2);
};

p.p.checkCollisionCircleRect = function(x1, y1, r, x2, y2, w, h) {
    f = m.abs;
    v = f(x1 - x2 - w / 2);
    q = f(y1 - y2 - h / 2);
    o = m.pow;
    if (v > (w / 2 + r) || q > (h / 2 + r)) { return !1; }
    if (v <= (w / 2) || q <= (h / 2)) { return !0; }
    return (o(v - w / 2, 2) + o(q - h / 2, 2) <= o(r, 2));
};

p.p.checkCollisionCircleLine = function(x, y, r, fx, fy, tx, ty) {
    var ds;
    f = m.pow;
    q = ((x - fx) * (tx - fx) + (y - fy) * (ty - fy)) / (f(ty - fy, 2) + f(tx - fx, 2));
    if (q >= 0 && q <= 1) dist = f((fx + (tx - fx) * q - x), 2) + f((fy + (ty - fy) * q - y), 2);
    else {
        if (q < 0) ds = f((fx - x), 2) + f((fy - y), 2);
        else ds = f((tx - x), 2) + f((ty - y), 2);
    }
    return (ds < f(r, 2));
};

p.p.checkCollisionCirclePoint = function(x, y, r, px, py) {
    q = px - x;
    f = py - y;
    v = m.sqrt((q * q) + (f * f));
    return (v <= r);
};

p.p.checkCollisionRectLine = function(x, y, w, h, x1, y1, x2, y2) {
    _z = p.p.checkCollisionLines;
    v = _z(x1, y1, x2, y2, x, y, w, y + h);
    f = _z(x1, y1, x2, y2, x + w, y, x + w, y + h);
    q = _z(x1, y1, x2, y2, x, y, x + w, y);
    o = _z(x1, y1, x2, y2, x, y + h, x + w, y + h);
    return (v || f || q || o);
};

p.p.checkCollisionRectPoint = function(x, y, w, h, px, py) {
    return (px >= x && px <= x + w && py >= y && py <= y + h);
};

p.p.checkCollisionLines = function(x1, y1, x2, y2, x3, y3, x4, y4) {
    var uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    var uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) return !0;
    return !1;
};

p.p.checkCollisionLinePoint = function(x1, y1, x2, y2, px, py) {
    _f = p.p.distanceBetween;
    q = _f(px, py, x1, y1);
    v = _f(px, py, x2, y2);
    f = _f(x1, y1, x2, y2);
    return (q + v >= f - 0.1 && q + v <= f + 0.1);
};

p.p.checkCollisionPoints = function(p1x, p1y, p2x, p2y) {
    return (p1x === p2x && p1y === p2y);
};

p.p.checkCollisionTriangles = function(t1x1, t1y1, t1x2, t1y2, t1x3, t1y3, t2x1, t2y1, t2x2, t2y2, t3x3, t3y3) {
    _f = p.p.checkCollisionTriangleLine;
    return (_f(t1x1, t1y1, t1x2, t1y2, t1x3, t1y3, t2x1, t2y1, t2x2, t2y2) ||
            _f(t1x1, t1y1, t1x2, t1y2, t1x3, t1y3, t2x2, t2y2, t2x3, t2y3) ||
            _f(t1x1, t1y1, t1x2, t1y2, t1x3, t1y3, t2x3, t2y3, t2x1, t2y1));
};

p.p.checkCollisionTriangleRect = function(x1, y1, x2, y2, x3, y3, x, y, w, h) {
    return (p.p.checkCollisionTriangleLine(x1, y1, x2, y2, x3, y3, x, y, x + w, y + h) || p.p.checkCollisionTrianglePoint(x1, y1, x2, y2, x3, y3, x, y));
};

p.p.checkCollisionTriangleLine = function(tx1, ty1, tx2, ty2, tx3, ty3, x1, y1, x2, y2) {
    _f = p.p.checkCollisionLines;
    return (_f(x1, y1, x2, y2, tx1, ty1, tx2, ty2) ||
            _f(x1, y1, x2, y2, tx2, ty2, tx3, ty3) ||
            _f(x1, y1, x2, y2, tx3, ty3, tx1, ty1));
};

p.p.checkCollisionTrianglePoint = function(x1, y1, x2, y2, x3, y3, px, py) {
    _z = m.abs;
    v = _z((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));
    f = _z((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
    q = _z((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
    o = _z((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));
    return (f + q + o === v);
};

p.p.checkCollisionTriangleCircle = function(x1, y1, x2, y2, x3, y3, cx, cy, r) {
    _f = p.p.checkCollisionCircleLine;
    return (p.p.checkCollisionTrianglePoint(x1, y1, x2, y2, x3, y3, cx, cy) ||
            _f(cx, cy, r, x1, y1, x2, y2) ||
            _f(cx, cy, r, x2, y2, x3, y3) ||
            _f(cx, cy, r, x3, y3, x1, y1));
};

p.p.checkCollisionPolygonPoint = function(po, x, y) {
    v = !1;
    f = 0;
    for (var i = 0; i < po.length; i++) {
        f = i++;
        if (f === po.length) f = 0;
        q = po[i], z = po[f];
        v = (((q.y > y && z.y < y) || (q.y < y && z.y > y)) && (x < (z.x - q.x) * (y - q.y) / (z.y - q.y) + q.x));
    }
    return v;
};

p.p.checkCollisionPolygonLine = function(po, x1, y1, x2, y2) {
    f = 0;
    for (var i = 0; i < po.length; i++) {
        f = i++;
        if (f === po.length) f = 0;
        q = po[i], z = po[f];
        return p.p.checkCollisionLines(q.x, q.y, z.x, z.y, x1, y1, x2, y2);
    }
};

p.p.checkCollisionPolygonCircle = function(po, x, y, r) {
    f = 0;
    for (var i = 0; i < po.length; i++) {
        f = i++;
        if (f === po.length) f = 0;
        q = po[i], z = po[f];
        return (p.p.checkCollisionCircleLine(x, y, r, q.x, q.y, z.x, z.y) || p.p.checkCollisionPolygonPoint(po, x, y));
    }
};

p.p.checkCollisionPolygonRect = function(po, x, y, w, h) {
  f = 0;
  for (var i = 0; i < po.length; i++) {
    f = i++;
    if (f === po.length) f = 0;
    q = po[i], z = po[f];
    return (p.p.checkCollisionRectLine(q.x, q.y, z.x, z.y, x, y, w, h) || p.p.checkCollisionPolygonPoint(po, x, y));
  }
};

p.p.checkCollisionPolygonTriangle = function(po, x1, y1, x2, y2, x3, y3) {
    return p.p.checkCollisionPolygons(po, [ { x: x1, y: y1 }, {x: x2, y: y2 }, {x: x3, y: y3 } ]);
};

p.p.checkCollisionPolygons = function(po1, po2) {
    f = 0;
    for (var i = 0; i < po1.length; i++) {
        f = i++;
        if (f === po1.length) f = 0;
        q = po1[i], z = po1[f];
        return (p.p.checkCollisionPolygonLine(po2, q.x, q.y, z.x, z.y) || p.p.checkCollisionPolygonPoint(po1, po2[0].x, po2[0].y));
    }
};

p.p.checkCollisionLeftCanvas = function(o) {
    if (o.w) return o.x <= o.w / 2;
    if (o.r) return o.x + o.vx < o.r;
};

p.p.checkCollisionRightCanvas = function(o, c) {
    v = p.canvases[c || 0];
    if (o.w) return o.x + o.w >= v.width + o.w / 2;
    if (o.r) return o.x + o.vx > v.width - o.r;
};

p.p.checkCollisionTopCanvas = function(o) {
    if (o.h) return o.y <= o.h / 2;
    if (o.r) return o.y + o.vy < o.r;
};

p.p.checkCollisionBottomCanvas = function(o, c) {
    v = p.canvases[c || 0];
    if (o.h) return o.y + o.h >= v.height + o.h / 2;
    if (o.r) return o.y + o.vy > v.height - o.r;
};

p.p.distanceBetween = function(x1, y1, x2, y2) {
    return m.hypot(x2 - x1, y2 - y1);
};

p.p.getDistance = function(x1, y1, x2, y2) {
    return { x: x2 - x1, y: y2 - y1 };
};

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
        language: "javascript",
        defer: !0
    });
};

p.sp = {};
p.sprites = [];

p.sp.load = function(s, o, i) {
    q = new Image();
    q.src = s;
    p.sprites[i] = {
        src: q,
        states: o,
    };
};

p.sp.draw = function(i, st, x, y, w, h) {
    v = p.sprites[i].states[st];
    v.start = v.start || 0;
    v.end = v.end || v.info.length;
    v.frame = v.frame || 0;
    v.time = v.time || 0;
    v.paused = v.paused || !1;
    q = v.info[v.frame];
    if (q && (v.frame <= v.end - 1)) {
        p.g.drawImage(p.sprites[i].src, q.x, q.y, q.w, q.h, x, y, w, h);
        if (!v.paused) {
            if (v.time === v.duration) {
                v.time = 0;
                v.frame++;
            }
            v.time++;
        }
    } else v.frame = v.start;
};

p.sp.pause = function(i, st) {
    p.sprites[i].states[st].paused = !0;
};

p.sp.resume = function(i, st) {
    p.sprites[i].states[st].paused = !1;
};

p.st = {};

p.st.save = function(v, val) {
    st.setItem(v, val);
};

p.st.load = function(v) {
    return st.getItem(v);
};

p.st.remove = function(v) {
    st.removeItem(v)
};

p.st.name = function(i) {
    return st.key(i);
};

p.st.clear = function() {
    st.clear();
};

p.t = {};
p.t.t1 = da();
p.t.t2 = 0;
p.t.rdt = 0;

p.t.countdown = function(f, ms) {
    return w.setTimeout(f, ms);
};

p.t.interval = function(f, ms) {
    return w.setInterval(f, ms);
};

p.t.dt = function() {
    p.t.t2 = da();
    p.t.rdt = p.t.t2 - p.t.t1;
    p.t.t1 = p.t.t2;
    return p.t.rdt;
};

p.t.fps = function() {
    return (1000 / p.t.dt());
};

p.t.timer = function(f, fps) {
    return p.t.interval(f, 1000 / fps);
};

p.t.animate = function(f) {
    return w.requestAnimationFrame(f);
};

p.t.pause = function(t) {
    return (w.clearTimeout || w.clearInterval || w.cancelAnimationFrame)(t);
};

p.v = {};
p.videos = [];

p.v.load = function(s, v) {
    q = d.createElement("video");
    q.src = s;
    q.autoplay = !0;
    q.loop = !1;
    q.is_paused = !1;
    q.load();
    p.videos[v] = q;
};

p.v.play = function(v, x, y, w, h) {
    q = p.g.context.canvas;
    k = p.videos[v];
    if (!k.is_paused) {
        if (!k.ended) {
            p.g.c.drawImage(k, x || 0, y || 0, w || q.width, h || q.height);
            k.play();
        }
    } else k.pause();
};

p.v.pause = function(v) {
    p.videos[v].pause();
    p.videos[v].is_paused = !0;
};

p.v.setVolume = function(vo, v) {
    p.videos[v].volume = vo;
};

p.v.setMute = function(m, v) {
    p.videos[v].muted = m;
};

p.v.setLoop = function(l, v) {
    p.videos[v].loop = l;
};

p.v.finished = function(v) {
    return p.videos[v].ended;
};

p.v.reset = function(v) {
    p.v.pause(v);
    p.videos[v].currentTime = 0;
};

var pancake = p;
if (p.a) pancake.audio = p.a;
if (p.can) pancake.canvas = p.can;
if (p.con) pancake.context = p.con;
if (p.ga) pancake.game = p.ga;
if (p.g) pancake.graphics = p.g;
if (p.g.r) pancake.graphics.random = p.g.r;
if (p.b) pancake.browser = p.b;
if (p.b.s) pancake.browser.support = p.b.s;
if (p.c) pancake.content = p.c;
if (p.de) pancake.device = p.de;
if (p.i) pancake.input = p.i;
if (p.o) pancake.os = p.o;
if (p.p) pancake.physics = p.p;
if (p.s) pancake.script = p.s;
if (p.sp) pancake.sprite = p.sp;
if (p.st) pancake.storage = p.st;
if (p.t) pancake.timers = p.t;
if (p.u) pancake.util = p.u;
if (p.v) pancake.video = p.v;
if (p.re) pancake.replay = p.re;
if (p.gf) pancake.gif = p.gf;
if (p.sf) pancake.spritefont = p.sf;
if (p.x) pancake.xhr = p.x;
c.info("Made with Pancake " + p.version + "\nhttps://github.com/Rabios/Pancake\nRenderer: " + p.g.backend);

