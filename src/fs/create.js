import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises } from "fs";


export const create = async () => {
  try{
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      const error = new TypeError('FS operation failed!');
      const pathFile = path.join(__dirname, 'files/fresh.txt');
      
    fs.access(pathFile, fs.F_OK, (err) => {
      if (!err) {
        console.log(error)
        return
      } else {
        fs.writeFile(pathFile, "I am fresh and young", (err) => {
          if(err) throw err;
          console.log('file has been crated!');
         
      });
      }
    })
  } catch(err) {
    console.log((err)); 
  }
};
create();

