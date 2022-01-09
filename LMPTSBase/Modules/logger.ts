import * as chalk from 'chalk';
import { time } from 'node:console';
import * as readlineSync from 'readline-sync';
import * as readline from 'node:readline';

const colors = new chalk.Chalk();

export enum LogLevel {
    INFO = 0,
    LOG = 1,
    WARN = 2,
    ERROR = 3
}

/**
 * Logger class, contains everything you need to log stuff to the console!
 */
export default class Logger {
    public output: NodeJS.WriteStream = process.stdout;
    public input: NodeJS.ReadStream = process.stdin;

    // TODO ADD DOCS

    public infoTemplate: string = colors.white("[{date}] ") + colors.white("[Info] ") + colors.white("{message}") + "\n";
    public logTemplate: string = colors.white("[{date}] ") + colors.green("[Log] ") + colors.green("{message}") + "\n";
    public warnTemplate: string = colors.white("[{date}] ") + colors.yellow("[WARN] ") + colors.yellow("{message}") + "\n";
    public errorTemplate: string = colors.white("[{date}] ") + colors.red("[ERROR] ") + colors.red("{message}") + "\n";
    public inputTemplate: string = /*colors.white("[{date}] ") + */colors.white("[Input] ");

    /**
     * Creates a new logger
     * @param output the output (infoging) handle, uses a NodeJS.WriteStream
     * @param input the input (getting messages) handle, uses a NodeJS.ReadStream
     */
    constructor(output: NodeJS.WriteStream = process.stdout, input: NodeJS.ReadStream = process.stdin) {
        this.output = output;
        this.input = input;
        return this;
    }

    /**
     * infos a message to the console
     * @param message the message to send
     */
    info(message: string): void;
    /**
     * Logs a message to the console with the specified level
     * @param level the level of the log (0 to 3)
     * @param message the message to send
     */
    info(level: LogLevel, message: string): void;

    info(param1: any, param2?: any) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.infoTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        } else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }

    /**
     * Logs a message to the console
     * @param message the message to send
     */
    log(message: string): void;
    /**
     * Logs a message to the console with the specified level
     * @param level the level of the log (0 to 3)
     * @param message the message to send
     */
    log(level: LogLevel, message: string): void;

    log(param1: any, param2?: any) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.logTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        } else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }

    /**
     * warns a warning to the console
     * @param message the message to send
     */
    warn(message: string): void;
    /**
     * Logs a message to the console with the specified level
     * @param level the level of the log (0 to 3)
     * @param message the message to send
     */
    warn(level: LogLevel, message: string): void;

    warn(param1: any, param2?: any) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.warnTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        } else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }

    /**
     * errors a erroring to the console
     * @param message the message to send
     */
    error(message: string): void;
    /**
     * Logs a message to the console with the specified level
     * @param level the level of the log (0 to 3)
     * @param message the message to send
     */
    error(level: LogLevel, message: string): void;

    error(param1: any, param2?: any) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.errorTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        } else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }

    /**
     * Logs a message to the console with the specified level
     * @param level the level of the log (0 to 3)
     * @param message the message to send
     */
    level(level: LogLevel, message: string): void {
        if (level === LogLevel.INFO) {
            this.info(message);
        } else if (level === LogLevel.LOG) {
            this.log(message);
        } else if (level === LogLevel.WARN) {
            this.warn(message);
        } else if (level === LogLevel.ERROR) {
            this.error(message);
        }
    }

    /**
     * Gets input from the console
     * @param message the message to include
     * @param includetemplate use template or just the message?
     * @returns console input
     */
    in(message: string, includetemplate: boolean = true): string {
        var date = new Date();
        if(includetemplate && message.length === 0) {
            return readlineSync.question(this.inputTemplate.replaceAll("{message}", message).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        } else {
            return readlineSync.question(message);
        }
    }

}