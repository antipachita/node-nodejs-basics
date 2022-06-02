import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const error = new TypeError('FS operation failed');
    const deleteFile = path.join(__dirname, 'files', 'fileToRemove.txt')
    try {
         await fs.unlink(deleteFile, function(err){
            if (err) {
              console.log(err);
            } else {
              console.log('Файл удалён');
            }
          });
    } catch(err) {
        console.log(error)
    }
};

remove()