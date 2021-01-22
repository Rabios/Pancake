# Pancake API

This is the official API page of Pancake, I know it's weird to believe how i fit all this in over 40kb...

Pancake currently containts over 190 functions, Enjoy!

- [Pancake API](#pancake-api)
  - [`pancake.canvas`](#pancakecanvas)
  - [`pancake.context`](#pancakecontext)
  - [`pancake.graphics`](#pancakegraphics)
  - [`pancake.input`](#pancakeinput)
  - [`pancake.physics`](#pancakephysics)
  - [`pancake.audio`](#pancakeaudio)
  - [`pancake.video`](#pancakevideo)
  - [`pancake.timers`](#pancaketimers)
  - [`pancake.storage`](#pancakestorage)
  - [`pancake.content`](#pancakecontent)
  - [`pancake.device`](#pancakedevice)
  - [`pancake.game`](#pancakegame)
  - [`pancake.browser`](#pancakebrowser)
  - [`pancake.os`](#pancakeos)
  - [`pancake.script`](#pancakescript)
  - [`pancake.util`](#pancakeutil)
  - [`pancake.sprite`](#pancakesprite)
  - [`pancake.gif`](#pancakegif)
  - [`pancake.replay`](#pancakereplay)
  - [`pancake.spritefont`](#pancakespritefont)
  - [`pancake.xhr`](#pancakexhr)
  - [Keyboard keys](#keyboard-keys)
  - [TV Remote keys](#tv-remote-keys)
  - [Gamepad and mouse buttons](#gamepad-and-mouse-buttons)
  - [Arrays](#arrays)
  - [How to get content from index?](#how-to-get-content-from-index)

## `pancake.canvas`

```js
// Variables
pancake.canvas.compatible_width                                // Best width of canvas that fits all HTML page
pancake.canvas.compatible_height                               // Best height of canvas that fits all HTML page

// Functions
pancake.canvas.create(w, h, canvas_index)                      // Create canvas with width,Height, And index
pancake.canvas.resize(w, h, canvas_index)                      // Resize canvas that have index
pancake.canvas.setAttribute(attribute, value, canvas_index)    // Set HTML attribute value of canvas that have index
pancake.canvas.remove(canvas_index)                            // Remove canvas that have index
pancake.canvas.hide(canvas_index)                              // Hides canvas that have index
pancake.canvas.show(canvas_index)                              // Shows canvas that have index
pancake.canvas.set(canvas, canvas_index)                       // Sets (Or changes) index of a canvas
```

## `pancake.context`

```js
pancake.context.create(canvas_index, context_index)            // Create context for canvas has index,And set index to context
pancake.context.use(canvas, context_index)                     // Create context with canvas not created by Pancake,And set index to context
pancake.context.set(context, context_index)                    // Set context has index to use context not created by Pancake
```

## `pancake.graphics`

```js
// Variables
pancake.graphics.FILL                                         // Fill mode, To fill shapes
pancake.graphics.STROKE                                       // Stroke mode, To stroke shapes
pancake.graphics.BOTH                                         // Fill and stroke mode, To do both
pancake.graphics.context                                      // CanvasRenderingContext2D (Context of the canvas)
pancake.graphics.mode                                         // Graphics drawing shapes mode
pancake.graphics.context.canvas                               // Current canvas used by the context
pancake.graphics.ctx2d_enabled                                // Set it to false if you don't wish to use non-WebGL backend functions...
pancake.graphics.ctx2d                                        // CanvasRenderingContext2D context used by WebGLRenderingContext backend for some stuff that is undone with WebGL
pancake.graphics.backend                                      // String contains rendering context name used by Pancake when built from source
pancake.graphic.fits                                          // Returns if canvas fits all browser window
pancake.graphics.scissor                                      // Boolean, Used to enable/disable scissor test
pancake.graphics.tint                                         // Image tint used to draw images, Defaults to null (No tint)


// Functions
pancake.graphics.random.alpha()                               // Returns random alpha
pancake.graphics.random.RGB()                                 // Returns random RGB
pancake.graphics.random.RGBA()                                // Returns random RGBA
pancake.graphics.random.HSL()                                 // Returns random HSL
pancake.graphics.random.HSLA()                                // Returns random HSLA
pancake.graphics.fit()                                        // Resizes game canvas to fit entire browser window/screen!
pancake.graphics.fullscreen()                                 // Returns if game is in fullscreen mode
pancake.graphics.toggleFullscreen()                           // Toggle fullscreen
pancake.graphics.exitFullscreen()                             // Exit fullscreen
pancake.graphics.screenshot(canvas_index)                     // Takes screenshot of a canvas (You can ignore using canvas_index so it works on first canvas)
pancake.graphics.useContext(context_index)                    // Sets context for drawing
pancake.graphics.setMode(mode)                                // Sets graphics mode for drawing!
pancake.graphics.setContext(context, context_index)           // Sets context or add it to index
pancake.graphics.setAlpha(a)                                  // Sets alpha
pancake.graphics.RGB(r, g, b)                                 // Returns RGB color
pancake.graphics.RGBA(r, g, b, a)                             // Returns RGBA color
pancake.graphics.HSL(h, s, l)                                 // Returns HSL color
pancake.graphics.HSLA(h, s, l, a)                             // Returns HSLA color
pancake.graphics.color(fill, stroke)                          // Sets fill and stroke color (You can ignore stroke if you don't want to draw lines)
pancake.graphics.setBackgroundColor(color)                    // Sets canvas background color
pancake.graphics.setBackgroundImage(src)                      // Sets canvas background image
pancake.graphics.setBackground(cssstyle)                      // Sets canvas background with custom CSS style string
pancake.graphics.setFont(font_name, font_size)                // Sets font
pancake.graphics.clear()                                      // Clear canvas
pancake.graphics.text(text, x, y)                             // Draw text
pancake.graphics.rect(x, y, w, h)                             // Draw rectangle
pancake.graphics.setTint(r, g, b, a)                          // Sets image tint for drawing images, Disable tint by setting pancake.graphics.tint to null
pancake.graphics.disableTint()                                // Disables tint
pancake.graphics.roundedRect(x, y, w, h, r)                   // Draw rounded rectangle
pancake.graphics.circle(x, y, r)                              // Draw circle
pancake.graphics.line(x1, y1, x2, y2)                         // Draw line
pancake.graphics.triangle(x1, y1, x2, y2, x3, y3)             // Draw triangle
pancake.graphics.polygon(x, y, size, sides)                   // Draw polygon
pancake.graphics.loadImage(src, image_index)                  // Load image to index
pancake.graphics.loadImageFromDocument(element, image_index)  // Load image from HTML element (You can use this to draw canvas or something else)
pancake.graphics.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)  // Draw image with extended parameters
pancake.graphics.image(image, x, y, w, h)                     // Draw image
pancake.graphics.drawImageFromIndex(image_index, sx, sy, sw, sh, dx, dy, dw, dh) // Draw image from pancake.images array with index and extended parameters
pancake.graphics.imageFromIndex(image_index, x, y, w, h)      // Draw image from pancake.images array with index
pancake.graphics.useFilters(filters_names_array, filters_values_array)  // Use filters
pancake.graphics.addFilter(filter, value)                     // Add filter
pancake.graphics.clearFilters()                               // Clear all filters
pancake.graphics.clearRect(x, y, w, h)                        // Clear rect
pancake.graphics.canvasToImage(canvas_index)                  // Returns base64 image string of canvas
pancake.graphics.square(x, y, size)                           // Draw square
pancake.graphics.pixel(x, y)                                  // Draw pixel
pancake.graphics.point(x, y)                                  // Draw point
pancake.graphics.grid(size)                                   // Draw a grid
pancake.graphics.translate(x, y)                              // Translate
pancake.graphics.scale(x, y)                                  // Scale
pancake.graphics.rotate(a)                                    // Rotate
pancake.graphics.rotate(x, y)                                 // Rotate (WebGL version)
pancake.graphics.save()                                       // Save
pancake.graphics.restore()                                    // Restore
pancake.graphics.beginScissor(x, y, w, h)                     // Begins scissor mode rect test for drawing
pancake.graphics.endScissor()                                 // Ends scissor mode rect test 
```

## `pancake.input`

```js
// Variables
pancake.input.latest_key_down                                 // Returns latest key down
pancake.input.latest_key_up                                   // Returns latest key up
pancake.input.latest_mouse_button_down                        // Returns latest mouse button down
pancake.input.latest_mouse_button_up                          // Returns latest mouse button up
pancake.input.click                                           // Returns if clicked on canvas
pancake.input.tap                                             // Returns if tapped on canvas
pancake.input.touchdown                                       // Returns if touch hold on canvas (Still hold)
pancake.input.mouse_x                                         // Mouse X position
pancake.input.mouse_y                                         // Mouse Y position
pancake.input.touch_x                                         // Touch X position (Defaults to first finger touched screen)
pancake.input.touch_y                                         // Touch Y position (Defaults to first finger touched screen)
pancake.input.wheel_x                                         // Mouse Wheel delta X (When rolling with mouse wheel)
pancake.input.wheel_y                                         // Mouse Wheel delta Y (When rolling with mouse wheel)
pancake.input.wheel_z                                         // Mouse Wheel delta Z (When rolling with mouse wheel)
pancake.input.wheel_up                                        // Returns if rolling with mouse wheel up
pancake.input.wheel_down                                      // Returns if rolling with mouse wheel down
pancake.input.wheel_left                                      // Returns if rolling with mouse wheel left
pancake.input.wheel_right                                     // Returns if rolling with mouse wheel right
pancake.input.accel_x                                         // Acceleration X
pancake.input.accel_y                                         // Acceleration Y
pancake.input.accel_z                                         // Acceleration Z
pancake.input.swipe_direction                                 // String, Swipe direction when swipe by mouse
pancake.input.gamepad_move_horizontal_direction               // Returns gamepad horizontal move analog direction
pancake.input.gamepad_move_vertical_direction                 // Returns gamepad vertical move analog direction
pancake.input.gamepad_camera_horizontal_direction             // Returns gamepad horizontal camera analog direction
pancake.input.gamepad_camera_vertical_direction               // Returns gamepad vertical camera analog direction
pancake.input.accelerometer                                   // Accelerometer used by Pancake for Accelerometer controls
pancake.input.touches                                         // Array contains touches

/*
// The index 0 references to first finger ;)
pancake.input.touches[0].x                                    // Touch position X
pancake.input.touches[0].y                                    // Touch position Y
pancake.input.touches[0].swipe_direction                      // Touch swipe direction (If swiped with finger)
*/

// Analogs
pancake.input.GAMEPAD_MOVE_ANALOG                             // Gamepad move analog
pancake.input.GAMEPAD_CAMERA_ANALOG                           // Gamepad camera analog

// Functions
pancake.input.mousedown(mouse_button)                         // Returns if mouse button down
pancake.input.mouseup(mouse_button)                           // Returns if mouse button up
pancake.input.swipe(direction, finger)                        // Returns if swiped in direction with finger touch index (Finger touch index disabled on PC as of using mouse)
pancake.input.keydown(key)                                    // Returns if keyboard key down/press
pancake.input.keyup(key)                                      // Returns if keyboard key up/release
pancake.input.hideCursor(canvas_index)                        // Hides cursor
pancake.input.showCursor(canvas_index)                        // Shows cursor
pancake.input.lockPointer()                                   // Locks pointer in current canvas (If toggled fullscreen)
pancake.input.unlockPointer()                                 // Unlocks pointer
pancake.input.gamepadConnected(gamepad_index)                 // Returns if gamepad connected
pancake.input.gamepadID(gamepad_index)                        // Returns gamepad ID if connected
pancake.input.gamepadButtonPressed(gamepad_index, gamepad_button)  // Returns if gamepad button pressed
pancake.input.gamepadButtonTouched(gamepad_index, gamepad_button)  // Returns if gamepad button touched
pancake.input.gamepadAnalogMoved(gamepad_index, gamepad_analog, direction)  // Returns if gamepad analog moved
pancake.input.preventLoop()                                   // Prevents input loop
```

## `pancake.physics`

```js
// Functions
pancake.physics.checkCollisionRecs(x1, y1, w1, h1, x2, y2, w2, h2)  // Checks collision between 2 rectangles
pancake.physics.checkCollisionCircles(x1, y1, r1, x2, y2, r2)       // Checks collision between 2 circles
pancake.physics.checkCollisionCircleRect(x1, y1, r, x2, y2, w, h)   // Checks collision between circle and rectangle
pancake.physics.checkCollisionCircleLine(x, y, r, line_from_x, line_from_y, line_to_x, line_to_y)  // Checks collision between circle and line
pancake.physics.checkCollisionCirclePoint(x, y, r, px, py)            // Checks collision between circle and point
pancake.physics.checkCollisionRectLine(x, y, w, h, x1, y1, x2, y2)  // Checks collision between rectangle and line
pancake.physics.checkCollisionRectPoint(x, y, w, h, px, py)            // Checks collision between rectangle and point
pancake.physics.checkCollisionLines(x1, y1, x2, y2, x3, y3, x4, y4) // Checks collision between 2 lines
pancake.physics.checkCollisionLinePoint(x1, y1, x2, y2, px, py)        // Checks collision between line and point
pancake.physics.checkCollisionPoints(p1x, p1y, p2x, p2y)            // Checks collision between 2 points
pancake.physics.checkCollisionTriangles(t1x1, t1y1, t1x2, t1y2, t1x3, t1y3, t2x1, t2y1, t2x2, t2y2, t3x3, t3y3) // Checks collision between 2 triangles
pancake.physics.checkCollisionTriangleRect(x1, y1, x2, y2, x3, y3, x, y, w, h) // Checks collision between triangle and rectangle
pancake.physics.checkCollisionTriangleLine(tx1, ty1, tx2, ty2, tx3, ty3, x1, y1, x2, y2) // Checks collision between triangle and line
pancake.physics.checkCollisionTrianglePoint(x1, y1, x2, y2, x3, y3, px, py)                 // Checks collision between triangle and point
pancake.physics.checkCollisionTriangleCircle(x1, y1, x2, y2, x3, y3, cx, cy, r)             // Checks collision between triangle and circle
pancake.physics.checkCollisionPolygonRect(points, x, y, w, h)                             // Checks collision between polygon and rectangle
pancake.physics.checkCollisionPolygonPoint(points, px, py)                                 // Checks collision between polygon and point
pancake.physics.checkCollisionPolygonLine(points, x1, y1, x2, y2)                         // Checks collision between polygon and line
pancake.physics.checkCollisionPolygonCircle(points, x, y, r)                     // Checks collision between polygon and circle
pancake.physics.checkCollisionPolygonTriangle(points, x1, y1, x2, y2, x3, y3)  // Checks collision between polygon and triangle
pancake.physics.checkCollisionLeftCanvas(shape)                     // Checks collision between circle/rectangle and canvas left side
pancake.physics.checkCollisionRightCanvas(shape, canvas_index)      // Checks collision between circle/rectangle and canvas right side
pancake.physics.checkCollisionTopCanvas(shape)                      // Checks collision between circle/rectangle and canvas top side
pancake.physics.checkCollisionBottomCanvas(shape, canvas_index)     // Checks collision between circle/rectangle and canvas bottom side
pancake.physics.distanceBetween(x1, y1, x2, y2)                     // Returns distance between first coordinates and second coordinates
pancake.physics.getDistance(x1, y1, x2, y2)                         // Returns object contains difference between x1 and x2 and difference between y1 and y2
```

## `pancake.audio`

```js
pancake.audio.play(src)                                      // Plays audio file directly
pancake.audio.load(src, audio_index)                         // Loads audio file to index from source
pancake.audio.playFromIndex(audio_index)                     // Plays audio file from index
pancake.audio.pause(audio_index)                             // Pauses audio file playing from index
pancake.audio.setVolume(volume, audio_index)                 // Sets volume of audio file from index
pancake.audio.setMute(mute, audio_index)                     // Mutes or unmutes audio file from index
pancake.audio.setLoop(loop, audio_index)                     // Loops or not to loop audio file from index
pancake.audio.finished(audio_index)                          // Returns if audio file from index finished playing
pancake.audio.reset(audio_index)                             // Resets audio
```

## `pancake.video`

```js
pancake.video.load(src, video_index)                         // Loads video to index
pancake.video.play(video_index, x, y, w, h)                  // Plays video from index (Note that you can ignore x, y, w, h And just use video_index)
pancake.video.pause(video_index)                             // Pauses video from index
pancake.video.setVolume(volume, video_index)                 // Sets volume of video from index
pancake.video.setMute(mute, video_index)                     // Mutes or unmutes video from index
pancake.video.setLoop(loop, video_index)                     // Loops or not to loop video from index
pancake.video.finished(video_index)                          // Returns if video from index has finished playing
pancake.video.reset(video_index)                             // Resets video (Only use this in case your video does not have loop enabled and you want to replay it...)
```

## `pancake.timers`

```js
// Functions
pancake.timers.countdown(f, ms)                              // Same as window.setTimeout
pancake.timers.interval(f, ms)                               // Same as window.setInterval
pancake.timers.dt()                                          // Returns deltaTime
pancake.timers.timer(f, frames_per_second)                   // Sets interval then run function (frames per second integer from 0 to any)
pancake.timers.pause(timer_variable)                         // Pauses countdown or interval
pancake.timers.animate(f, milliseconds)                      // Improved version of window.requestAnimationFrame(), With framerate
```

## `pancake.storage`

```js
pancake.storage.save(variable, value)                        // Saves a variable to localStorage with value
pancake.storage.load(variable)                               // Loads a variable from localStorage
pancake.storage.remove(variable)                             // Removes a variable from localStorage
pancake.storage.name(variable_index)                         // Returns name of variable from localStorage by index
pancake.storage.clear()                                      // Clears localStorage and all variables saved/stored
```

## `pancake.content`

```js
pancake.content.load(json)                                   // Returns object contains JSON parsed content(string) from a variable
```

## `pancake.device`

```js
// Variables
pancake.device.screen_width                                  // Returns device screen width
pancake.device.screen_height                                 // Returns device screen height
pancake.device.language                                      // Returns browser (And device) language

// Functions
pancake.device.vibrate(pattern)                              // Vibrate according to pattern
pancake.device.stopVibrating()                               // Stops vibrating
pancake.device.online()                                      // Returns if device online
pancake.device.geoInfo()                                     // Returns device geographics info like time, region, timezone, IP, and more...
```

## `pancake.game`

```js
pancake.game.title(title)                                    // Changes game title document
pancake.game.restart()                                       // Reloads game page
pancake.game.close()                                         // Closes game (If could,In case game opened by script,Or with phonegab or cordova)
```

## `pancake.browser`

```js
// Variables
pancake.browser.CHROME                                       // Returns if browser is Google Chrome
pancake.browser.FIREFOX                                      // Returns if browser is Mozilla Firefox
pancake.browser.SAFARI                                       // Returns if browser is Apple Safari
pancake.browser.OPERA                                        // Returns if browser is Opera
pancake.browser.OPERA_MINI                                   // Returns if browser is Opera Mini
pancake.browser.EDGE                                         // Returns if browser is Microsoft Edge
pancake.browser.IE                                           // Returns if browser is Internet Explorer
pancake.browser.SAMSUNG_INTERNET                             // Returns if browser is Samsung Internet Browser
pancake.browser.MAXTHON                                      // Returns if browser is Maxthon
pancake.browser.SEAMONKEY                                    // Returns if browser is Seamonkey


// Functions
pancake.browser.support.WEBGL()                              // Returns if browser supports Canvas and WebGLRenderingContext
pancake.browser.support.CANVAS()                             // Returns if browser supports Canvas and CanvasRenderingContext2D
pancake.browser.support.GAMEPAD()                            // Returns if browser supports Gamepad API
pancake.browser.support.JAVA()                               // Equivalent to navigator.javaEnabled()
pancake.browser.support.MPEG()                               // Returns if browser supports MPEG audio
pancake.browser.support.MP3()                                // Returns if browser supports MP3 audio
pancake.browser.support.WAV()                                // Returns if browser supports WAV audio
pancake.browser.support.OGG()                                // Returns if browser supports OGG audio
pancake.browser.support.FLAC()                               // Returns if browser supports FLAC audio
pancake.browser.support.AAC()                                // Returns if browser supports AAC audio
pancake.browser.support.AACP()                               // Returns if browser supports AACP audio
pancake.browser.support.CAF()                                // Returns if browser supports CAF (X-CAF) audio
pancake.browser.support.MP4()                                // Returns if browser supports MP4 video
pancake.browser.support.WEBM()                               // Returns if browser supports WEBM video
pancake.browser.open(url)                                    // Opens URL in browser
pancake.browser.supports(f)                                  // Checks if browser supports feature from above but as string name of feature
pancake.browser.is(str)                                      // Checks if userAgent contains string (Can be used to detect custom OS/Browser)
```

## `pancake.os`

```js
// Variables
pancake.os.iOS                                               // Returns if OS is iOS
pancake.os.ANDROID                                           // Returns if OS is Android
pancake.os.OSX                                               // Returns if OS is Mac OS X
pancake.os.WINDOWS                                           // Returns if OS is Microsoft Windows
pancake.os.WINDOWS_PHONE                                     // Returns if OS is Microsoft Windows Phone
pancake.os.LINUX                                             // Returns if OS is Linux
pancake.os.UBUNTU                                            // Returns if OS is Ubuntu
pancake.os.PLAYSTATION                                       // Returns if OS is a Sony PlayStation console
pancake.os.XBOX                                              // Returns if OS is a Microsoft XBOX console
pancake.os.BLACKBERRY                                        // Returns if OS is blackberry
pancake.os.CHROMECAST                                        // Returns if OS is Google Chromecast
pancake.os.CHROME_OS                                         // Returns if OS is Chrome OS
pancake.os.PS4                                               // Returns if OS is PlayStation 4 firmware
pancake.os.PSVITA                                            // Returns if OS is PlayStation Vita
pancake.os.XBOX_ONE                                          // Returns if OS is XBOX ONE firmware
pancake.os.XBOX_ONE_S                                        // Returns if OS is XBOX ONE S firmware
pancake.os.NINTENDO                                          // Returns if OS is Nintendo console
pancake.os.N3DS                                              // Returns if OS is Nintendo 3DS firmware
pancake.os.WII_U                                             // Returns if OS is Nintendo WiiU firmware
pancake.os.FIRE_TV                                           // Returns if OS is Amazon Fire TV OS
pancake.os.ROKU                                              // Returns if OS is Roku TV OS
pancake.os.ROKU_ULTRA                                        // Returns if OS is Roku Ultra TV OS
pancake.os.NEXUS_PLAYER                                      // Returns if OS is Google Nexus Player OS
pancake.os.MINIX_NEO_X5                                      // Returns if OS is Minix Neo-X5 TV OS
pancake.os.APPLE_TV                                          // Returns if OS is Apple TV OS
pancake.os.KINDLE                                            // Returns if OS is Amazon Kindle OS
pancake.os.is(str)                                           // Same as pancake.browser.is(str)
```

## `pancake.script`

```js
pancake.script.create(script_properties)                     // Creates script element with properties as object
pancake.script.loadSource(src, script_index)                 // Loads a script file with index
```

## `pancake.util`

```js
pancake.util.random(n)                                       // Returns random number between 1 and number n
pancake.util.randomBetween(a, b)                             // Returns random number between a and b
pancake.util.quote(s)                                        // Returns string s quoted
```

## `pancake.sprite`

```js
pancake.sprite.load(image_src, states, sprite_index)         // Loads sprite from image source with animations states/names and their sheet to index
pancake.sprite.draw(sprite_index, state, x, y, w, h)         // Draw sprite from index with sprite's animation state/name with x, y, width and height
pancake.sprite.pause(sprite_index, state)                    // Pause sprite from index with sprite's animation state/name
pancake.sprite.resume(sprite_index, state)                   // Resume sprite playing from index with sprite's animation state/name if paused
pancake.sprite.play(sprite_index, state)                     // Resumes/Plays sprite from index with sprite's animation state/name if paused
```

## `pancake.gif`

```js
pancake.gif.load(array_of_images_src, frametime, gif_index)   // Loads GIF using array of images sources to index, With duration of each frame change in milliseconds
pancake.gif.draw(gif_index, x, y, w, h)                       // Draws GIF from index with x, y, width and height
pancake.gif.pause(gif_index)                                  // Pauses GIF from index
pancake.gif.resume(gif_index)                                 // Resumes GIF playing from index if paused
pancake.gif.play(gif_index)                                   // Resumes/Plays GIF from index if paused
```

## `pancake.replay`

```js
pancake.replay.load(replay_index, start_frames_count, end_frames_count, duration, reversed, loop)  // Creates replay to index with frame number to start and frame number to end with duration of each frame and set to play reversed and looped
pancake.replay.save(replay_index, globals)                                                         // Records frames for replay from index with ability to add global variables in object
pancake.replay.frames(replay_index, frames_count)                                                  // Returns if frames of replay from index is frames_count
pancake.replay.play(replay_index)                                                                  // Runs replay from index
pancake.replay.pause(replay_index)                                                                 // Pauses replay from index
pancake.replay.resume(replay_index)                                                                // Resumes/Plays replay from index if paused
pancake.replay.clear(replay_index)                                                                 // Deletes all content of replay from index (Useful if you're recording a lot of array frames)
```

## `pancake.spritefont`

```js
pancake.spritefont.load(image_src, font_info, spritefont_index)                                      // Loads spritefont from image source with font info object to index
pancake.spritefont.draw(spritefont_index, text, x, y, size, spacing, color, color_alpha = 0.8)       // Draw text using spritefont from index with x and y, With size and spacing
```

## `pancake.xhr`

```js
pancake.xhr.get(url, content_to_send)                        // Does "GET" request with url and with content to send (Default content is null)
pancake.xhr.post(url, content_to_send, content_type)         // Does "POST" request with url and with content to send (Default content is null)
pancake.xhr.head(url, content_to_send)                       // Does "HEAD" request with url and with content to send (Default content is null)
pancake.xhr.abort(XMLHttpRequest)                            // Aborts a XMLHttpRequest
```

## Keyboard keys

```js
// Variables
pancake.input.key.A
pancake.input.key.B
pancake.input.key.C
pancake.input.key.D
pancake.input.key.E
pancake.input.key.F
pancake.input.key.G
pancake.input.key.H
pancake.input.key.I
pancake.input.key.J
pancake.input.key.K
pancake.input.key.L
pancake.input.key.M
pancake.input.key.N
pancake.input.key.O
pancake.input.key.P
pancake.input.key.Q
pancake.input.key.R
pancake.input.key.S
pancake.input.key.T
pancake.input.key.U
pancake.input.key.V
pancake.input.key.W
pancake.input.key.X
pancake.input.key.Y
pancake.input.key.Z
pancake.input.key.ZERO
pancake.input.key.ONE
pancake.input.key.TWO
pancake.input.key.THREE
pancake.input.key.FOUR
pancake.input.key.FIVE
pancake.input.key.SIX
pancake.input.key.SEVEN
pancake.input.key.EIGHT
pancake.input.key.NINE
pancake.input.key.UP
pancake.input.key.DOWN
pancake.input.key.LEFT
pancake.input.key.RIGHT
pancake.input.key.SPACE
pancake.input.key.TAB
pancake.input.key.SHIFT
pancake.input.key.CTRL
pancake.input.key.ALT
pancake.input.key.BACKSPACE
pancake.input.key.ENTER
pancake.input.key.OS
pancake.input.key.UNIDENTIFIED
pancake.input.key.HOME
pancake.input.key.PGUP
pancake.input.key.PGDN
pancake.input.key.CLEAR
pancake.input.key.DELETE
pancake.input.key.ESCAPE
pancake.input.key.INSERT
```

### TV Remote keys

```js
// Variables
pancake.input.tvkey.UP
pancake.input.tvkey.DOWN
pancake.input.tvkey.LEFT
pancake.input.tvkey.RIGHT
pancake.input.tvkey.CHANNEL_UP
pancake.input.tvkey.CHANNEL_DOWN
pancake.input.tvkey.CONTEXT
pancake.input.tvkey.RED
pancake.input.tvkey.GREEN
pancake.input.tvkey.YELLOW
pancake.input.tvkey.BLUE
pancake.input.tvkey.ENTER
pancake.input.tvkey.INFO
pancake.input.tvkey.ASPECT
pancake.input.tvkey.LASTVIEW
pancake.input.tvkey.ZERO
pancake.input.tvkey.ONE
pancake.input.tvkey.TWO
pancake.input.tvkey.THREE
pancake.input.tvkey.FOUR
pancake.input.tvkey.FIVE
pancake.input.tvkey.SIX
pancake.input.tvkey.SEVEN
pancake.input.tvkey.EIGHT
pancake.input.tvkey.NINE
pancake.input.tvkey.BACK
pancake.input.tvkey.RETURN
pancake.input.tvkey.PLAY
pancake.input.tvkey.PAUSE
pancake.input.tvkey.STOP
pancake.input.tvkey.RECORD
pancake.input.tvkey.FORWARD
pancake.input.tvkey.REWIND
pancake.input.tvkey.FAST_FORWARD
pancake.input.tvkey.REPLAY
```

## Gamepad and mouse buttons

```js
// Variables
pancake.input.button.LEFT_MOUSE_BUTTON
pancake.input.button.RIGHT_MOUSE_BUTTON
pancake.input.button.MIDDLE_MOUSE_BUTTON
pancake.input.button.A
pancake.input.button.B
pancake.input.button.XBOX_X
pancake.input.button.PLAYSTATION_X
pancake.input.button.Y
pancake.input.button.LB
pancake.input.button.RB
pancake.input.button.LT
pancake.input.button.RT
pancake.input.button.BACK
pancake.input.button.START
pancake.input.button.LEFT_ANALOG_STICK
pancake.input.button.RIGHT_ANALOG_STICK
pancake.input.button.UP
pancake.input.button.DOWN
pancake.input.button.LEFT
pancake.input.button.RIGHT
pancake.input.button.O
pancake.input.button.SQUARE
pancake.input.button.TRIANGLE
pancake.input.button.L1
pancake.input.button.R1
pancake.input.button.L2
pancake.input.button.R2
pancake.input.button.SELECT
```

## Arrays

```js
pancake.audio_files                                          // Audio files array
pancake.sprites                                              // Sprites array
pancake.sprite.timers                                        // Sprites timers array
pancake.scripts                                              // Scripts loaded array
pancake.canvases                                             // Canvases created array
pancake.contexts                                             // Contexts created array
pancake.videos                                               // Video files array
pancake.images                                               // Images array
pancake.replays                                              // Replays array
pancake.fonts                                                // Spritefonts array
pancake.gifs                                                 // GIFs array
pancake.sprites                                              // Sprites array
```

#### How to get content from index?

Here's example shows that:

```js
// Canvases
pancake.canvas.create(400, 400, 0);                          // Creates canvas
pancake.canvases[0];                                         // Returns canvas we created
pancake.canvas.resize(800, 800, 0);                          // Resizes canvas with index 0 (I mean pancake.canvases[0])
pancake.canvases[0].style.backgroundColor = "red";           // Sets background color of pancake.canvases[0] (Canvas we created) to red

// Contexts
pancake.canvas.create(400, 400, 0);

// REMEMBER: pancake.context.create(canvas_index, context_index)
pancake.context.create(0, 0);
pancake.contexts[0];                                           // Returns context of canvas we created
pancake.contexts[0] = pancake.canvases[0].getContext("webgl"); // That's it LOL

// Audio
pancake.audio.load("music.mp3", 0);                          // Loads audio file
pancake.audio_files[0];                                      // Returns music.mp3
pancake.audio.playFromIndex(0);                              // Plays pancake.audio_files[0]
pancake.audio_files[0].loop = true;                          // Used DOM JavaScript

```