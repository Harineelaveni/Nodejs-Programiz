const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the Triangle Height : ', (height) => {
    rl.question('Enter the Triangle Base : ', (base) => {
        var result = parseFloat((height * base)/2);
        console.log(`The Area of the Triangle is :  ${result}`);
        rl.close();
    });
});