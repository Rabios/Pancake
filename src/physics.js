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
    return (f + q + o == v);
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
        if (f == po.length) f = 0;
        q = po[i], z = po[f];
        v = (((q.y > y && z.y < y) || (q.y < y && z.y > y)) && (x < (z.x - q.x) * (y - q.y) / (z.y - q.y) + q.x));
    }
    return v;
};

p.p.checkCollisionPolygonLine = function(po, x1, y1, x2, y2) {
    f = 0;
    for (var i = 0; i < po.length; i++) {
        f = i++;
        if (f == po.length) f = 0;
        q = po[i], z = po[f];
        return p.p.checkCollisionLines(q.x, q.y, z.x, z.y, x1, y1, x2, y2);
    }
};

p.p.checkCollisionPolygonCircle = function(po, x, y, r) {
    f = 0;
    for (var i = 0; i < po.length; i++) {
        f = i++;
        if (f == po.length) f = 0;
        q = po[i], z = po[f];
        return (p.p.checkCollisionCircleLine(x, y, r, q.x, q.y, z.x, z.y) || p.p.checkCollisionPolygonPoint(po, x, y));
    }
};

p.p.checkCollisionPolygonRect = function(po, x, y, w, h) {
  f = 0;
  for (var i = 0; i < po.length; i++) {
    f = i++;
    if (f == po.length) f = 0;
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
        if (f == po1.length) f = 0;
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
