/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// Simple Function
// function Definition
function greet() {
    console.log('Good Morning');
}
// function execution
greet();

// function with args
function greetArgs(name) {
    console.log('Good Morning ' + name);
}
greetArgs('John');

// function with less Args
function greetLessArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Old!');
}
greetLessArgs('John');

// Function with More Args
function greetMoreArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Old!');
}
greetLessArgs('John',40,'Manager');

// No function overloading concept

// function with Return statement
function greetReturn(name) {
    var  greeting = 'Good Morning ' + name;
    return greeting;
}
var greetMsg = greetReturn('Williams');
console.log(greetMsg);

// Function Expression
var greetFn = function(name) {
    console.log('Iam from function Expression ' + name);
};
greetFn('John');

// Normal function which takes a function as parameters
function greet1(name){
    console.log('Iam from greet 1 ' , name);
}
function greet2(name){
    console.log('Iam from greet 2 ' , name);
}
function greetCaller(fName,name) {
    fName(name);
}
greetCaller(greet1,'John');

// a Function expression which takes a function as a parameter
var greetFn1 = function(name) {
    console.log('Iam from greetFn1 ' , name);
};
var greetFn2 = function(name) {
    console.log('Iam from greetFn2 ' , name);
};
var greenFnCaller = function(fName,name) {
    fName(name);
};
greenFnCaller(greetFn2,'John');

// Functions inside an Object using this keyword
var car = {
    model : 'Rolls Royce',
    price : '9Cr',
    fuel : 'Diesel',
    color : 'Black',
    specification : function() {
          var spec = 'Model : ' + this.model + '\n' +
                     'Price : ' + this.price + '\n' +
                     'Fuel : ' + this.fuel + '\n' +
                     'Color : ' + this.color + '\n' ;
          return spec;
    }
};
var carSpec = car.specification();
console.log(carSpec);

// functions inside some other functions
function outerFn() {
    console.log('Iam from outerFn');

    function innerFn() {
        console.log('Iam from innerFn');
    }
    innerFn();
}
outerFn();

// Functions inside a nested Object
var student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        country : 'India'
    },
    isFromCity : function(city) {
        return this.address.city.toLowerCase().trim() === city.toLowerCase().trim();
    }
};

console.log('is From Hyd ? ' + student.isFromCity(' HyDeRaBad '));

