import * as child_processes from 'node:child_process';

export default function runPython(fileName: string, callback?: (error: child_processes.ExecException, stdout: string, stderr: string) => void): child_processes.ChildProcess {
    return child_processes.exec("py -3.10 " + fileName, callback);
} 