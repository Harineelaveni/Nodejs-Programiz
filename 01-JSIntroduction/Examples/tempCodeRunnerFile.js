const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter the number `, n => {
    //console.log(`The square root of ${n} is : `);
    let res = Math.sqrt (n);
    console.log(`The square root of ${n} is :   `)
    readline.close();
  });