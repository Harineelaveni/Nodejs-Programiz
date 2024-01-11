const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`  Enter the number :`, num => {
    if (num == 0 || num ==1)
       {
        console.log(` The given number is Primenumber: ${num} `);
       }
    for ( i=2 ; i<=num; i++)
       {
        if ((num % i) == 0 )
        {
            console.log(` The given number is not prime Number: ${num}`);
        }
        else
            console.log(` The given number is Primenumber:  ${num}`);
      }
     
    readline.close();
  });