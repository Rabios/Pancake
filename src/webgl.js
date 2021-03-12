p.g = {};
p.g.r = {};
p.images = [];
p.g.FILL = 1;
p.g.STROKE = 2;
p.g.BOTH = 3;
p.g.texture = !1;
p.g.animation = !1;
p.g.p = u;
p.g.context = u;
p.g.c = u;
p.g.ca = u;
p.g.ctx2d = u;
p.g.ctx2d_enabled = !0;
p.g.scissor = !0;
p.g.alpha = 1;
p.g.tint = [1, 1, 1, p.g.alpha];
p.g.fillColor = [0, 0, 0, p.g.alpha];
p.g.strokeColor = [0, 0, 0, p.g.alpha];
p.g.pr = u;
p.g.a = u;
p.g.mode = p.g.FILL;
p.g.texBuffer = u;
p.g.texRect = u;
p.g.vidBuffer = u;
p.g.vidRect = u;
p.g.backend = "WebGLRenderingContext";

// polygl.js
// https://github.com/Rabios/polygl.js
// NOTE: This version is heavily modified for integration with Pancake!
var po={b:{},c:{},co:{},s:{},t:{},v:{},p:u,e2d:p.g.ctx2d_enabled};b&&(b.style.position="relative"),po.b.texture=!1,po.b.animation=!1,po.b.load=function(e){var o=po.c.r.createBuffer();return po.c.r.bindBuffer(po.c.r.ARRAY_BUFFER,o),po.c.r.bufferData(po.c.r.ARRAY_BUFFER,new Float32Array(e),po.c.r.STATIC_DRAW),po.c.r.bindBuffer(po.c.r.ARRAY_BUFFER,null),o},po.b.use=function(e){po.c.r.bindBuffer(po.c.r.ARRAY_BUFFER,e)},po.b.clear=function(){po.c.r.bindBuffer(po.c.r.ARRAY_BUFFER,null)},po.b.rect=function(e,o,l,t){return po.b.texture=!1,po.b.animation=!1,po.c.a=4,po.c.p=po.c.mode===po.c.FILL?po.c.r.TRIANGLE_FAN:po.c.r.LINE_LOOP,[e,o,e+l,o,e+l,o+t,e,o+t]},po.b.square=function(e,o,l){return po.b.rect(e,o,l,l)},po.b.line=function(e,o,l,t){return po.b.texture=!1,po.b.animation=!1,po.c.a=2,po.c.p=po.c.r.LINES,[e,o,l,t]},po.b.triangle=function(e,o,l,t,r,n){return po.b.texture=!1,po.b.animation=!1,po.c.a=3,po.c.p=po.c.mode===po.c.FILL?po.c.r.TRIANGLES:po.c.r.LINE_LOOP,[e,o,l,t,r,n]},po.b.point=function(e,o){return po.b.texture=!1,po.b.animation=!1,po.c.a=1,po.c.p=po.c.r.POINTS,[e,o]},po.b.image=function(e,o,l,t,r,n,c,g){po.b.texture=!0,po.b.animation=!1,po.c.a=6,po.c.p=po.c.r.TRIANGLES;var e=e||0,o=o||0,l=l||po.t.tex.width,t=t||po.t.tex.height,p=r||e,y=(r||e)+(c||l),x=n||o,d=(n||o)+(g||t),a=po.t.tex.width,i=po.t.tex.height,u=e/a,f=(e+l)/a,s=o/i,m=(o+t)/i;po.t.buffer=po.b.load([u,s,f,s,u,m,u,m,f,s,f,m]),po.t.rect=po.b.load([p,x,y,x,p,d,p,d,y,x,y,d])},po.b.video=function(e,o,l,t){po.b.texture=!1,po.b.animation=!0,po.c.a=6,po.c.p=po.c.r.TRIANGLES;var r=e,n=e+l,c=o,g=o+t;po.v.buffer=po.b.load([0,0,1,0,0,1,0,1,1,0,1,1]),po.v.rect=po.b.load([r,c,n,c,r,g,r,g,n,c,n,g])},po.s.pr=function(e,o){var l=po.c.r.createShader(po.c.r.VERTEX_SHADER);po.c.r.shaderSource(l,e),po.c.r.compileShader(l);var t=po.c.r.createShader(po.c.r.FRAGMENT_SHADER);po.c.r.shaderSource(t,o),po.c.r.compileShader(t);var r=po.c.r.createProgram();return po.c.r.attachShader(r,l),po.c.r.attachShader(r,t),po.c.r.linkProgram(r),po.c.r.useProgram(r),po.c.r.deleteShader(l),po.c.r.deleteShader(t),po.c.r.deleteProgram(r),r},po.t.buffer=u,po.t.rect=u,po.t.tex=u,po.t.image=function(e,o,l,t,r,n,c,g,p){po.t.tex=e,po.c.r.enable(po.c.r.BLEND),po.c.r.vertexAttrib4fv(po.c.r.getAttribLocation(po.p, "a_color"), po.c.tint),po.b.image(o,l,t,r,n,c,g,p);var y=po.c.r.createTexture();po.c.r.bindTexture(po.c.r.TEXTURE_2D,y),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_WRAP_S,po.c.r.CLAMP_TO_EDGE),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_WRAP_T,po.c.r.CLAMP_TO_EDGE),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_MIN_FILTER,po.c.r.NEAREST),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_MAG_FILTER,po.c.r.NEAREST),po.c.r.texImage2D(po.c.r.TEXTURE_2D,0,po.c.r.RGBA,po.c.r.RGBA,po.c.r.UNSIGNED_BYTE,po.t.tex),po.c.r.blendFunc(po.c.r.ONE, po.c.r.ONE_MINUS_DST_ALPHA),po.c.r.blendFunc(po.c.r.SRC_ALPHA, po.c.r.ONE_MINUS_SRC_ALPHA),po.c.render(po.t.rect),po.c.r.deleteTexture(y),po.c.r.disable(po.c.r.BLEND)},po.t.empty=function(){var e=po.c.r.createTexture();return po.c.r.bindTexture(po.c.r.TEXTURE_2D,e),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_WRAP_S,po.c.r.CLAMP_TO_EDGE),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_WRAP_T,po.c.r.CLAMP_TO_EDGE),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_MIN_FILTER,po.c.r.NEAREST),po.c.r.texParameteri(po.c.r.TEXTURE_2D,po.c.r.TEXTURE_MAG_FILTER,po.c.r.NEAREST),po.c.r.texImage2D(po.c.r.TEXTURE_2D,0,po.c.r.RGBA,1,1,0,po.c.r.RGBA,po.c.r.UNSIGNED_BYTE,new Uint8Array([0,0,255,255])),e},po.co.RGB=function(e,o,l){return[e/255,o/255,l/255,po.c.alpha]},po.co.RGBA=function(e,o,l,t){return[e/255,o/255,l/255,t/255]},po.co.HEX2RGB=function(e){if(6!=e.length)return[0,0,0,0];var o=e.match(/.{1,2}/g);return[parseInt(o[0],16),parseInt(o[1],16),parseInt(o[2],16),po.c.alpha]},po.co.HSL2RGB=function(e,o,l){var t,r,n,c,g;function p(e,o,l){return l<0&&(l+=1),1<l&&--l,l<1/6?e+6*(o-e)*l:l<.5?o:l<2/3?e+(o-e)*(2/3-l)*6:e}return 0===o?n=c=g=l:(n=p(r=2*l-(t=l<.5?l*(1+o):l+o-l*o),t,e+1/3),c=p(r,t,e),g=p(r,t,e-1/3)),[255*n,255*c,255*g,255]},po.co.HSLA2RGBA=function(e,o,l,t){var r,n,c,g,p;function y(e,o,l){return l<0&&(l+=1),1<l&&--l,l<1/6?e+6*(o-e)*l:l<.5?o:l<2/3?e+(o-e)*(2/3-l)*6:e}return 0===o?c=g=p=t=l:(c=y(n=2*l-(r=l<.5?l*(1+o):l+o-l*o),r,e+1/3),g=y(n,r,e),p=y(n,r,e-1/3)),[255*c,255*g,255*p,0<=t&&t<=1?255*t:255]},po.co.HEX=function(e){return po.co.RGB(po.co.HEX2RGB(e)[0],po.co.HEX2RGB(e)[1],po.co.HEX2RGB(e)[2])},po.co.HSL=function(e,o,l){return po.co.RGB(po.co.HSL2RGB(e/360,o,l)[0],po.co.HSL2RGB(e/360,o,l)[1],po.co.HSL2RGB(e/360,o,l)[2])},po.co.HSLA=function(e,o,l,t){return po.co.RGBA(po.co.HSLA2RGBA(e/360,o,l,a)[0],po.co.HSLA2RGBA(e/360,o,l,a)[1],po.co.HSLA2RGBA(e/360,o,l,a)[2],0<=t&&t<=1?t:1)},po.co.toCanvas=function(e){if(po.e2d)return"rgba("+255*e[0]+","+255*e[1]+","+255*e[2]+","+255*e[3]+")"},po.v.tex=u,po.v.buffer=u,po.v.rect=u,po.v.load=function(e,o,l,t){po.b.video(e,o,l,t),po.v.tex=po.t.empty()},po.v.draw=function(e){po.c.r.bindTexture(po.c.r.TEXTURE_2D,po.v.tex),po.c.r.texImage2D(po.c.r.TEXTURE_2D,0,po.c.r.RGBA,po.c.r.RGBA,po.c.r.UNSIGNED_BYTE,e),po.c.render(po.v.rect)},po.c.r=u,po.c.p=u,po.c.a=u,po.c.ctx2d=u,po.c.FILL=p.g.FILL,po.c.STROKE=p.g.STROKE,po.c.BOTH=p.g.BOTH,po.c.alpha=1,po.c.fillColor=[0,0,0,po.c.alpha],po.c.strokeColor=[0,0,0,po.c.alpha],po.c.mode=po.c.FILL,po.c.antialias=!0,po.c.canvas2d=function(){if(po.e2d){var e=document.createElement("canvas");return e.width=po.c.r.canvas.width,e.height=po.c.r.canvas.height,e.style.position="relative",e.style.zIndex=1,b.appendChild(e),e.getContext("2d")}},po.c.init=function(e){null===e&&(e=0),po.c.r=document.getElementsByTagName("canvas")[e].getContext("experimental-webgl",{antialias:po.c.antialias,preserveDrawingBuffer:!0})||document.getElementsByTagName("canvas")[e].getContext("webgl",{antialias:po.c.antialias,antialias:po.c.antialias,preserveDrawingBuffer:!0}),po.c.r.canvas.style.position="absolute",po.c.r.canvas.style.zIndex=0,po.p=po.s.pr("precision lowp float;\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nuniform vec2 u_resolution;\nuniform vec2 u_translation;\nuniform vec2 u_rotation; \nuniform vec2 u_scale;\nattribute vec4 a_color;\nvarying vec4 v_color;\nvoid main() {\n\t v_color = a_color;\n    vec2 scaledPosition = a_position * u_scale;\n    vec2 rotatedPosition = vec2(scaledPosition.x * u_rotation.y + scaledPosition.y * u_rotation.x, scaledPosition.y * u_rotation.y - scaledPosition.x * u_rotation.x);\n    vec2 position = rotatedPosition + u_translation;\n    vec2 zeroToOne = position / u_resolution;\n    vec2 zeroToTwo = zeroToOne * 2.0;\n    vec2 clipSpace = zeroToTwo - 1.0;\n    gl_PointSize = 2.0;\n    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n    v_texCoord = a_texCoord;\n}\n","precision lowp float;\nvarying vec4 v_color;\nuniform int u_mode;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(void) {\n    if (u_mode == 1) { gl_FragColor = v_color; }\n    if (u_mode == 2) { gl_FragColor = texture2D(u_image, v_texCoord) * v_color; }\n}\n"),po.c.loadDefaults(),po.e2d&&(po.c.ctx2d=po.c.canvas2d()),po.c.clear()},po.c.clear=function(){po.c.r.viewport(0,0,po.c.r.canvas.width,po.c.r.canvas.height);var e=0|+po.c.r.canvas.clientWidth,o=0|+po.c.r.canvas.clientHeight;po.c.r.canvas.width===e&&po.c.r.canvas.height===o||(po.c.r.canvas.width=e,po.c.r.canvas.height=o),po.c.r.clear(po.c.r.COLOR_BUFFER_BIT|po.c.r.DEPTH_BUFFER_BIT),po.e2d&&po.c.ctx2d.clearRect(0,0,po.c.ctx2d.canvas.width,po.c.ctx2d.canvas.height)},po.c.loadDefaults=function(){po.c.alpha=1,po.c.fillColor=[0,0,0,po.c.alpha],po.c.strokeColor=[0,0,0,po.c.alpha],po.c.tint=[1,1,1,po.c.alpha],po.c.r.uniform1i(po.c.r.getUniformLocation(po.p,"u_mode"),1),po.c.r.vertexAttrib4fv(po.c.r.getAttribLocation(po.p, "a_color"), po.c.fillColor),po.c.r.uniform2f(po.c.r.getUniformLocation(po.p,"u_resolution"),po.c.r.canvas.width,po.c.r.canvas.height),po.c.r.uniform2f(po.c.r.getUniformLocation(po.p,"u_translation"),0,0),po.c.r.uniform2f(po.c.r.getUniformLocation(po.p,"u_rotation"),0,1),po.c.r.uniform2f(po.c.r.getUniformLocation(po.p,"u_scale"),1,1)},po.c.enableVertexAttribute=function(e,o,l){po.c.r.bindBuffer(po.c.r.ARRAY_BUFFER,o);var t=po.c.r.getAttribLocation(po.p,e);return po.c.r.vertexAttribPointer(t,l,po.c.r.FLOAT,!1,0,0),po.c.r.enableVertexAttribArray(t),t},po.c.color=function(e,o){e[3]=e[3]||po.c.alpha,po.c.fillColor=[e[0],e[1],e[2],e[3]],po.e2d&&(po.c.ctx2d.fillStyle=po.co.toCanvas(po.c.fillColor)),null!=o?(o[3]=o[3]||po.c.alpha,po.c.strokeColor=[o[0],o[1],o[2],o[3]]):po.c.strokeColor=[0,0,0,po.c.alpha],po.e2d&&(po.c.ctx2d.strokeStyle=po.co.toCanvas(po.c.strokeColor))},po.c.useColor=function(o){po.c.r.vertexAttrib4fv(po.c.r.getAttribLocation(po.p,"a_color"),o);},po.c.save=function(){po.e2d&&po.c.ctx2d.save()},po.c.restore=function(){po.e2d&&po.c.ctx2d.restore()},po.c.translate=function(e,o){po.c.r.uniform2f(po.c.r.getUniformLocation(po.p,"u_translation"),e,o),po.e2d&&po.c.ctx2d.translate(e,o)},po.c.rotate=function(e,o){po.c.r.uniform2f(po.c.r.getUniformLocation(po.p,"u_rotation"),e,o),po.e2d&&po.c.ctx2d.rotate(e)},po.c.scale=function(e,o){po.c.r.uniform2f(po.c.r.getUniformLocation(po.p,"u_scale"),e,o),po.e2d&&po.c.ctx2d.scale(e,o)},po.c.render=function(o){po.c.r.uniform1i(po.c.r.getUniformLocation(po.p,"u_mode"),1),po.c.enableVertexAttribute("a_position",o,2),po.b.texture&&(po.c.r.uniform1i(po.c.r.getUniformLocation(po.p,"u_mode"),2),po.c.enableVertexAttribute("a_texCoord",po.t.buffer,2)),p.b.animation&&(po.c.r.uniform1i(po.c.r.getUniformLocation(po.p,"u_mode"),2),po.c.enableVertexAttribute("a_texCoord",po.v.buffer,2)),po.c.r.drawArrays(po.c.p,0,po.c.a),po.c.r.uniform1i(po.c.r.getUniformLocation(po.p,"u_mode"),1)},po.c.screenshot=function(){window.open(po.c.r.canvas.toDataURL())},po.c.point=po.c.pixel=function(e,o){po.c.mode=p.g.mode;var l=po.b.load(po.b.point(e,o));po.c.render(l)},po.c.line=function(e,o,l,t){po.c.mode=p.g.mode;var r=po.b.load(po.b.line(e,o,l,t));po.c.render(r)},po.c.rect=function(e,o,l,t){if(po.c.mode=p.g.mode,po.c.mode===po.c.BOTH){po.c.mode=po.c.FILL,po.c.useColor(po.c.fillColor);var r=po.b.load(po.b.rect(e,o,l,t));return po.c.render(r),po.c.mode=po.c.STROKE,po.c.useColor(po.c.strokeColor),r=po.b.load(po.b.rect(e,o,l,t)),po.c.render(r),void(po.c.mode=po.c.BOTH)}po.c.mode===po.c.FILL&&po.c.useColor(po.c.fillColor),po.c.mode===po.c.STROKE&&po.c.useColor(po.c.strokeColor),r=po.b.load(po.b.rect(e,o,l,t)),po.c.render(r)},po.c.square=function(e,o,l){if(po.c.mode=p.g.mode,po.c.mode===po.c.BOTH){po.c.mode=po.c.FILL,po.c.useColor(po.c.fillColor);var t=po.b.load(po.b.square(e,o,l));return po.c.render(t),po.c.mode=po.c.STROKE,po.c.useColor(po.c.strokeColor),t=po.b.load(po.b.square(e,o,l)),po.c.render(t),void(po.c.mode=po.c.BOTH)}po.c.mode===po.c.FILL&&po.c.useColor(po.c.fillColor),po.c.mode===po.c.STROKE&&po.c.useColor(po.c.strokeColor),t=po.b.load(po.b.square(e,o,l)),po.c.render(t)},po.c.polygon=function(o,l,e,t){po.c.mode=p.g.mode;var n=[];n.push(o+e*m.cos(0),l+e*m.sin(0));for(var r=1;r<=t;r++)n.push(o+e*m.cos(2*r*m.PI/t),l+e*m.sin(2*r*m.PI/t));var c=po.b.load(n);if(po.c.a=t,po.c.mode===po.c.BOTH)return po.c.useColor(po.c.fillColor),po.c.p=po.c.r.TRIANGLE_FAN,po.c.render(c),po.c.useColor(po.c.strokeColor),po.c.p=po.c.r.LINE_LOOP,void po.c.render(c);po.c.mode===po.c.FILL&&(po.c.useColor(po.c.fillColor),po.c.p=po.c.r.TRIANGLE_FAN,po.c.render(c)),po.c.mode===po.c.STROKE&&(po.c.useColor(po.c.strokeColor),po.c.p=po.c.r.LINE_LOOP,po.c.render(c))},po.c.triangle=function(e,o,l,t,r,n){if(po.c.mode=p.g.mode,po.c.mode===po.c.BOTH){po.c.mode=po.c.FILL,po.c.useColor(po.c.fillColor);var c=po.b.load(po.b.triangle(e,o,l,t,r,n));return po.c.render(c),po.c.mode=po.c.STROKE,po.c.useColor(po.c.strokeColor),c=po.b.load(po.b.triangle(e,o,l,t,r,n)),po.c.render(c),void(po.c.mode=po.c.BOTH)}po.c.mode===po.c.FILL&&po.c.useColor(po.c.fillColor),po.c.mode===po.c.STROKE&&po.c.useColor(po.c.strokeColor),c=po.b.load(po.b.triangle(e,o,l,t,r,n)),po.c.render(c)},po.c.clearRect=function(e,o,l,t){po.c.r.enable(po.c.r.SCISSOR_TEST),po.c.r.scissor(e,o,l,t),po.c.r.clear(po.c.r.COLOR_BUFFER_BIT|po.c.r.DEPTH_BUFFER_BIT),po.c.r.disable(po.c.r.SCISSOR_TEST),po.e2d&&po.c.ctx2d.clearRect(e,o,l,t)},po.c.drawImage=po.c.image=po.t.image,po.c.roundedRect=function(e,o,l,t,r){po.c.mode=p.g.mode,po.e2d&&(po.c.ctx2d.beginPath(),po.c.ctx2d.moveTo(e+r,o),po.c.ctx2d.lineTo(e+l-r,o),po.c.ctx2d.quadraticCurveTo(e+l,o,e+l,o+r),po.c.ctx2d.lineTo(e+l,o+t-r),po.c.ctx2d.quadraticCurveTo(e+l,o+t,e+l-r,o+t),po.c.ctx2d.lineTo(e+r,o+t),po.c.ctx2d.quadraticCurveTo(e,o+t,e,o+t-r),po.c.ctx2d.lineTo(e,o+r),po.c.ctx2d.quadraticCurveTo(e,o,e+r,o),po.c.ctx2d.closePath(),po.c.mode===po.c.FILL&&po.c.ctx2d.fill(),po.c.mode===po.c.STROKE&&po.c.ctx2d.stroke(),po.c.mode===po.c.BOTH&&(po.c.ctx2d.fill(),po.c.ctx2d.stroke()))},po.c.font=function(e,o){po.e2d&&(po.c.ctx2d.font=ts(o+"px "+e))},po.c.text=function(e,o,l){po.c.mode=p.g.mode,po.e2d&&(po.c.mode===po.c.FILL&&po.c.ctx2d.fillText(e,o,l),po.c.mode===po.c.STROKE&&po.c.ctx2d.strokeText(e,o,l),po.c.mode===po.c.BOTH&&(po.c.ctx2d.fillText(e,o,l),po.c.ctx2d.strokeText(e,o,l)))};

