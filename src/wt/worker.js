import { Worker, isMainThread, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';

// n should be received from main thread

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
// This function sends result of nthFibonacci computations to main thread

  const __filename = fileURLToPath(import.meta.url);
  let test = 15;
  if (isMainThread) {
    console.log(nthFibonacci(test))
  } else {
    parentPort.once('message', (value) => {
      parentPort.postMessage(nthFibonacci(value));
  });
    
  }
};

sendResult();