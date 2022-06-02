import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const error = new TypeError('FS operation failed!!!');
    const pathDir = path.join(__dirname, 'files_copy');
    const originnalDir = path.join(__dirname, 'files');
    try{    
        await fs.stat(originnalDir, (err) => {
            if (err) throw error;
          });
        await fs.mkdir(pathDir, err => {
            if(err) throw error; // не удалось создать папку
          });
        const copies  = await fs.readdir(originnalDir, { withFileTypes: true });
       
        copies.forEach((copie) => {
            fs.copyFile(path.join(originnalDir, copie.name), path.join(pathDir, copie.name));
          });
        
    } catch(err) {
        console.log(error);
    }
};

copy();