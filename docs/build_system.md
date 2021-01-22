# Building Pancake

The way of building Pancake has changed over a lot of versions, But improved to be better...

To build Pancake you require Python (Although you can use Pancake by linking to source files part-by-part)

### Customizing Build

When building Pancake, Python only builds Pancake with parts set in `modules.txt` and you can edit this file to bundle source files you need, This is very useful if your game doesn't depend on a lot of stuff...

You can also edit `build.py` to change build directory or build filename or even edit the full build system...

### Haxe port

Haxe port is all in single file, You can comment class (module) you don't need with commenting it's loader in `Pancake` class.

So Haxe won't include it!