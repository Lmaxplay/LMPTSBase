import * as chalk from 'chalk';
import Logger from './Modules/logger.js';
import { LogLevel } from './Modules/logger.js';
const colors = new chalk.Chalk();
const logging = new Logger(process.stdout, process.stdin);
// Start of actual code
logging.info("Hello world");
logging.log("Hello world");
logging.warn("Hello world");
logging.error("Hello world");
logging.log(LogLevel.INFO, "Hello");
// End Application
process.exit(1);
//# sourceMappingURL=app.js.map