import * as chalk from 'chalk';
import * as readlineModule from 'node:readline';
const readline = readlineModule.createInterface({
    input: process.stdin,
    output: process.stdout
});
const color = new chalk.Chalk();
// Start of actual code
console.log(color.greenBright("Hello world!"));
console.log("ok?");
console.log(process.geteuid());
//# sourceMappingURL=app.js.map