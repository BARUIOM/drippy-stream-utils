const { spawn } = require('child_process');

const ffmpeg_static = require('ffmpeg-static');
const args = ['-f', 'mp3', '-i', 'pipe:0', '-acodec', 'libopus', '-f', 'webm', 'pipe:1'];

class ffmpeg {

    static create() {
        return spawn(ffmpeg_static, args);
    }

}

module.exports = {
    ffmpeg
}