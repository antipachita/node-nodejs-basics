import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const error = new TypeError('FS operation failed');
    const renameFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    try {
        await fs.rename(renameFile, path.join(__dirname, 'files', 'properFilename.md'), (err) => {
            if (err) throw error;
            console.log('file was renamed');
        });
        
        
    }  catch(err) {
        console.log(error);
    }
   
};

rename()