import { Writable } from 'stream';
import { ChildProcess } from "child_process";

declare namespace StreamUtils {

    declare class ffmpeg {

        /**
         * The ChildProcess created for this wrapper
         */
        process: ChildProcess;

        /**
         * Creates a new ffmpeg wrapper instance
         * @param stream The output stream to write to
         * @param force Wheter to force ffmpeg's input as mp3
         */
        constructor(stream: Writable, force?: Boolean = true);

        /**
         * Writes data to ffmpeg
         * @param data The byte data to write
         * @returns The stdin writable status
         */
        write(data: Buffer): Boolean;

        /**
         * Ends the ffmpeg stdin
         */
        end(): void;

    }

}

export = StreamUtils;