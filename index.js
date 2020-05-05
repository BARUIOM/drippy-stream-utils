const { spawn } = require('child_process');

const ffmpeg_static = require('ffmpeg-static');
const args = ['-i', 'pipe:0', '-acodec', 'libopus', '-f', 'webm', 'pipe:1'];

class ffmpeg {

    static create(force = true) {
        return spawn(ffmpeg_static, force ? ['-f', 'mp3'].concat(args) : args);
    }

}

module.exports = {
    ffmpeg
}