p.g.canvas2d = po.c.canvas2d;

p.g.r.alpha = function() {
    return m.random();
};

p.g.r.RGB = function() {
    q = m.random;
    return [q(), q(), q(), p.g.alpha];
};

p.g.r.RGBA = function() {
    q = m.random;
    return [q(), q(), q(), q()];
};

p.g.r.HSL = function() {
    q = m.random;
    return [p.u.random(361), q(), q(), p.g.alpha];
};

p.g.r.HSLA = function() {
    q = m.random;
    return [p.u.random(361), q(), q(), q()];
};

p.g.fit = function() {
    v = p.g.ca;
    v.style.position = "absolute";
    v.style.left = v.style.top = 0;
    v.width = (!w.Windows) ? p.can.compatible_width + 20 : p.can.compatible_width;
    v.height = (!w.Windows) ? p.can.compatible_height + 20 : p.can.compatible_height;
    if (ctx2d_enabled) {
        p.g.ctx2d.canvas.style.position = "absolute";
        p.g.ctx2d.canvas.style.left = p.g.ctx2d.canvas.style.top = 0;
        p.g.ctx2d.canvas.width = (!w.Windows) ? p.can.compatible_width + 20 : p.can.compatible_width;
        p.g.ctx2d.canvas.height = (!w.Windows) ? p.can.compatible_height + 20 : p.can.compatible_height;
    }
};

