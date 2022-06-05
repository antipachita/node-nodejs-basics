import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const parentWay = path.join(__dirname, 'files', 'script.js');
  const options = {
        stdio: [0, 1, 2, "ipc"]
  };
  const parametrs = [...args];
  
  const childProcess = fork(parentWay, parametrs, options);
  

};

spawnChildProcess([0, 1, 2, 3, 4, 5, 6, 7]);