// Below are imports and such
import * as v8 from 'node:v8';
import * as os from 'node:os';
import * as path from 'node:path';
import * as fs from 'node:fs';
import * as chalk from 'chalk';
import * as child_processes from 'node:child_process';
import * as readlineModule from 'node:readline';

const readline = readlineModule.createInterface({
    input: process.stdin,
    output: process.stdout
})

const color = new chalk.Chalk();

// Start of actual code

console.log(color.greenBright("Hello world!"));

console.log("ok?");
console.log(process.geteuid());