# Building Pancake

The way of building Pancake has changed over a lot of versions, But improved to be better...

To build Pancake you need Python (Although you can use Pancake by linking to source files part-by-part)

### Customizing Build

When building Pancake, Python only builds Pancake with parts set in `modules.txt` and you can edit this file to bundle source files you need, This is very useful if your game doesn't depend on a lot of stuff...

You can also edit `build.py` to change build directory or build filename or even edit the full build system...

### Haxe port

Haxe port is available on haxelib and GitHub, Use `haxelib install Pancake` to get it!

After that, in `build.hxml` of your project, Include modules by definitions, Like this:

```hx
--define PANCAKE_CANVAS2D
--define PANCAKE_GRAPHICS
--define PANCAKE_GAME
--define PANCAKE_TIMERS

-L Pancake
--class-path src
--dce full
--js bin/game.js
--main Main
```
