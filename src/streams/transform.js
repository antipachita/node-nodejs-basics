
import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';

export const transform = async () => {
  let transformation = new Transform({
    transform(data, enc, sen) {
        sen(null, `${data.toString().trim().split('').reverse().join('')}\n`);
    },
  });
  try {
    pipeline(stdin, transformation, stdout, (err) => {throw err});  
  } catch(err) {
    console.error('pipeline failed with error:', err);   
  } 
};

transform();