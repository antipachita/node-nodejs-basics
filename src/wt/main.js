import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import path from 'path';


export const performCalculations = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const __filePath = path.join(__dirname, 'worker.js');
  
  try {
    const workersArr = [];

    for (let i = 0; i < cpus().length; i++) {
      const worker = new Worker(__filePath);
      worker.postMessage(10 + i);
      // let p =  await new Promise((res, rej) => {
      //   worker.once('message', (value) => res(value));
      //   worker.on('error', (err) => rej(err));
      // });  
      workersArr.push(worker);
    }
  
    let resp = await Promise.allSettled(workersArr.map(worker => {
      return new Promise((res, rej) => {
      worker.once('message', (value) => res(value));
      worker.on('error', (err) => rej(err));
      });  
    }))
    
    const res =  resp.map(elem => {
      return elem.status === 'fulfilled'?{status:'resolved', data:elem.value}:{status:'error', data:null}
    });
      
      console.log(res);
    } catch (err) {
    console.log(err)
  }
    
};
performCalculations();