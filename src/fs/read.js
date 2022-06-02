import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const error = new TypeError('FS operation failed');
    const way =  path.resolve(__dirname, './files', 'fileToRead.txt');

    try {
        let result = await fs.readFile(way, function (error, chunk) {
            if (error) console.log(error); 
            
        });
        console.log(result.toString());
    }
    catch (err) {
        console.log(error);
    }
};

read();