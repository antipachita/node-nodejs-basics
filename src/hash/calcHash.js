import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  fs.readFile(filePath, (err, data) => {
    const hash = crypto.createHash('sha256');
    const hex = hash.update(data.toString()).digest('hex');
    console.log(hex);
  });
};

calculateHash();