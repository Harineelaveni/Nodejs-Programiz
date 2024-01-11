//    Convert Celsisus to Fahrenheat °F = °C × (9/5) + 32

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter the temperature in Fahrenheat °C:  `, cels => {
       let fahr =parseFloat(((cels * 9)/5)+32);
       console.log(`${cels} °C in Fahrenheat is ${fahr} °F`)
    
    readline.close();
  });