//Implicit Conversion

let res = '6' + true ;
console.log(res);
console.log(typeof(res));
// Note: When a number is added to a string, JavaScript converts the number to a string before concatenation.
 res = '5' + undefined ;  
console.log(res);
console.log(typeof(res));
res = '5' + null ;
console.log(res) ;
console.log(typeof(res));
res = '5' + '9';
console.log(res);
console.log(typeof(res));
res = '9' - 6 ;
console.log(res);
console.log(typeof(res));

// non numeric string implicit conversion  -- o/p is NaN (Not a Number)

res = 'hello' - 'world';
console.log(res)
console.log(typeof(res));

res = 4- 'hello';
console.log(res) ;

//Implicit boolean conversion to number
// Note: JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1.
res = 5 - true ;
console.log(res) ;
res = 7 + true ;
console.log(res) ;
res = 7 + false ;
console.log(res) ;
res = 5 - false ;
console.log(res) ;
// null conversion to number  , null value is considering as '0'
res = 2 + null ;
console.log(res);
res = 9 - null;
console.log(res);
// undefined conversion with number , boolean and null -->
// Arithmetic operation of undefined with number, boolean or null gives NaN
res = 4 + undefined ;
console.log(res); 
res = 4 - undefined ;
console.log(res);
res = true + undefined ;
console.log(res);
res = false + undefined ;
console.log(res);
res = true - undefined ;
console.log(res);
res = false - undefined ;
console.log(res);
res = true + null ;
console.log(res);          //  o/p is 1 because true value is 1
res = undefined + null;
console.log(res);

/*  EXPLICIT CONVERSION  */
/*  -------------------  */

// Conovert to number explicitly

res = Number("432") ;
console.log(typeof("432"));
console.log(res);
console.log(typeof(res));
res = Number('43e-1');
console.log(res);
res = Number(true);
console.log(res);
res = Number(false);
console.log(res);
res = Number(null);
console.log(res);          // 0
res = Number(undefined);
console.log(res);          // NaN 
// Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor().

res = parseInt('35.97');
console.log(res);
res = parseFloat('29.23');
console.log(res);
res = +'21.80'
console.log(res);
res = Math.floor('28.65');
console.log(res);
//  Convert to string
// Note: String() takes null and undefined and converts them to string. However, toString() gives error when null are passed.

res = String(4);    
console.log(res);               // 4
res = String(true);
console.log(res);               // true
res = String(null);
console.log(res);               //  null

res = (324).toString();  
console.log(res);                  // 324
res = true.toString();           
console.log(res);                  // true
res = null.toString();
console.log(res);               // err : can't read properties of null
res = undefined.toString();
console.log(res);               // err : can't read properties of undefined

//  Boolean conversion

res = Boolean('');             // false
console.log(res);
res = Boolean(true);
console.log(res);
res = Boolean(null);           // false
console.log(res);
res = Boolean(undefined);     // false
console.log(res);
res = Boolean(0);             //  false
console.log(res);
res = Boolean('Hello');
console.log(res);
res = Boolean(253);
console.log(res);
res = Boolean(NaN);
console.log(res);            //  false

//  Conver Date to Number
const  d1 = new Date();
console.log(d1);
const result = d1.getTime();
console.log(result);



