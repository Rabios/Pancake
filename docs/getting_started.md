# Getting Started

## Offline

1. Check if you have installed Python.
2. Clone and build, Check README about building Pancake.
3. Create HTML file and link to `pancake.js` in the `build` folder of the repository.

> NOTES: Pancake is prebuilt, Rebuild it only in case you are modify source code or changing the renderer...

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Pancake starting</title>
    </head>
    <body>
        <script src="path/to/build/pancake.js"></script>
        <script>
            // Create canvas and set it's index to 0
            // With both width and height of 600
            pancake.canvas.create(600, 600, 0);

            // Create context and set it's index to 0
            // And use canvas with index 0
            // pancake.context.create(canvas_index, context_index);
            pancake.context.create(0, 0);

            // Then tell graphics to use context that have index 0
            pancake.graphics.useContext(0);
        </script>
    </body>
</html>
```

> NOTES: You can even copy `pancake.js` or `pancake.min.js` to anywhere for using as Pancake is single file library

1. Run the HTML file in the browser
2. Open "Developer Console"
3. If no errors given and just message "Powered by Pancake" and Pancake's version given, You're ready to make your games!!!
4. To determine what version of Pancake you use, Open Web Console and type `pancake.version`

## Online

1. Unminimifed

```html
<script src="https://cdn.jsdelivr.net/gh/Rabios/Pancake@master/build/pancake.js"></script>
```

2. Minimifed
```html
<script src="https://cdn.jsdelivr.net/gh/Rabios/Pancake@master/build/pancake.min.js"></script>
```

------

> If you're ready check [`graphics_01.html`](https://github.com/Rabios/Pancake/blob/master/examples/graphics_01.html) example from examples folder, It's great to get started, Then move on other examples.