p.g.fullscreen = function() {
    if (w.Windows) {
        f = w.Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
        return (f.isFullScreen || f.isFullScreenMode);
    }
    else return (d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen);
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

p.g.useContext = function(context_index) {
    po.c.antialias = !0;
    po.c.tint = p.g.tint;
    po.c.fillColor = p.g.fillColor;
    po.c.strokeColor = p.g.strokeColor;
    po.c.alpha = p.g.alpha;
    po.c.texture = p.g.texture;
    po.c.animation = p.g.animation;
    po.c.enable2d = p.g.ctx2d_enabled;
    po.c.texture = p.g.texture;
    po.c.animation = p.g.animation;
    po.c.mode = p.g.mode;
    po.c.init(context_index);
    p.contexts[context_index] = po.c.r;
    p.g.c = p.contexts[context_index];
    p.g.context = p.g.c;
    p.g.ca = p.g.c.canvas;
    p.g.ctx2d = po.c.ctx2d;
    p.g.p = po.c.p;
    p.g.a = po.c.a;
    p.g.pr = po.p;
};

p.g.RGB = po.co.RGB;
p.g.RGBA = po.co.RGBA;
p.g.HSL = po.co.HSL;
p.g.HSLA = po.co.HSLA;
p.g.HEX = po.co.HEX;
p.g.color = po.c.color;
p.g.useColor = po.c.useColor;
p.g.clear = po.c.clear;
p.g.roundedRect = po.c.roundedRect;
p.g.text = po.c.text;
p.g.polygon = po.c.polygon;
p.g.setFont = po.c.font;
p.g.square = po.c.square;
p.g.point = po.c.point;
p.g.rect = po.c.rect;
p.g.circle = function(x, y, r) { po.c.polygon(x, y, r, r * 2); };
p.g.line = po.c.line;
p.g.triangle = po.c.triangle;
p.g.drawImage = po.c.drawImage;
p.g.clearRect = po.c.clearRect;
p.g.save = po.c.save;
p.g.restore = po.c.restore;
p.g.translate = po.c.translate;
p.g.rotate = po.c.rotate;
p.g.scale = po.c.scale;


p.g.setBackgroundColor = function(c) {
    p.g.ca.style.backgroundColor = c;
};

p.g.setBackgroundImage = function(src) {
    p.g.ca.style.backgroundImage = "url(" + src + ")";
    p.g.ca.style.backgroundSize = (p.g.ca.width + "px " + p.g.ca.height + "px");
};

p.g.setBackground = function(cssstyle) {
    p.g.ca.style.background = cssstyle;
};

p.g.setAlpha = function(a) {
    if (!(a > 1) && (a <= 1)) p.g.alpha = a;
    if (p.g.ctx2d_enabled) p.g.ctx2d.globalAlpha = a;
};

p.g.loadImage = function(src, i) {
    p.images[i] = new Image();
    p.images[i].src = src;
};

p.g.loadImageFromElement = function(e, i) {
    p.images[i] = e;
};

p.g.image = function(i, x, y, w, h) {
    p.g.drawImage(i, 0, 0, i.width, i.height, x, y, w, h);
};

p.g.drawImageFromIndex = function(i, sx, sy, sw, sh, dx, dy, dw, dh) {
    p.g.drawImage(p.images[i], sx, sy, sw, sh, dx, dy, dw, dh);
};

p.g.imageFromIndex = function(i, x, y, w, h) {
    p.g.drawImageFromIndex(i, 0, 0, p.images[i].width, p.images[i].height, x, y, w, h);
};

p.g.useFilters = function(f, v) {
    for (var i = 0; i < f.length; i++) p.g.ca.style.filter += ts(" " + f[i] + "(" + v[i] + ") ");
};

p.g.addFilter = function(f, v) {
    p.g.content.canvas.style.filter += ts(" " + f + "(" + v + ") ");
};

p.g.clearFilters = function() {
    p.g.ca.style.filter = "none";
};

p.g.canvasToImage = function(c) {
    if (p.d.unknown(c)) c = 0;
    return pancake.canvases[c].toDataURL();
};

p.g.screenshot = function(c) {
    if (p.d.unknown(c)) c = 0;
    w.open(p.canvases[c].toDataURL());
};

p.g.grid = function(s) {
    var pr = p.g.mode;
    p.g.mode = p.g.STROKE;
    var glw = p.g.ca.width / s, glh = p.g.ca.height / s;
    var x = 0,y = 0;
    for (var i = 0; i < glh; i++)
    {
        for (var z = 0; z < glw; z++)
        {
            p.g.rect(x, y, s, s);
            p.g.rect(x + s, y, s, s);
            x = x + s;
        }
        x = 0, y = y + s;
    }
    p.g.mode = pr;
};

p.g.setContext = function(c, i) {
    p.g.context = c;
    p.g.c = p.g.context;
    p.g.ca = p.g.c.canvas;
    p.con.set(c, i);
};

p.g.beginScissor = function(x, y, w, h) {
    if (p.g.scissor) {
        po.c.r.enable(po.c.r.SCISSOR_TEST);
        po.c.r.scissor(x, y, w, h);
    }
};

p.g.endScissor = function() {
    if (p.g.scissor) po.c.r.disable(po.c.r.SCISSOR_TEST);
};

d.onfullscreenchange = d.onmozfullscreenchange = d.onmsfullscreenchange = d.onwebkitfullscreenchange = function() {
    f = p.g.fullscreen();
    if (f && p.g.c.ca != u) {
        p.g.ca.width = w.innerWidth;
        p.g.ca.height = w.innerHeight;
        v = p.g.ctx2d.canvas;
        if (p.g.ctx2d_enabled && v != u) {
            v.width = w.innerWidth;
            v.height = w.innerHeight;
        }
    }

    if (!f && p.g.c.ca != u) {
        if (p.g.fits) {
            p.g.ca.width = w.innerWidth;
            p.g.ca.height = w.innerHeight;
        } else {
            p.g.ca.width = p.can.compatible_width;
            p.g.ca.height = p.can.compatible_height;
        }
        v = p.g.ctx2d.canvas;
        if (p.g.ctx2d_enabled && v != u) {
            if (p.g.fits) {
                v.width = w.innerWidth;
                v.height = w.innerHeight;
            } else {
                v.width = p.can.compatible_width;
                v.height = p.can.compatible_height;
            }
        }
    }
};
