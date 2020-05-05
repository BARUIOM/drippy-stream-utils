import { ChildProcess } from "child_process";

declare namespace StreamUtils {

    declare class ffmpeg {

        /**
         * Creates a new instance of ffmpeg with default [audio/webm - codec opus] output
         */
        static create(force?: Boolean = true): ChildProcess;

    }

}

export = StreamUtils;