//console.log("hello World");
//JavaScript Variables
//let num = 5;
//console.log (num);
/*let x= 5;
let y= 8 , z= 9;
console.log("X= ",x,", Y= ",y,", Z= ",z);
 x= 12;
 console.log("X= ",x,", Y= ",y,", Z= ",z);

 //Rules for Naming JavaScript Variables
let a='hello';
let _a ="hello";
let $a = 'hello';
console.log(a,  _a,  $a);
//let 1a ='halo';
let Y=21;
console.log("y= ",y,",Y= ", Y); 

//JavaScript Constants
const x;
 x=3;
console.log(x); 

const name = 'hari';
const name1 ='ram';
result = `The names are ${name} and  ${name1}`;
console.log(result);
console.log( 'The names are '+ name +' and  '+ name1);
console.log( 'The names are :${name},  and  ${name1}');

//javascript object

const student = {firstname : 'Rama', lastname : null, age :14};
console.log(student);       

// Javascript datatype
 
let data;
console.log(typeof(data));
data = 5;
console.log(typeof(data));
data = 'Javascript';
console.log(typeof(data)); 
const a = null;
console.log(a);
console.log(typeof(a));     

//JavaScript Arithmetic Operators

const numb = 4 + 7;
console.log(numb);
let x = 8;
let  y = 3;
console.log(' X+Y= ', x+y);
console.log(' X-Y= ', x-y);
console.log('x*y= ', x*y);
console.log('x/y= ', x/y);
console.log('x%y= ', x%y);
console.log('x**y= ', x**y);
console.log('++X = ', ++x);
console.log('X++ = ', x++);
console.log('X= ', x)
console.log('Y-- = ',y--);
console.log('--Y = ', --y);
console.log('x**y', x**y);       

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); 
// not equal operator
console.log(3 != 2); 
console.log('hello' != 'Hello'); 

// strict equal operator
console.log(2 === 2); 
console.log(2 === '2'); 

// strict not equal operator
console.log(2 !== '2'); 
console.log(2 !== 2); 

// logical AND
console.log(true && true); 
console.log(true && false); 

// logical OR
console.log(true || false); 

// logical NOT
console.log(!true); 

let a = 'Happy'
a += ' Friday'
console.log(a);  

let a = (5,6,8);
console.log(a);
 const kmdis = 5;
 const conrat = 0.621371;
 const mildis = kmdis * conrat;
 console.log( 'you covered ' + mildis + ' miles');     

let name = prompt( " Enter the Name : ");
let age = prompt("Enter the age of the candidate: ");
console.log( " Name : " + name);
console.log("Age : " + age);   
// string concatenation
let name = prompt( "Enter the Name : " );
let age = prompt( "Enter the age : " );
console.log( " Name is : " + name);
console.log( " Age is : " + age );
// Implicit string conversion
let abc ;
console.log(typeof(abc));
abc = '15' + 2;
console.log(abc);
console.log(typeof(abc));
abc = '15'+ undefined;
console.log(abc);
console.log(typeof(abc));
abc = '15'+ 'defined';
console.log(abc);
console.log(typeof(abc));
abc = '15'+ null;
console.log(abc);
console.log(typeof(abc));    
// implicit number conversion
let len ;
len = '8' - '3';
console.log(len);
console.log(typeof(len));
len = '8' - 3;
console.log(len);
console.log(typeof(len));
len = '8' * 3;
console.log(len);
console.log(typeof(len));
len = '8'% 3;
console.log(len);
console.log(typeof(len));
// Non numeric string 
let text;
console.log(typeof(text));
 text = 'hello' + 'world';
console.log(text);
console.log(typeof(text));
text = 4 - 'hello';
console.log(text);
console.log(typeof(text));
text = 'hello' - 6;
console.log(text);
console.log(typeof(text));
let def;
def = 4 + undefined;
console.log(def);
console.log(typeof(def));
def = true+ undefined;
console.log(def);
def = 5- undefined;
console.log(def);
// explicitly convert the number 
let rest;
rest = Number ('324');
console.log(rest);
rest = Number (true);
console.log(rest);
rest = Number (false);
console.log(rest);
rest = Number (null);
console.log(rest);
rest = Number (' ');
console.log(rest);
// Explicit number conversion
let res ;
res = parseInt('25.24');
console.log(res);
console.log(typeof(res));
res = parseFloat('52.68');
console.log(res);
console.log(typeof(res));
res= + '42.32';
console.log(res);
console.log(typeof(res));
res = Math.floor('25.64');
console.log(res);
console.log(typeof(res));
// convert to String Explicitly
let stg ;
stg = String(325);
console.log(stg);
console.log(typeof(stg));
stg = String(8+4);
console.log(stg);
console.log(typeof(stg));
stg = String(null);
console.log(stg);
console.log(typeof(stg));
stg = String(undefined);
console.log(stg);
console.log(typeof(stg));
stg = (254) + toString();
console.log(stg);
console.log(typeof(stg));      

// program to display the sum of natural numbers
let sum = 0;
let n =5;
//let n = prompt("Enter the value of n:")
for (let i = 1; i <= n; i++)
 {
    sum += i;  // sum = sum + i
 }
console.log('sum:', sum);
//
for (let i =1; i<=5; i++)
{
    console.log('JavaScript Practice');
    console.log(i);
}
const num = parseInt(prompt("Enter a Number:"));
for (let c = 1; c <= 10; c++)
{
    const p = num * c;
    console.log(`${num} * ${c} = ${p} ,`)
}
const stud = {name: "Monica", age:8, grade:3}
for ( let data in stud )
{
    console.log(`${data} => ${stud[data]}`)
}
const lang = "JavaScript";
for(let ch of lang)
{
    console.log(ch);
}
const n = prompt('Enter the value of n:');
for (let i =0; i <= n; i=i+2)
{
    console.log(i);
}
const stu = ["John","James","Jack"];
for (let data of stu)
{
    console.log(data);
}
const score = parseInt(prompt("Enter the Marks:"));
if (score>=50)
{
    console.log("Congratulations , you have passed ur exam")
}
// if-else-if
const score1 = parseInt(prompt("Enter the Marks:"));
if (score>=70)
{
    console.log("Congratulations , you have passed in First class");
}
else if (score1 >= 50 && score1 <70)
{
    console.log("Congratulations, You have passed in 2nd Class");
}
else if(score1 >=35 && score1 <50)
{
    console.log("Congratulations, You have passed in 3rd Class");
}
else
{
    console.log("Sorry, You failed your exam");
}                                                 
// whether the given no.is +ve or -ve
let n = parseInt(prompt("Enter the number:  "));
if (n>0)
 console.log("The given number is +ve");
 else if ( n == 0)
   {console.log("The given number is zero");
   }
   else
     console.log("The given number is -ve");       
    // while loop
    const n = parseInt(prompt("Enter the number: "));
    let c =1;
    while (c <= 10)
    {
        const p = n * c;
        console.log(`${n} * ${c} = ${p} `);
        c++;

    }                                                            
    // Using while condition the multi table from 10 to 1
    const n =7  ;  // parseInt(prompt("Enter the number: "));
    let c =10;
    while (c >= 1)
    {
        const p = n * c;
        console.log(`${n} * ${c} = ${p} `);
        c--;
    }
    //
    let sum = 0;
    let num = 0;
    while (num >= 0)
     {
        sum+=num;
        num = parseInt(prompt("Enter the number:  "));
        if (isNaN(num))
        {
            console.log('You entered a string')
            num = 0;
            continue;
        }
     }
     console.log(`The sum is ${sum}.`)
//  Number between 0 to 100. If -ve number enter the number again if >100 terminate loop

while (true)
{
    let num = parseInt(prompt("Enter the Number: "));
    if (num > 100)
    {
        console.log(" The given number is greaterthan 100  ");
        break;
    }
    if (num < 0 || num >= 10)
    {
        console.log("Enter the number again");
        continue;
    }
}

// Using Switch and displayed by month names 
let mon = parseInt(prompt("Enter the valid number between 1 and 12: "));
switch (mon)
{
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default :
        console.log("Invalid number")
}                                               
// FUNCTIONS
// program to find the square of a number
let n= parseInt(prompt("enter the value of n : "))
let x = function( n)
     { return n * n };
   console.log(x(n));
     y = x(n +2);
     console.log(y);                                       
//  write function for vote elligibitly
let age = parseInt(prompt("Enter the age of voter :  "));
function voter(age)
{ 
    if (age >= 18)
    {
        console.log(`${age} age person is elligible for voting`);
    }
    else
       console.log(`${age} person is not elligible for voting`);
}
    voter(age);
    //   voter(17);
        // voter(20);
        // voter(65);                                                                                             

// Fint the factorial of n
let n = parseInt(prompt("enter the value of n : "));
function print(n)
{
 if (n === 0 )
 {
     return 1;
 }
  else 
 {
         return n * print(n -1);
 }
}
if (n > 0)
{
 let fact = print (n);
     console.log(` The factorial of ${n} is ${fact} `);
}                                                                     
//  Create a student object and write a function with stud info & the 2nd fn is to find if the stud is passed or failed with his marks
//  if stud got >= 40 marks then stud is passed else failed
const stud = { 
    name:t("Enter th prompt("Enter the name : "), 
    rno : parseInt(prompe roll No: ")) ,
    tmarks : parseInt(prompt("Enter the total Marks : "))
    }
    console.log(`student Name is ${stud.name} and Student Roll No is ${stud.rno}`);
    if ( stud.tmarks >= 40)
    { 
        console.log(`${stud.name} is passed`);
    }
    else
        console.log(`${stud.name} is Failed `)                             
//  Accesssing method and property
        const person = {
            name: 'John',
            greet: function() { console.log('hello'); }
        };
        console.log(person.name); // John
        person.greet(); // hello                            */   
 // JavaScript Getter       
        const student = {
                    firstName: 'Monica',
                    get getName() {
                return this.firstName;
            }
        };
        console.log(student.firstName); 
        console.log(student.getName);
        // console.log(student.getName());  //getName is not a function

  // JavaScript Setter
       const stud = {firstName : 'Monica',
                      set changeName(newName) {  this.firstName = newName; }};
                      console.log(stud.firstName);
                      stud.changeName = 'Komal';
                      console.log(stud.firstName);