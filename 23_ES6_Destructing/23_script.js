// Destructing From ES6
let employee = ['John' , 40, 'Manager'];

let eName = employee[0];
let eAge = employee[1];
let eDesg = employee[2];

// ES6
let student = ['Rajan' , 25 , 'Engineering'];
let [sName , sAge , sCourse] = student;
console.log(`Name : ${sName} Age : ${sAge} Course : ${sCourse}`);

// Destructing to swap two values
let a = 10;
let b = 20;
console.log(` Before : a : ${a} b : ${b}`);
[a , b] = [b , a];
console.log(` After : a : ${a} b : ${b}`);






