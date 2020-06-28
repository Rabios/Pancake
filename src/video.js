pancake.video = {};
pancake.videos = [];
var _video = undefined;

pancake.video.load = function(src, video_index) {
    pancake.videos[video_index] = document.createElement("video");
    pancake.videos[video_index].src = src;
    pancake.videos[video_index].autoplay = true;
    pancake.videos[video_index].load();
};

pancake.video.play = function(video_index) {
    if (!pancake.videos[video_index].ended) {
        pancake.graphics.image(pancake.videos[video_index], 0, 0, pancake.graphics.context.canvas.width, pancake.graphics.context.canvas.height);
        pancake.videos[video_index].play();
    }
};

pancake.video.pause = function(video_index) {
    pancake.videos[video_index].pause();
};

pancake.video.setVolume = function(volume, video_index) {
    pancake.videos[video_index].volume = volume;
};

pancake.video.setMute = function(mute, video_index) {
    pancake.videos[video_index].muted = mute;
};

pancake.video.setLoop = function(loop, video_index) {
    pancake.videos[video_index].loop = loop;
};