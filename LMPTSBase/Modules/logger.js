import * as chalk from 'chalk';
import * as readlineSync from 'readline-sync';
const colors = new chalk.Chalk();
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["INFO"] = 0] = "INFO";
    LogLevel[LogLevel["LOG"] = 1] = "LOG";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
/**
 * Logger class, contains everything you need to log stuff to the console!
 */
export default class Logger {
    /**
     * Creates a new logger
     * @param output the output (infoging) handle, uses a NodeJS.WriteStream
     * @param input the input (getting messages) handle, uses a NodeJS.ReadStream
     */
    constructor(output = process.stdout, input = process.stdin) {
        this.output = process.stdout;
        this.input = process.stdin;
        // TODO ADD DOCS
        this.infoTemplate = colors.white("[{date}] ") + colors.white("[Info] ") + colors.white("{message}") + "\n";
        this.logTemplate = colors.white("[{date}] ") + colors.green("[Log] ") + colors.green("{message}") + "\n";
        this.warnTemplate = colors.white("[{date}] ") + colors.yellow("[WARN] ") + colors.yellow("{message}") + "\n";
        this.errorTemplate = colors.white("[{date}] ") + colors.red("[ERROR] ") + colors.red("{message}") + "\n";
        this.inputTemplate = colors.white("[Input] ");
        this.output = output;
        this.input = input;
        return this;
    }
    info(param1, param2) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.infoTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        }
        else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }
    log(param1, param2) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.logTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        }
        else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }
    warn(param1, param2) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.warnTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        }
        else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }
    error(param1, param2) {
        if (param2 === undefined && typeof param1 == 'string') {
            var date = new Date();
            this.output.write(this.errorTemplate.replaceAll("{message}", param1).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        }
        else if (typeof param1 === 'number' && typeof param2 === 'string') {
            this.level(param1, param2);
        }
        return;
    }
    /**
     * Logs a message to the console with the specified level
     * @param level the level of the log (0 to 3)
     * @param message the message to send
     */
    level(level, message) {
        if (level === LogLevel.INFO) {
            this.info(message);
        }
        else if (level === LogLevel.LOG) {
            this.log(message);
        }
        else if (level === LogLevel.WARN) {
            this.warn(message);
        }
        else if (level === LogLevel.ERROR) {
            this.error(message);
        }
    }
    /**
     * Gets input from the console
     * @param message the message to include
     * @param includetemplate use template or just the message?
     * @returns console input
     */
    in(message, includetemplate = true) {
        var date = new Date();
        if (includetemplate && message.length === 0) {
            return readlineSync.question(this.inputTemplate.replaceAll("{message}", message).replaceAll("{date}", date.toTimeString().split(" ")[0]));
        }
        else {
            return readlineSync.question(message);
        }
    }
}
//# sourceMappingURL=logger.js.map