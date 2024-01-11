const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(` Enter the Number: `, num => {
    if (num % 2 === 0)
     {
        console.log(`The given ${num} is Even Number`);
     }
     else 
     {
        console.log(`The given number ${num} is Odd Number   `);
     }
    readline.close();
  });