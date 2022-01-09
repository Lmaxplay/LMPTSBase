import * as chalk from 'chalk';
import * as child_processes from 'node:child_process';
import Logger from './Modules/logger.js';
const colors = new chalk.Chalk();
const logging = new Logger(process.stdout, process.stdin);
// Start of actual code
/*var name = logging.in("Hi, what is ur name? ", false);

logging.log(`Hello ${name}!`);*/
var child = child_processes.exec("py -3.10 app.py", (error, stdout, stderr) => {
    logging.log(stdout);
});
// End Application
// process.exit(0);
//# sourceMappingURL=app.js.map