const { Writable } = require('stream');
const { spawn } = require('child_process');

const ffmpeg_static = require('ffmpeg-static');
const args = ['-f', 'mp3', '-i', 'pipe:0', '-acodec', 'libopus', '-f', 'webm', 'pipe:1'];

class WorkerStream extends Writable {

    constructor(port) {
        super({ autoDestroy: true });
        this.port = port;
    }

    write(data) {
        this.port.postMessage(data.buffer);
    }

}

module.exports = {
    get ffmpeg() {
        return spawn(ffmpeg_static, args);
    },
    WorkerStream
}