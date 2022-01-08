import * as chalk from 'chalk';
import * as VM from 'vm2';
import Logger from './Modules/logger.js';
const vm = new VM.VM({ "compiler": "javascript" });
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
}
catch (err) {
    if (logging instanceof String) {
        logging.log(err);
    }
}
// End Application
process.exit(0);
//# sourceMappingURL=app.js.map