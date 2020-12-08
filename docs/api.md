# Pancake API
This is the official API page of Pancake,I know it's weird to believe how i fit all this in over 40kb

> NOTES: I recommend you see parameters meaning and what it accepts in the end of the API

- [Pancake API](#pancake-api)
  - [Canvas](#canvas)
  - [Context](#context)
  - [Graphics](#graphics)
  - [Input](#input)
  - [Physics](#physics)
  - [Audio](#audio)
  - [Video](#video)
  - [Timers](#timers)
  - [Storage](#storage)
  - [Content](#content)
  - [Device](#device)
  - [Game](#game)
  - [Browser](#browser)
  - [OS](#os)
  - [Debug](#debug)
  - [Scripting](#scripting)
  - [Utilities](#utilities)
  - [Sprite](#sprite)
  - [Arrays](#arrays)
      - [How to get content from index?](#how-to-get-content-from-index)
  - [Keyboard keys](#keyboard-keys)
  - [Gamepad and mouse buttons](#gamepad-and-mouse-buttons)
  - [Parameters reference](#parameters-reference)

## Canvas
```javascript
pancake.canvas.create(w, h, canvas_index)                      // Create canvas with width,Height,And index
pancake.canvas.resize(w, h, canvas_index)                      // Resize canvas that have index
pancake.canvas.setAttribute(attribute, value, canvas_index)    // Set HTML attribute value of canvas that have index
pancake.canvas.remove(canvas_index)                            // Remove canvas that have index
pancake.canvas.hide(canvas_index)                              // Hides canvas that have index
pancake.canvas.show(canvas_index)                              // Shows canvas that have index
pancake.canvas.set(canvas, canvas_index)                       // Sets (Or changes) index of a canvas
```

## Context
```javascript
pancake.context.create(canvas_index, context_index)            // Create context for canvas has index,And set index to context
pancake.context.use(canvas, context_index)                     // Create context with canvas not created by Pancake,And set index to context
pancake.context.set(context, context_index)                    // Set context has index to use context not created by Pancake
```

## Graphics
```javascript
// Variables
pancake.graphics.FILL                                         // Fill mode,To fill shapes
pancake.graphics.STROKE                                       // Stroke mode,To stroke shapes
pancake.graphics.BOTH                                         // Fill and stroke mode,To do both
pancake.graphics.ANTIALIASING_LOW                             // Low Antialiasing
pancake.graphics.ANTIALIASING_MEDIUM                          // Medium Antialiasing
pancake.graphics.ANTIALIASING_HIGH                            // High Antialiasing
pancake.graphics.context                                      // Default context used by canvas (Automatically set when build Pancake JavaScript library)
pancake.graphics.mode                                         // Graphics drawing shapes mode
pancake.graphics.context.canvas                               // Current canvas used by the context
pancake.graphics.antialias                                    // Variable of antialiasing, Set it to true/false to enable/disable it
pancake.graphics.ctx2d_enabled                                // Set it to false if you don't wish to use non-WebGL backend functions...
pancake.graphics.ctx2d                                        // CanvasRenderingContext2D context used by WebGLRenderingContext backend for some stuff that is undone with WebGL

// Functions
pancake.graphics.random.alpha()                               // Returns random alpha
pancake.graphics.random.RGB()                                 // Returns random RGB
pancake.graphics.random.RGBA()                                // Returns random RGBA
pancake.graphics.random.HSL()                                 // Returns random HSL
pancake.graphics.random.HSLA()                                // Returns random HSLA
pancake.graphics.fullscreen()                                 // Returns if game is in fullscreen mode
pancake.graphics.toggleFullscreen()                           // Toggle fullscreen
pancake.graphics.exitFullscreen()                             // Exit fullscreen
pancake.graphics.screenshot(canvas_index)                     // Takes screenshot of a canvas (You can ignore using canvas_index so it works on first canvas)
pancake.graphics.useContext(context_index)                    // Sets context for drawing
pancake.graphics.setAlpha(a)                                  // Sets alpha
pancake.graphics.RGB(r, g, b)                                 // Returns RGB color
pancake.graphics.RGBA(r, g, b, a)                             // Returns RGBA color
pancake.graphics.HSL(h, s, l)                                 // Returns HSL color
pancake.graphics.HSLA(h, s, l, a)                             // Returns HSLA color
pancake.graphics.color(fill, stroke)                          // Sets fill and stroke color (You can ignore stroke if you don't want to draw lines)
pancake.graphics.setBackgroundColor(color)                    // Sets background color
pancake.graphics.setBackgroundImage(src)                      // Sets background image
pancake.graphics.setFont(font_name, font_size)                // Sets font
pancake.graphics.setTextAlignment(textAlign)                  // Sets text alignment
pancake.graphics.setLineWidth(line_width)                     // Sets line width
pancake.graphics.clear()                                      // Clear canvas
pancake.graphics.text(text, x, y)                             // Draw text
pancake.graphics.rect(x, y, w, h)                             // Draw rectangle
pancake.graphics.roundedRect(x, y, w, h, r)                   // Draw rounded rectangle
pancake.graphics.circle(x, y, r)                              // Draw circle
pancake.graphics.ellipse(x, y, radius_x, radius_y, start_angle, end_angle, anticlockwise)     // Draw ellipse
pancake.graphics.line(x1, y1, x2, y2, line_width)             // Draw line
pancake.graphics.triangle(x1, y1, x2, y2, x3, y3)             // Draw triangle
pancake.graphics.polygon(points)                              // Draw polygon
pancake.graphics.loadImage(src, image_index)                  // Load image to index
pancake.graphics.image(image, x, y, w, h)                     // Draw image
pancake.graphics.imageFromIndex(image_index, x, y, w, h)      // Draw image from pancake.images array with index  
pancake.graphics.loadImageFromDocument(element, image_index)  // Load image from HTML <img> tag
pancake.graphics.useFilters(filters_names_array, filters_values_array)  // Use filters
pancake.graphics.addFilter(filter, value)                     // Add filter
pancake.graphics.clearFilters()                               // Clear all filters
pancake.graphics.erase(x, y, w, h)                            // Clear rect
pancake.graphics.square(x, y, size)                           // Draw square
pancake.graphics.pixel(x, y)                                  // Draw pixel
pancake.graphics.point(x, y)                                  // Draw point
pancake.graphics.gradientRect(x, y, w, h, content)            // Draw gradient
pancake.graphics.grid(size)                                   // Draw a grid
pancake.graphics.setAntialiasing(enable, quality)             // Sets Antialiasing (Works on images only)
pancake.graphics.setContext(context, context_index)           // Sets context or add it to index
pancake.graphics.translate(x, y)                              // Translate
pancake.graphics.scale(x, y)                                  // Scale
pancake.graphics.rotate(a)                                    // Rotate
pancake.graphics.rotate(x, y)                                 // Rotate (WebGL version)
pancake.graphics.save()                                       // Save
pancake.graphics.restore()                                    // Restore
pancake.graphics.shadow(color, blur)                          // Set shadow color and blur (Blur value is number,Not string and without px)
```

## Input
```javascript
// Variables
pancake.input.latest_key_down                                 // Returns latest key down
pancake.input.latest_key_up                                   // Returns latest key up
pancake.input.latest_key_pressed                              // Returns latest key pressed
pancake.input.latest_mouse_button_down                        // Returns latest mouse button down
pancake.input.latest_mouse_button_up                          // Returns latest mouse button up
pancake.input.click                                           // Returns if clicked on canvas
pancake.input.tap                                             // Returns if tapped on canvas
pancake.input.touchdown                                       // Returns if touch hold on canvas (Still hold)
pancake.input.mouse_x                                         // Mouse X position
pancake.input.mouse_y                                         // Mouse Y position
pancake.input.touch_x                                         // Touch X position
pancake.input.touch_y                                         // Touch Y position
pancake.input.HORIZONTAL_SWIPE_DIRECTION                      // Returns horizontal touch swipe direction when swiping
pancake.input.VERTICAL_SWIPE_DIRECTION                        // Returns vertical touch swipe direction when swiping
pancake.input.GAMEPAD_MOVE_HORIZONTAL_DIRECTION               // Returns gamepad horizontal move analog direction
pancake.input.GAMEPAD_MOVE_VERTICAL_DIRECTION                 // Returns gamepad vertical move analog direction
pancake.input.GAMEPAD_CAMERA_HORIZONTAL_DIRECTION             // Returns gamepad horizontal camera analog direction
pancake.input.GAMEPAD_CAMERA_VERTICAL_DIRECTION               // Returns gamepad vertical camera analog direction

// Gamepad analog directions
pancake.input.GAMEPAD_ANALOG_UP                               // Gamepad analog up direction
pancake.input.GAMEPAD_ANALOG_DOWN                             // Gamepad analog down direction
pancake.input.GAMEPAD_ANALOG_LEFT                             // Gamepad analog left direction
pancake.input.GAMEPAD_ANALOG_RIGHT                            // Gamepad analog right direction

// Analogs
pancake.input.GAMEPAD_MOVE_ANALOG                             // Gamepad move analog
pancake.input.GAMEPAD_CAMERA_ANALOG                           // Gamepad camera analog

// Functions
pancake.input.mousedown(mouse_button)                         // Returns if mouse button down
pancake.input.mouseup(mouse_button)                           // Returns if mouse button up
pancake.input.swipe(direction)                                // Returns if swiped in direction
pancake.input.keydown(key)                                    // Returns if keyboard key down
pancake.input.keyup(key)                                      // Returns if keyboard key up
pancake.input.keypress(key)                                   // Returns if keyboard key press
pancake.input.hideCursor(canvas_index)                        // Hides cursor
pancake.input.showCursor(canvas_index)                        // Shows cursor
pancake.input.lockPointer()                                   // Locks pointer in current canvas (If toggled fullscreen)
pancake.input.unlockPointer()                                 // Unlocks pointer
pancake.input.gamepadConnected(gamepad_index)                 // Returns if gamepad connected
pancake.input.gamepadID(gamepad_index)                        // Returns gamepad ID if connected
pancake.input.gamepadButtonPressed(gamepad_button, gamepad_index)  // Returns if gamepad button pressed
pancake.input.gamepadButtonTouched(gamepad_button, gamepad_index)  // Returns if gamepad button touched
pancake.input.gamepadAnalogMoved(gamepad_index, gamepad_analog, gamepad_direction, direction)  // Returns if gamepad analog moved
pancake.input.preventLoop()                                   // Prevents input loop
```

## Physics
```javascript
// Variables
pancake.physics.distance_x                                         // Returns last stored distance between first x of position and second x of position
pancake.physics.distance_y                                         // Returns last stored distance between first y of position and second y of position

// Functions
pancake.physics.checkCollisionRect(x1, y1, w1, h1, x2, y2, w2, h2) // Checks collision between rectangles
pancake.physics.checkCollisionCircle(x1, y1, r1, x2, y2, r2)       // Checks collision between circles
pancake.physics.checkCollisionCircleRect(x1, y1, r, x2, y2, w, h)  // Checks collision between circle and rectangle
pancake.physics.checkCollisionCircleLine(x, y, r, line_from_x, line_from_y, line_to_x, line_to_y)  // Checks collision between circle and line
pancake.physics.checkCollisionLeftCanvas(shape)                    // Checks collision between circle/rectangle and canvas left side
pancake.physics.checkCollisionRightCanvas(shape, canvas_index)     // Checks collision between circle/rectangle and canvas right side
pancake.physics.checkCollisionTopCanvas(shape)                     // Checks collision between circle/rectangle and canvas top side
pancake.physics.checkCollisionBottomCanvas(shape, canvas_index)    // Checks collision between circle/rectangle and canvas bottom side
pancake.physics.distanceBetween(x1, y1, x2, y2)                    // Returns distance between first coordinates and second coordinates
pancake.physics.getDistance(x1, y1, x2, y2)                        // Stores distance between 2 coordinates in pancake.physics.distance_x and pancake.physics.distance_y
```

## Audio
```javascript
pancake.audio.play(src)                                      // Plays audio file directly
pancake.audio.load(src, audio_index)                         // Loads audio file to index from source
pancake.audio.playFromIndex(audio_index)                     // Plays audio file from index
pancake.audio.pauseFromIndex(audio_index)                    // Pauses audio file playing from index
pancake.audio.setVolumeFromIndex(volume, audio_index)        // Sets volume of audio file from index
pancake.audio.setMuteFromIndex(mute, audio_index)            // Mutes or unmutes audio file from index
pancake.audio.setLoopFromIndex(loop, audio_index)            // Loops or not to loop audio file from index
pancake.audio.finishedPlayingFromIndex(audio_index)          // Returns if audio file from index finished playing
```

## Video
```javascript
pancake.video.load(src, video_index)                         // Loads video to index
pancake.video.play(video_index, x, y, w, h)                  // Plays video from index (Note that you can ignore x, y, w, h And just use video_index)
pancake.video.pause(video_index)                             // Pauses video from index
pancake.video.setVolume(volume, video_index)                 // Sets volume of video from index
pancake.video.setMute(mute, video_index)                     // Mutes or unmutes video from index
pancake.video.setLoop(loop, video_index)                     // Loops or not to loop video from index
pancake.video.finished(video_index)                          // Returns if video from index has finished playing
```

## Timers
```javascript
// Functions
pancake.timers.countdown(f, ms)                              // Sets countdown then run function (Countdown in milliseconds)
pancake.timers.timer(f, frames_per_second)                   // Sets interval then run function (frames per second integer from 0 to any)
pancake.timers.pause(timer_variable)                         // Pauses countdown or interval
window.animate(f, frames_per_second)                         // Improved version of window.requestAnimationFrame(), With framerate
```

## Storage
```javascript
pancake.storage.save(variable, value)                        // Saves a variable to localStorage with value
pancake.storage.load(variable)                               // Loads a variable from localStorage
pancake.storage.remove(variable)                             // Removes a variable from localStorage
pancake.storage.clear()                                      // Clears localStorage and all variables saved/stored
```

## Content
```javascript
pancake.content.load(json)                                   // Returns object contains JSON parsed content(string) from a variable
```

## Device
```javascript
// Variables
pancake.device.screen_width                                  // Returns device screen width
pancake.device.screen_height                                 // Returns device screen height

// Functions
pancake.device.vibrate(pattern)                              // Vibrate according to pattern
pancake.device.stopVibrating()                               // Stops vibrating
```

## Game
```javascript
pancake.game.title(title)                                    // Changes game title document
pancake.game.restart()                                       // Reloads game page
pancake.game.close()                                         // Closes game (If could,In case game opened by script,Or with phonegab or cordova)
```

## Browser
```javascript
// Variables
pancake.browser.CHROME                                       // Returns if browser is Google Chrome
pancake.browser.FIREFOX                                      // Returns if browser is Mozilla Firefox
pancake.browser.SAFARI                                       // Returns if browser is Apple Safari
pancake.browser.OPERA                                        // Returns if browser is Opera
pancake.browser.EDGE                                         // Returns if browser is Microsoft Edge
pancake.browser.IE                                           // Returns if browser is Internet Explorer
pancake.browser.SAMSUNG_INTERNET                             // Returns if browser is Samsung Internet Browser
pancake.browser.MAXTHON                                      // Returns if browser is Maxthon


// Functions
pancake.browser.support.WEBGL()                              // Returns if browser supports Canvas and WebGLRenderingContext
pancake.browser.support.CANVAS()                             // Returns if browser supports Canvas and CanvasRenderingContext2D
pancake.browser.support.MPEG()                               // Returns if browser supports MPEG audio files
pancake.browser.support.MP3()                                // Returns if browser supports MP3 audio files
pancake.browser.support.WAV()                                // Returns if browser supports WAV audio files
pancake.browser.support.OGG()                                // Returns if browser supports OGG audio files
pancake.browser.support.MP4()                                // Returns if browser supports MP4 video files
pancake.browser.support.WEBM()                               // Returns if browser supports WEBM video files
pancake.browser.support.GAMEPAD()                            // Returns if browser supports Gamepad API
pancake.browser.open(url)                                    // Opens URL in browser
pancake.browser.supports(f)                                  // Checks if browser supports feature from above but as string name of feature f
```

## OS
```javascript
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
```

## Debug
```javascript
pancake.debug.unknown(variable)                              // Returns if variable is undefined or null,Or NaN
pancake.debug.redefine(variable, value)                      // Changes variable value and redefine it if value was undefined or null,Or NaN
pancake.debug.type(variable)                                 // Gets type of the variable
```

## Scripting
```javascript
pancake.script.eval(code)                                    // Evaluate a JavaScript code
pancake.script.load(src, script_index)                       // Loads a script file with index
```

## Utilities
```javascript
pancake.util.random(n)                                       // Returns random number between 1 and number n
pancake.util.randomBetween(a, b)                             // Returns random number between a and b
pancake.util.quote(s)                                        // Returns string s quoted
```

## Sprite
```javascript
pancake.sprite.create(images_array, sprite_index)            // Loads a sprite to index
pancake.sprite.get(sprite_index)                             // Gets a sprite from index
```

## Arrays
```javascript
pancake.audio_files                                          // Audio files array
pancake.sprites                                              // Sprites array
pancake.sprite.timers                                        // Sprites timers array
pancake.scripts                                              // Scripts loaded array
pancake.canvases                                             // Canvases created array
pancake.contexts                                             // Contexts created array
pancake.videos                                               // Video files array
```

#### How to get content from index?
Here's example shows that
```javascript
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

// Sprites
pancake.sprite.create([ "sprite0_01.png", "sprite0_02.png", "sprite0_03.png" ], 0); // Loads cutted sprite images from spritesheet and set index to 0
pancake.sprite.get(0);                                       // Return sprite with index 0
pancake.sprite.get(0)[0];                                    // Gets first image of sprite that have index 0
pancake.sprites[0](0);                                       // Another way to do same as line above
pancake.sprite.timers[0];                                    // Gets timer of the sprite that have index 0,Timer is 0 but increase it in game loop and check if equals pancake.timers.second (to count 1 second then reset timer to 0)

// Scripts
pancake.script.load("script.js", 0);                         // Loads script to index 0
pancake.scripts[0].async = true;                             // Gets script with index 0 and set async to true
```

## Keyboard keys

> NOTES: If you're advanced in JavaScript,You can still use `KeyboardEvent.keyCode` (keyboard keycodes)

```javascript
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

## Gamepad and mouse buttons

> NOTE 1: You can use `MouseEvent.button` values instead if you know about it

> NOTE 2: You can use `GamepadEvent.buttons` array indexes instead if you know about it

```javascript
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

## Parameters reference
```javascript
// Positions and size
x, x1, x2                                                // X position (0 - any)
y, y1, y2                                                // Y position (0 - any)
w                                                        // Width (0 - any)
h                                                        // Height (0 - any)
r                                                        // Radius (0 - any)
radius_x                                                 // Radius X for ellipses (0 - any)
radius_y                                                 // Radius Y for ellipses (0 - any)

// Colors
color                                                    // A string contains color name
r                                                        // Red (0 - 255)
g                                                        // Green (0 - 255)
b                                                        // Blue (0 - 255)
h                                                        // Hue (0 - 360)
s                                                        // Saturation (0% - 100%)
l                                                        // Lightness (0% - 100%)
a                                                        // Alpha (0 - 1.0)

// Indexes
image_index                                              // Index of image from array
sprite_index                                             // Index of sprite from pancake.sprites array
images_array                                             // Array of images sources (To create sprite)
script_index                                             // Index of JavaScript file from pancake.scripts array
context_index                                            // Index of context from pancake.contexts array
gamepad_index                                            // Index of gamepad
canvas_index                                             // Index of the canvas from pancake.canvases array
video_index                                              // Index of video file from pancake.videos array
audio_index                                              // Index of audio file from pancake.audio_files array

// Booleans
mute                                                     // true or false to mute audio or else
loop                                                     // true or false to loop audio or else
enable                                                   // true or false to enable Antialiasing or else
anticlockwise                                            // true or false to draw ellipses anticlockwise or else


// Audio
volume                                                   // Volume of the audio to set (0 0 - 1.0)

// Input
gamepad_button                                           // Gamepad button code, If you're beginner see above about buttons
gamepad_analog                                           // Gamepad analog, 1 for move and 2 for camera (See above info about input)
gamepad_direction                                        // Gamepad analog direction,See above for gamepad directions
mouse_button                                             // Mouse buttons,See above about buttons
key                                                      // Keyboard key,See keys above
direction                                                // Takes "UP" or "DOWN" or "LEFT" or "RIGHT"

// Timers
f                                                        // Function
ms                                                       // Milliseconds
frames_per_second                                        // Frames per second for timer
timer_variable                                           // Timer which is a variable has value pancake.timers.timer() or pancake.timers.countdown()

// Graphics
line_width                                               // Line width (0 - any)
font_name                                                // Font name (string)
font_size                                                // Font size (0 - any)
a, alpha                                                 // Alpha (0 - 1.0)
filters_names_array                                      // Array containing CSS filters names
filters_values_array                                     // Array containing CSS filters values
content                                                  // Gradient array content
filter                                                   // Filter name (string)
value                                                    // Filter value (string CSS value)
context                                                  // The context to manipulate it
quality                                                  // The quality of the Antialiasing to set (See graphics variables in graphics section)
text_align                                               // Text align ("left", "right", "center", "none")
element                                                  // Image element
start_angle                                              // Start angle for ellipses (0 - any)
end_angle                                                // End angle for ellipses (0 - any)
text                                                     // String contains text

// Storage
variable                                                 // Variable we want to store but name is string
value                                                    // Value of the variable we want to store,It's stored and value as string but use Number() function to store your number
// NOTES: When loading variable to get value,Use Number() and load value function inside so it won't return string

// Sources
code                                                     // String contains JavaScript code
src                                                      // Source of file (as string of course)

// Other
shape                                                   // Physics shape,Array containing shape x, y, width and height (or radius),speedX and speedY (speed are only for circles)
title                                                   // String to set game document title

// Attribute of canvas                                            
attribute                                               // HTML DOM attribute (From JavaScript)
value                                                   // HTML DOM attribute value to set
```
