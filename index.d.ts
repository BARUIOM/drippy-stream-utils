import { Writable } from "stream";
import { ChildProcess } from "child_process";
import { MessagePort } from "worker_threads";

declare namespace StreamUtils {

    /**
     * The instance of ffmpeg with default [audio/webm - codec opus] output
     */
    var ffmpeg: ChildProcess;

    declare class WorkerStream extends Writable {

        /**
         * Creates a new Writable stream to be used with 'worker_threads'
         * @param port The worker's parent port
         */
        constructor(port: MessagePort);

        /**
         * Writes data to the worker's parent port
         * @param data The buffer data to be written
         */
        write(data: Buffer): void;

    }

}

export = StreamUtils;