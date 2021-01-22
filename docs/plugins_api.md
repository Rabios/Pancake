# Pancake Plugins API

> NOTE: Some of these plugins are experimental and might not work as intended, Issues are welcome to fix and improve them...

This is API of each plugin for Pancake, Enjoy!

- [Pancake Plugins API](#pancake-plugins-api)
  - [`pancake.wasm`](#pancakewasm)
  - [`pancake.clipboard`](#pancakeclipboard)
  - [`pancake.webxr`](#pancakewebxr)
  - [`pancake.webvr`](#pancakewebvr)
  - [`pancake.facebook`](#pancakefacebook)
  
## `pancake.wasm`

```js
// Variables

// Functions
pancake.wasm.execute(code, method)							 // Execute WASM code from array with method (default method is "main")
pancake.wasm.run(module, method, import_obj)				 // Run WASM module from file with method with imports object
pancake.wasm.table(init_elem_count, max_elem_count, elem)	 // Create new WASM table with initial and maximum elements count, And with type of element
pancake.wasm.get(table, index)				 				 // Get variable from WebAssembly.Table table with index
```

## `pancake.webxr`

```js
// Variables
pancake.webxr.update										 // WebXR update function
pancake.webxr.INLINE_MODE									 // WebXR mode "inline"
pancake.webxr.IMMERSIVE_VR_MODE								 // WebXR mode "immersive-vr"

// Functions
pancake.webxr.start(xr_mode, update_function)				 // Starts WebXR session with mode and function to use it!
pancake.webxr.end()											 // Ends WebXR session
pancake.webxr.update()										 // Updates WebXR session inside WebXR session update function
```

## `pancake.webvr`

```js
// Variables
pancake.webvr.left_eye											 // VR Display's left eye
pancake.webvr.right_eye											 // VR Display's right eye
pancake.webvr.update											 // VR Display update function

// Functions
pancake.webvr.init(display_index)								 // Initializes WebVR state with VRDisplay index (Default display index is 0)
pancake.webvr.start(webvr_gameloop_function, gameloop_function)	 // Starts WebVR display and switches game loop from function gameloop_function to function webvr_gameloop_function
pancake.webvr.end()												 // Ends WebVR display
```

## `pancake.clipboard`

```javascript
// Variables
pancake.clipboard.str										 // Text stored when you get it by pancake.clipboard.get()

// Functions
pancake.clipboard.copy(text)								 // Copy text to clipboard
pancake.clipboard.get()										 // Returns last text copied to clipboard
```

## `pancake.facebook`

```js
// Variables
pancake.facebook.name										 // Returns Facebook player name
pancake.facebook.id											 // Returns Facebook player ID
pancake.facebook.photo										 // Returns Facebool player photo as base64 image
pancake.facebook.os											 // Returns OS
pancake.facebook.sdkver										 // Returns FBInstant SDK version
pancake.facebook.version									 // Returns Same as previous
pancake.facebook.contextID									 // Returns ID of context
pancake.facebook.contextType								 // Returns context type
pancake.facebook.locale										 // Returns locale (Languages)

// Functions
pancake.facebook.postScore(score);							 // Posts score to leaderboard
pancake.facebook.exit();									 // Exits game
pancake.facebook.leaderboardName();							 // Returns current leaderboard name
pancake.facebook.setLoadingProgress(progress_percentage);	 // Sets game loading progress
```