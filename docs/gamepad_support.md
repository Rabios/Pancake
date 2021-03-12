# Gamepad Support

Gamepad API is supported in major browsers (Except Internet Explorer), And supports most gamepads, Pancake uses Gamepad API for gamepad input on browsers, and `Windows.Gaming.Input` on UWP JavaScript!

### How to use?
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Pancake Gamepad</title>
    </head>
    <body>
        <script src="path/to/pancake.js"></script>
        <script>

            function game() {
                // Check if gamepad with index 0 (First gamepad) is connected
                if (pancake.input.gamepadConnected(0)) {

                    // Check if X button pressed on gamepad with index 0
                    // Works on both PS4/PS3 and XBOX gamepads
                    if (pancake.input.gamepadButtonPressed(0, pancake.input.button.XBOX_X) || 
                        pancake.input.gamepadButtonPressed(0, pancake.input.button.PLAYSTATION_X)) {

                        window.alert("Gamepad input works!!!");
                        console.info("Gamepad is working,WOW!!!");

                    }
                }

                // We need to prevent input loop when input gives true,Use this line below
                pancake.input.preventLoop();
            }

            var gameloop = pancake.timers.timer(game,120); // 120 frames per second
        </script>
    </body>
</html>
```

### UWP JavaScript

As of Pancake version `v0.0.14`, Pancake got improvements including working with native layers (NWJS, Electron, Phonegap, Cordova, WinJS, UWP JavaScript, ...)

Now gamepad input for UWP JavaScript supported by Pancake!

### IMPLEMENTATION NOTES

X gamepad button is the only gamepad button that has variants (XBOX's X button number is 2 and PlayStation's one is 0).