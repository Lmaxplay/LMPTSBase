// Below are imports and such
import * as v8 from 'node:v8';
import * as os from 'node:os';
import * as path from 'node:path';
import * as fs from 'node:fs';
import * as chalk from 'chalk';
import * as child_processes from 'node:child_process';
import * as readlineModule from 'node:readline';
import * as marked from 'marked';
import * as Seven from 'node-7z';

import * as VM from 'vm2';

import Logger from './Modules/logger.js';
import { LogLevel } from './Modules/logger.js';

const vm = new VM.VM({"compiler": "javascript"});
const nodevm = new VM.NodeVM({});

const colors = new chalk.Chalk();

const logging = new Logger(process.stdout, process.stdin);

// Start of actual code

vm.setGlobal("logging", logging);

vm.run(`logging.log("Hello World")`);
try {
nodevm.run(`
const fs = require("fs");

console.log(fs.readdirSync("C:"));
`);
} catch(err: any) {
    if(logging instanceof String) {
        logging.log(err);
    }
}

// End Application

process.exit(0);