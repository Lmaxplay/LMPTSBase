import * as chalk from 'chalk';
import * as VM from 'vm2';
import Logger from './Modules/logger.js';
const vm = new VM.VM({ "compiler": "javascript" });
const nodevm = new VM.NodeVM({});
const colors = new chalk.Chalk();
const logging = new Logger(process.stdout, process.stdin);
// Start of actual code
nodevm.runFile("./unsafe.js");
// End Application
process.exit(0);
//# sourceMappingURL=app.js.map