/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', n1 => {
    rl.question('Please enter the second number : ', n2 => {
        rl.question('Please enter the third number : ', n3) => {    
            if( n1>n2 && n1>n3 )
            {
                console.log(` The largest number of ${n1} , ${n2}, ${n3}  is :  ${n1}`);
            }
            else if ( n2>n1 && n2>n3)
            {
                console.log(` The largest number of ${n1} , ${n2}, ${n3}  is :  ${n2}`);
            }
            else
                console.log(` The largest number of ${n1} , ${n2}, ${n3}  is :  ${n1}`);
       
        rl.close();
        }
    });
});                                                                                             */

let n1 = 25;
let n2 = 61;
let n3 = 61;
if ( n1>=n2 && n1>=n3)
{
    console.log(` The largest number of ${n1} , ${n2}, ${n3}  is :  ${n1}`);
}
else if ( n2>=n1 && n2>=n3)
{
    console.log(` The largest number of ${n1} , ${n2}, ${n3}  is :  ${n2}`);
}
else
    console.log(` The largest number of ${n1} , ${n2}, ${n3}  is :  ${n1}`);
