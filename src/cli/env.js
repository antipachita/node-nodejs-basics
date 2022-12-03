import { env } from 'process';


export const parseEnv = () => {
    const result = [];
    process.env.RSS_name1 = 'value1';
    process.env.RSS_name2 = 'value2';
    process.env.RSS_name3 = 'value3';
    for (const obj in env) {
        // console.log(obj.slice(0,4))
      if (obj.slice(0,4) == 'RSS_') {
        result.push(obj+'='+env[obj]);
      }
    }
  
    console.log(result.join('; '));
  };
  
  parseEnv();