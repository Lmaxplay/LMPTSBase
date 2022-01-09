import * as child_processes from 'node:child_process';
export default function runPython(fileName, callback) {
    return child_processes.exec("py -3.10 " + fileName, callback);
}
//# sourceMappingURL=python.js.map