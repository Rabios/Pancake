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
p.i.swipe_direction = "";
p.i.accelerometer = u;
p.i.touches = [];
var add = w.addEventListener;

if (w.Accelerometer) {
    p.i.accelerometer = new Accelerometer({ frequency: 60 });
    p.i.accelerometer.addEventListener("reading", function(acl) {
        p.i.accel_x = acl.x;
        p.i.accel_y = acl.y;
        p.i.accel_z = acl.z;
    });
    p.i.accelerometer.start();
}

add("mousedown", function(e) {
    p.i.swipe_start_x = ex(e);
    p.i.swipe_start_y = ey(e);
    p.i.swipe_start_time = da();
});

add("mouseup", function(e) {
    p.i.mouse_x = ex(e);
    p.i.mouse_y = ey(e);
    p.i.swipe_finish_x = p.i.mouse_x - p.i.swipe_start_x;
    p.i.swipe_finish_y = p.i.mouse_y - p.i.swipe_start_y;
    p.i.swipe_finish_time = da() - p.i.swipe_start_time;
    if (p.i.swipe_finish_time <= 1000) {
        f = m.abs;
        if (f(p.i.swipe_finish_x) >= 100 && f(p.i.swipe_finish_y) <= 300) {
            if (p.i.swipe_finish_x < 0) p.i.swipe_direction = "LEFT";
            else p.i.swipe_direction = "RIGHT";
        }
        else if (f(p.i.swipe_finish_y) >= 100 && f(p.i.swipe_finish_x) <= 300) {
            if (p.i.swipe_finish_y < 0) p.i.swipe_direction = "UP";
            else p.i.swipe_direction = "DOWN";
        }
    }
});

add("mousemove",function(e) {
    p.i.mouse_x = ex(e);
    p.i.mouse_y = ey(e);
});

add("touchstart", function(e) {
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
}, !1);

