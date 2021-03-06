// Below are imports and such
import * as v8 from 'node:v8';
import * as os from 'node:os';
import * as path from 'node:path';
import * as fs from 'node:fs';
import * as chalk from 'chalk';
import * as child_processes from 'node:child_process';
import * as readlineSync from 'readline-sync';
import * as marked from 'marked';

import Logger from './Modules/logger.js';
import { LogLevel } from './Modules/logger.js';

const colors = new chalk.Chalk();

const logging = new Logger(process.stdout, process.stdin);

// Start of actual code

/*var name = logging.in("Hi, what is ur name? ", false);
logging.log(`Hello ${name}!`);*/
logging.log("{date}, {message}");

// End Application

process.exit(0);