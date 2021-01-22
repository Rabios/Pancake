# Game Levels/Scenes creation

There is a lot of ways to do, Like this one:

```javascript
var current_game_level = 1;
var game = pancake.timers.timer(function() {
    if (current_game_level == 1) level_1();
    if (current_game_level == 2) level_2();
}, 120);

function level_1() {
    // Level 1
}

function level_2() {
    // Level 2
}
```

Or this one:

```javascript
var level = 0;
var levels = [];

levels[0] = function() {
    // Level 1
};

levels[1] = function() {
    // Level 2
};

var game = pancake.timers.timer(function() {
    // You can also use graphics clearing here if your game levels need it
    levels[level]();  // Run current scene
    // If you want, You can also do prevent input loop here instead of doing it in all levels
}, 120);
```