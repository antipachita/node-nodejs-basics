import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const writefileWay = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writeableStream = fs.createWriteStream(writefileWay, { flags: 'a' });
   
  console.log('Пожалуйста, введите текст');
  stdin.on('data', (data) => {
    writeableStream.write(data);
  });

  process.on('SIGINT', () => {
    console.log('Вы использовали команду выхода. До встречи!');
    process.exit(); 
  });
};

write();