add("touchend", function(e) {
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
        if (t.swipe_finish_time <= 1000) {
            f = m.abs;
            if (f(t.swipe_finish_x) >= 100 && f(t.swipe_finish_y) <= 300) {
                if (t.swipe_finish_x < 0) t.swipe_direction = "LEFT";
                else t.swipe_direction = "RIGHT";
            }
            else if (f(t.swipe_finish_y) >= 100 && f(t.swipe_finish_x) <= 300) {
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
}, !1);

add("touchcancel", function(e) {
    for (var i = 0; i < q.length; i++) {
        t = p.i.touches[i];
        t.tap = !1;
        t.touchdown = !1;
    }
    p.i.tap = !1;
    p.i.touchdown = !1;
    e.preventDefault();
}, !1);

add("touchmove", function(e) {
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
}, !1);

add("click", function() {
    p.i.click = !0;
});

add("mousedown", function(e) {
    p.i.latest_mouse_button_down = e.button;
    p.i.click = !1;
});

add("mouseup", function(e) {
    p.i.latest_mouse_button_up = e.button;
    p.i.click = !1;
});

add("keydown", function(e) {
    p.i.latest_key_down = e.which || e.keyCode;
});

add("keyup", function(e) {
    p.i.latest_key_up = e.which || e.keyCode;
});

add("wheel", function(e) {
    p.i.wheel_x = e.deltaX;
    p.i.wheel_y = e.deltaY;
    p.i.wheel_z = e.deltaZ;
    
    if (p.i.wheel_x > 0) {
        p.i.wheel_left = !1;
        p.i.wheel_right = !0;
    } else if (p.i.wheel_x < 0) {
        p.i.wheel_left = !0;
        p.i.wheel_right = !1;
    } else if (p.i.wheel_x == 0) p.i.wheel_left = p.i.wheel_right = !1;
    
    if (p.i.wheel_y > 0) {
        p.i.wheel_up = !1;
        p.i.wheel_down = !0;
    } else if (p.i.wheel_y < 0) {
        p.i.wheel_up = !0;
        p.i.wheel_down = !1;
    } else if (p.i.wheel_y == 0) p.i.wheel_up = p.i.wheel_down = !1;
});

p.i.mousedown = function(b) {
    return p.i.latest_mouse_button_down == b;
};

p.i.mouseup = function(b) {
    return p.i.latest_mouse_button_up == b;
};

p.i.swipe = function(d, f) {
    q = p.i.touches[f || 0];
    if (q) return (q.swipe_direction == d);
    else return (p.i.swipe_direction == d);
};

p.i.keydown = function(k) {
    return p.i.latest_key_down == k;
};

p.i.keyup = function(k) {
    return p.i.latest_key_up == k;
};

p.i.cursorState = function(s, i) {
    b.style.height = "100%";
    v = d.getElementsByTagName("html")[0];
    v.style.height = "100%";
    p.canvases[i || 0].style.cursor = s;
    if (p.g.backend == "WebGLRenderingContext" && p.g.ctx2d_enabled) p.g.ctx2d.canvas.style.cursor = s;
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
    n.getGamepads = n.getGamepads || n.webkitGetGamepads || n.webkitGamepads;
    p.i.gamepad_move_horizontal_direction = "";
    p.i.gamepad_move_vertical_direction = "";
    p.i.gamepad_camera_horizontal_direction = "";
    p.i.gamepad_camera_vertical_direction = "";
    p.i.GAMEPAD_ANALOG_UP = -0.1;
    p.i.GAMEPAD_ANALOG_DOWN = 0.1;
    p.i.GAMEPAD_ANALOG_LEFT = 0.1;
    p.i.GAMEPAD_ANALOG_RIGHT = -0.1;
    p.i.GAMEPAD_MOVE_ANALOG = 1;
    p.i.GAMEPAD_CAMERA_ANALOG = 2;

    p.i.gamepadConnected = function(i) {
        return !(n.getGamepads()[i] == u);
    };
    
    p.i.gamepadID = function(i) {
        v = n.getGamepads()[i];
        if (!(v == u)) return v.id;
    };
    
    p.i.gamepadButtonPressed = function(i, b) {
        v = n.getGamepads()[i];
        if (!(v == u)) return v.buttons[b].pressed;
    };
    
    p.i.gamepadButtonTouched = function(i, b) {
        v = n.getGamepads()[i];
        if (!(v == u)) return v.buttons[b].touched;
    };

    p.i.gamepadMovement = function(i, a, d) {
        v = n.getGamepads()[i];
        if (!(v == u)) {
            if (a == p.i.GAMEPAD_MOVE_ANALOG) {
                if (v.axes[1] <= d) p.i.gamepad_move_vertical_direction = "UP";
                if (v.axes[1] >= d) p.i.gamepad_move_vertical_direction = "DOWN";
                if (v.axes[0] <= d) p.i.gamepad_move_horizontal_direction = "LEFT";
                if (v.axes[0] >= d) p.i.gamepad_move_horizontal_direction = "RIGHT";
            }
            
            if (a == p.i.GAMEPAD_CAMERA_ANALOG) {
                if (v.axes[3] <= d) p.i.gamepad_camera_vertical_direction = "UP";
                if (v.axes[3] >= d) p.i.gamepad_camera_vertical_direction = "DOWN";
                if (v.axes[2] <= d) p.i.gamepad_camera_horizontal_direction = "LEFT";
                if (v.axes[2] >= d) p.i.gamepad_camera_horizontal_direction = "RIGHT";
            }
        }
    };

    p.i.gamepadAnalogMoved = function(i, a, d) {
        if (d == "UP") q = p.i.GAMEPAD_ANALOG_UP;
        if (d == "DOWN") q = p.i.GAMEPAD_ANALOG_DOWN;
        if (d == "LEFT") q = p.i.GAMEPAD_ANALOG_LEFT;
        if (d == "RIGHT") q = p.i.GAMEPAD_ANALOG_RIGHT;
        p.i.gamepadMovement(i, a, q);
        if (a == p.i.GAMEPAD_MOVE_ANALOG) return (p.i.gamepad_move_horizontal_direction == d || p.i.gamepad_move_vertical_direction == d);
        if (a == p.i.GAMEPAD_CAMERA_ANALOG) return (p.i.gamepad_camera_horizontal_direction == d || p.i.gamepad_camera_vertical_direction == d);
    };
}

p.i.preventLoop = function() {
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
    if (p.b.s.GAMEPAD()) {
        p.i.gamepad_move_horizontal_direction = "";
        p.i.gamepad_move_vertical_direction = "";
        p.i.gamepad_camera_horizontal_direction = "";
        p.i.gamepad_camera_vertical_direction = "";
    }
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
    Y: 3, LB: 4, RB: 5, LT: 6, RT: 7, BACK: 8, START: 9, LEFT_ANALOG_STICK: 10, RIGHT_ANALOG_STICK: 11,
    UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15, PLAYSTATION_X: 0, O: 1, SQUARE: 2, TRIANGLE: 3, L1: 4, R1: 5, L2: 6, R2: 7, 
    SELECT: 8
};
