# Changelog

> NOTE: For each update, I recommend you to always take look at [API](https://github.com/Rabios/Pancake/blob/master/docs/api.md) for changes occur.

### v0.0.15 (Update 15)

Fixed gamepad input limits on UWP platform, Now gamepad input works %100!

### v0.0.14 (Update 14)

1. Added support and improvements for working with native stuff like NWJS, Electron, Phonegap, Cordova, WinJS, and UWP...
2. As gamepad functions not supported by Internet Explorer, You'll get null/false instead of being not exist in Pancake (That's to prove error-safe lib)
3. Done some improvements...
4. Added input-customizing variables like `pancake.input.gamepad_threshold`, `pancake.input.swipe_finish_x_limit`, `pancake.input.swipe_finish_y_limit`, `pancake.input.swipe_finish_time_limit`, `pancake.input.accelerometer_frequency`, Enjoy modding some input sensitivity!

### v0.0.13 (Update 13)

1. Fixed WebGL renderer and rewrote with internal use of heavily modified version of [polygl.js](https://github.com/Rabios/polygl.js).
2. Added plugins like `pancake.wasm` for WebAssembly, And `pancake.clipboard` for Clipboard API support, And more...
3. Added input support for Accelerometer.
4. Released [Haxe port](https://github.com/Rabios/Pancake.hx) of Pancake!
5. Added Discord Server, Come join us [here](https://discord.gg/6asrfg6K)!
5. Merged all source in one folder with rename to the renderer, From `canvas` to `canvas2d` when building with Python.
6. Added `pancake.device.geoInfo()` and `pancake.device.language`.
7. Added `pancake.graphics.backend` variable so you can get type of rendering context used by Pancake.
8. Cursor now can be hidden with `pancake.input.showCursor()` and `pancake.input.hideCursor()`, For real as it's fixed!
9. Added input support for mouse wheel controls!
10. Added input support for TV remotes!
11. Added `pancake.graphics.setBackground()` to set canvas background with custom CSS style!
12. Removed 3rd parameter from `pancake.input.gamepadAnalogMoved`, So you just put 4th parameter after 2nd one and just enough (That's to make it easier...).
13. Added logo and icon for Pancake!
14. Added official website for Pancake!
15. Removed `pancake.debug` module...
16. Done a couple of optimizations...
17. `window.animate` became `pancake.timers.animate`, And updated polyfill of `requestAnimationFrame` and `cancelAnimationFrame`...
18. Fixed definition of `pancake.content` in `define.js`.
19. Changed build system, More info can be found [here!](https://github.com/Rabios/Pancake/blob/master/docs/api/build_system.md)
20. Changed functionality of `pancake.graphics.polygon`, And if you use code from previous versions you'll find breaks...
21. Rewrote drawing circles using the changed `pancake.graphics.polygon` function.
22. Fullscreen and Gamepad now supports old versions of WebKit.
23. Support for multi-fingering gestures, Even with swipe!
25. Images drawing got overloads and versions of same function, Like `pancake.graphics.drawImage` and `pancake.graphics.image` and `pancake.graphics.drawImageFromIndex` and `pancake.graphics.imageFromIndex`.
26. Edited gamepad input to use gamepad index as 1st parameter instead of being last in some functions.
27. Edited Audio module functions names to comply with Video module functions names...
28. Added `pancake.browser.OPERA_MINI` to detect if browser is Opera Mini!
29. Added `pancake.browser.is()` and can also be used as `pancake.os.is()` to detect if string is in userAgent.
30. Added `pancake.replay` for saving replays in game!
31. Removed antialiasing support from Pancake cause it makes textures/images drawing blurry.
32. Added `pancake.spritefont`, Which makes it possible to draw texts from images.
33. Renamed current `pancake.sprite` to `pancake.gif`, And made `pancake.sprite` for drawing sprite from cheatsheet!
34. `pancake.physics.getDistance` returns object contains `x` and `y` instead of being stored in variables!
35. Now offered support folder, It contains polyfills that can be useful if your browser doesn't support a feature by Pancake.
36. Readded `pancake.device.online()` function back after being removed since `v0.0.2`.
37. Added `pancake.xhr` for `XMLHttpRequest` Support!
38. Added `pancake.graphics.fit()` function, It lets game canvas fits entire window!
39. Renamed `pancake.browser.java` to `pancake.browser.support.JAVA`
40. Added scissor test for both renderers, Use them via `pancake.graphics.beginScissor` and `pancake.graphics.endScissor`
41. Remove some functions for compatibility and due to being low used, These are removed functions:

```js
pancake.graphics.setLineWidth
pancake.graphics.shadow
pancake.graphics.ellipse
pancake.graphics.setTextAlignment
pancake.graphics.gradientRect
pancake.script.eval					// Use window.eval instead
pancake.input.keypress				// Use pancake.input.keydown, or pancake.input.keyup instead for not repeat key press in game-loop
```

42. Renamed some Physics functions, It's better to take look [here!](https://github.com/Rabios/Pancake/blob/master/docs/api.md#pancakephysics)
43. Redesigned collision detection with canvas sides, So it uses object instead!
44. Added new collision detection functions, Following were added:

```js
pancake.physics.checkCollisionCirclePoint
pancake.physics.checkCollisionRectLine
pancake.physics.checkCollisionRectPoint
pancake.physics.checkCollisionLines
pancake.physics.checkCollisionLinePoint
pancake.physics.checkCollisionPoints
pancake.physics.checkCollisionTriangles
pancake.physics.checkCollisionTriangleRect
pancake.physics.checkCollisionTriangleLine
pancake.physics.checkCollisionTrianglePoint
pancake.physics.checkCollisionTriangleCircle
pancake.physics.checkCollisionPolygonRect
pancake.physics.checkCollisionPolygonPoint
pancake.physics.checkCollisionPolygonLine
pancake.physics.checkCollisionPolygonCircle
pancake.physics.checkCollisionPolygonTriangle
```

45. Added `pancake.graphics.tint` for manipulating image tint!
46. Improved check for Internet Explorer!
47. Added check for more audio formats (AAC, AACP, CAF, FLAC)!
48. Renamed `pancake.graphics.erase` to `pancake.graphics.clearRect`.
49. Fixed problem in `pancake.context.set`, From first pull request.
50. Fixed fullscreen detection for Mozilla-vendor browsers!
51. Fixed `pancake.timers.dt()` and added `pancake.timers.fps()`.

### v0.0.12 (Update 12)

1. Added WebGL renderer that uses `WebGLRenderingContext`!
2. Removed `pancake.timers.second` due to being unstable with intervals and timers.
3. Removed `pancake.graphics.shear` due to lack of usage.
4. Added `pancake.browser.support.WEBGL()` to detect if WebGL supported!
5. Added `pancake.browser.supports(feature)` to make feature detection easier!
6. Due to being batch and shell build unstable, I removed them.

### v0.0.11 (Update 11)

1. Added `pancake.game.close()` back so you can close game if opened by script,Or if you use Phonegab or Apache Cordova (In case you linked their script to game HTML file)
2. Optimized the framework for the third time
3. Updated video and audio examples to check if video and audio playing supported
4. Improved browser and OS examples

> CAUTION: If you are developing a game that focuses on frame rates,Do not use `pancake.timers.second` as it's not accurate in counting a second

### v0.0.10 (Update 10)

1. Optimized the framework for the second time
2. Fixed example `graphics_04.html` (Changing color mode example),Where color mode doesn't change

> That's all, Thanks for support!

### v0.0.9 (Update 9)

Optimized the framework for the first time

> TODO: Optimize Pancake for the second time

### v0.0.8 (Update 8)

Added `pancake.graphics.shadow(color, blur)` to apply shadows in-game when drawing shapes

> TODO: Optimizing

### v0.0.7 (Update 7)

1. Removed `pancake.graphics.resize()` but let canvas used by `pancake.canvas.set()` in case you used a canvas using `pancake.context.use()` 
2. Better fullscreen check and better fullscreen functionality
3. Added ability to detect SeaMonkey browser, And Maxthon browser (In case developer didn't changed `navigator.userAgent` from Maxthon browser settings)
4. Improved games,And also improved some examples

> TODO: Optimize Pancake to become smaller, That doesn't means i will remove content

### v0.0.6 (Update 6)

1. Added content feature to load JSON content and parse it
2. Added more operating systems and browsers to detect
3. Optimized gamepad detection
4. Added `pancake.graphics.resize()` So you can resize current canvas easily without setting canvas index if it were used from HTML `<canvas>` tags
5. Added `pancake.physics.getDistance()` To get distance from position to another
6. Fixed problem when video and audio not looping if loop set to true
7. Fixed problem mouse pointer not locked in canvas element
8. Fixed lock pointer problems
9. Fixed problem swiping doesn't works

For more info check the [API](https://github.com/Rabios/Pancake/blob/master/docs/api.md)

### v0.0.5 (Update 5)

1. Fixed some problems related to touch support
2. Now functions of drawing shapes integrated with `pancake.graphics` instead of adding them to `CanvasRenderingContext2D.prototype`,To let framework take smaller size with same result
3. Removed `pancake.game.close()` (Same as `window.close()` it gives warning)
4. Improved touch
5. Added video features,Check the [API](https://github.com/Rabios/Pancake/blob/master/docs/api.md) again

### v0.0.4 (Update 4)

1. Added `pancake.graphics.fullscreen()` to check if game is in fullscreen
2. Set keyboard input to use `KeyboardEvent.keyCode` instead of `KeyboardEvent.key`
3. Fixed problem that some examples can't run offline on internet explorer cause of `localStorage`
   
### v0.0.3 (Update 3)

1. Renamed `pancake.timers.animate()` to `window.animate()` cause of TypeError
2. Added new game: Snake 
3. Resize canvas to fit screen when toggling fullscreen mode
4. Added ability use `pancake.graphics.screenshot()` on a specified canvas (you just need to add canvas index as first parameter)
5. Removed `pancake.graphics.setResolution()`

### v0.0.2 (Update 2)

1. Removed `pancake.device.online()` cause of incompatibility with Google Chrome and some browsers
2. Improved scrolling
3. Added `pancake.util.randomBetween(a, b)`
4. Added `pancake.timers.second`

### v0.0.1 (Update 1)

First release, Looking for bugs to smash it!!!
