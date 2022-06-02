import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const error = new TypeError('FS operation failed');
    const dirFile = path.join(__dirname, 'files');
    try {
        const files = await fs.readdir(dirFile, {withFileTypes: true}, function(err, items){});
        
         for (let i=0; i<files.length; i++) {
            if (files[i].isFile() === true) {
                console.log(files[i].name) 
            }
        }
    }   
    catch(err) {
        console.log(error);
    }
};

list()