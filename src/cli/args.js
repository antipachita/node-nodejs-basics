export const parseArgs = () => {
    const allArguments = process.argv.slice(2);
    const firstPart = [];
    const secondPart = [];
    
    for (let i = 0; i<allArguments.length; i++) {
        let str = allArguments[i].replace(/[-]/g, '');
        if (firstPart.length < 2) {
            firstPart.push(str);
        } else {
            secondPart.push(str);
        }
    }
    
    console.log(`${firstPart[0]} is ${firstPart[1]}, ${secondPart[0]} is ${secondPart[1]}`);
  };
  
  parseArgs();