// Spread Operator in ES6

// Pass the array elements to another function as parameters
let numbers = [564,698,11,9816,1,4351,69,1,0,1,34,64,6,61];
let max = Math.max(...numbers);
console.log(`Max : ${max}`);

// add an array in the middle of another array
let array1 = [30,40,50];
let array2 = [10,20,...array1,60,70,80];
let array3 = [...array2,90,100];
console.log(array3);

// To Create a New Copy of an Array
let arr1 = [10,20,30,40,50];
let arr2 = arr1.slice(); // ES5

arr2 = [...arr1];
console.log(`arr2 : ${arr2}`);