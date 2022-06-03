import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { stdout } from 'process';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const readfileWay = path.join(__dirname, 'files', 'fileToRead.txt');
  const readableStream = fs.createReadStream(readfileWay, 'utf8');
  let data = '';

  readableStream.on('data', chunk => data+=chunk);
  readableStream.on('end', () => console.log(data));
};

read();