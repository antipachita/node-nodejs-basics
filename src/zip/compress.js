import fs from 'fs';
import zlib from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline} from 'stream';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt.gz'));
    const gzip  = zlib.createGzip();

    
    pipeline(
        readStream,
        gzip,
        writeStream,
        err => {
            if (err) {
                // обрабатываем ошибки
            }
        }
    );


};
compress();