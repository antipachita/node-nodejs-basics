import http, { createServer as createServerHttp }  from 'http';
import { fileURLToPath } from 'url';
import path, { dirname, sep } from 'path';
import { release, version } from 'os';

import sayHi from './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const objA = path.join(__dirname, 'files,', 'a.json');
const objB = path.join(__dirname, 'files,', 'b.json');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = objA;
} else {
    unknownObject = objB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);
console.log(`UnknownObject - ${unknownObject}`);


// const createMyServer = createServerHttp((_, res) => {
//     res.end('Request accepted');
// });

const createMyServer = http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end('Request accepted');
    
  }).listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('listening port 3000')
    }
    process.exit();
  });;

 

export default {
    unknownObject,
    createMyServer,
  };
