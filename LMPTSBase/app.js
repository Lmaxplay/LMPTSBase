import * as chalk from 'chalk';
import Logger from './Modules/logger.js';
const colors = new chalk.Chalk();
const logging = new Logger(process.stdout, process.stdin);
// Start of actual code
var name = logging.in("Hi, what is ur name? ", false);
logging.log(`Hello ${name}!`);
logging.log("{date}, {message}");
// End Application
process.exit(0);
//# sourceMappingURL=app.js.map