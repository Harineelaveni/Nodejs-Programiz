// Convert kilometer to miles 1km = 0.62137
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter the value for kilometer: `, km => {
    let mi = parseFloat(km * 0.62137) ;
    console.log(`  ${mi} miles are equal to ${km}  kilometers `)
    readline.close();
  });