const { spawn } = require('child_process');

const ffmpeg_static = require('ffmpeg-static');
const args = ['-i', 'pipe:0', '-acodec', 'libopus', '-f', 'webm', 'pipe:1'];

class ffmpeg {

    constructor(stream, force = true) {
        stream.once('close', () => this.process.stdin.destroy());
        this.process = spawn(ffmpeg_static, force ? ['-f', 'mp3'].concat(args) : args);
        this.process.stdout.pipe(stream);
    }

    write(data) {
        if (!this.process.stdin.writable) {
            return false;
        }

        this.process.stdin.write(data);
        return this.process.stdin.writable;
    }

    end() {
        this.process.stdin.end();
    }

}

module.exports = {
    ffmpeg
}