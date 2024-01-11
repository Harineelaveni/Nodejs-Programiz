    /*    Single Input from the Keyboard  */
    /*    ------------------------------  */

/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});
*/


/*    Two INPUTS BY USINGN NODEJS     */ 
/*------------------------------------------*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
          var result = (+answer1) + (+answer2);
          console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});

/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
      // console.log(typeof(answer1));
        var result = (+answer1) + (+answer2);
       // console.log(typeof(+answer1));
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});    */
