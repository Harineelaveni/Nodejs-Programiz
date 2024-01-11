/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (n1) => {
    rl.question('Please enter the second number : ', (n2) => {
        //var result = (+answer1) + (+answer2);
        var sn = n2;
            n2 = n1;
            n1 = sn;
        console.log(`After swap the first number is:  ${n1}`);
        console.log(` After swap the 2nd number is  : ${n2}`);
        rl.close();
    });
});                          */

            /*    WITHOUT TEMP VAR   */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (n1) => {
    rl.question('Please enter the second number : ', (n2) => {
            n1 =parseInt(n1) +parseInt(n2);
            console.log(n1)
            n2 = n1 - n2;
            console.log(n2)
            n1 = n1 - n2;
            console.log(n1);
        console.log(`After swap the first number is:  ${n1}`);
        console.log(` After swap the 2nd number is:   ${n2}`);
        rl.close();
    });
});     
