# WebGL with Pancake

Pancake in version v0.0.12 features a WebGL renderer that can be used...

### Source

WebGL renderer is modified version of [`polygl.js`](https://github.com/Rabios/polygl.js), And anyone can use it as standalone library!

### NOTES

1. Some functions still use `CanvasRenderingContext2D` backend (Drawing texts), But before creating context you can disable them by using `pancake.graphics.ctx2d_enabled = false;`.
2. Drawing video is experimental in WebGL (And might not work...)
3. WebGL functions might not documented as they are intended to be used as internal functions in Pancake.
4. HSL and HSLA colors are converted to RGB and RGBA for use in WebGL!
5. colors as string won't work in WebGL!

### Backends Comparison

As of Pancake version `v0.0.13` you are able to check for graphics backend used by Pancake!

```js
if (pancake.graphics.backend == "CanvasRenderingContext2D") { // Or "WebGLRenderingContext"
    // Do something if canvas2d used...
}
```
