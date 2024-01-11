const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter the value : `, num => {
   if (num > 0 )
   {
     console.log(`The given number  ${num}  is positive`);
   }
   else if  (num < 0)
   {
    console.log(`The given number ${num}is negative`);
   }
   else
   {
      console.log( `The given number is zero`);
   }
    readline.close();
  });