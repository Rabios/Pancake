# Mobile Support

At the meantime, Tapping and Accelerometer motion and Swiping is supported by pancake so you can develop games for mobile with ease...

## How to use?

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Pancake - Touch 'n Click</title>
    </head>
    <body>
        <p>Click or touch the canvas to see in action</p>
        <!-- This time,I set canvas background color using style attribute -->
        <canvas id="canvas" style="background-color: black;" width="400" height="400"></canvas>
        <script src="../build/pancake.js"></script>
        <script>
            // NOTES: If you see a bug or problem in touch,Please report in GitHub issues
            pancake.context.use(document.getElementById("canvas"), 0);

            function game() {
                // Clear
                pancake.graphics.clear();

                // If tapped or clicked on canvas
                if (pancake.input.tap || pancake.input.click) alert("Works!!!");
                
                // If swiped to up
                // Use "UP" or "DOWN" or "LEFT" or "RIGHT"
                // Touch is 0 (First touch finger)
                if (pancake.input.swipe("UP")) alert("Swiped up!!!");

                // This line below used to prevent input loop
                pancake.input.preventLoop();
            }

            var gameloop = pancake.timers.timer(game, 120);
        </script>
    </body>
</html>
```
## NOTES

1. If you're developing from mobile, Use Mozilla Firefox or Spck editor instead of Google Chrome cause Mozilla Firefox can allow file system, Plus i developed Pancake on Mozilla Firefox,NOT Google Chrome
2. Touch and Swipe emulated on PC with Mouse, But Accelerometer can't work on PC but it won't throw errors... 
3. If your game using swipe and you are running it via Google Chrome on mobile,See below to know before using swiping on Chrome
4. If you holded with your finger(s) for long time on screen/canvas, Game might not respond to touch input so you need to restart the entire game (Problem happens in most browsers on Android and iOS)

## Solve problem: Swiping down in Google Chrome for Android/iOS reloads page

1. Go to `chrome://flags`
2. Then search for "The pull-to-refresh effect", Set it to "disabled"
3. Then if they ask to restart Google Chrome, Restart it
4. That's all