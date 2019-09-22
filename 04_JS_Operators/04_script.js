// Assignment operator =
var empName = 'Naveen';
console.log('value : ' + empName + ' Type : ' + typeof empName);

// Arithmetic operators + - * / %
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log('Sum is : ' + sum);

var givenNumber = 11;
if(givenNumber % 2 === 0){
    console.log('The ' + givenNumber + ' is EVEN ');
}
else{
    console.log('The ' + givenNumber + ' is ODD ');
}

// Short hand math += , -= , *= , /=
var a = 10;
var b = 20;
var add = 0;
add = add + (a + b); // 0 + 10 + 20 = 30
add += (a + b); // 30 + 10 + 20 = 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !=
var time = 10;
if(time <= 12){
    console.log('Good Morning');
}
else if(time >= 13 && time <= 17){
    console.log('Good Afternoon');
}
else if(time >= 18 && time <= 24){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Time');
}


// Unary Operator ++ , --
var x = 10;
x = x + 1; // 11
x += 1; // 12
x++; // 13
console.log(x); // 13

var y = 10;
y = y - 1; // 9
y -= 1; // 8
y--; // 7
console.log(y); // 7

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait! until the parents Agreed');
}

// String Concatenation Operator (+)
var str = 10 + 20 + '20' + 10 + 20;
console.log(str);

var msg1 = 'Good';
var msg2 = 'Morning';
var greeting = msg1 + ' ' + msg2;
console.log(greeting);

// Ternary operator (? :)
var age = 25;
(age < 18)? console.log('You are Minor') : console.log('You Are Major');

// Typeof operator
var abc = 100;
console.log('value : ' + abc + ' Type : ' + typeof abc);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}