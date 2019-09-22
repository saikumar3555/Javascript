// creation of arrays
var array = [10,20,30,40,50];
console.log(array);

// Accessing an array and its properties
console.log(array[0]); // 10
console.log(array[4]); // 50

// Access not existed property from an array
console.log(array[100]); // undefined

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log('Length : ' + array.length);

// Reverse the array using reverse()
var technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);
console.log('---------------------------------------------------------------');

// Sort the array
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);
console.log('---------------------------------------------------------------');

// Remove the first value of the array: shift()
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);
console.log('---------------------------------------------------------------');

// Add value to front of the array:unshift()
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.unshift('Angular JS');
console.log(technologies);
console.log('---------------------------------------------------------------');

// Remove the last value of the array: pop()
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);
console.log('---------------------------------------------------------------');


// Add value the end of the array: push()
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.push('Angular JS');
console.log(technologies);
console.log('---------------------------------------------------------------');

// Remove an element from an Array , Arguments: colors.splice(pos,n):

// Splice(index)
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);
console.log('---------------------------------------------------------------');

// splice(index,noofElements)
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.splice(2,2);
console.log(technologies);
console.log('---------------------------------------------------------------');

// splice(index,1,replaceElement)
technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];
console.log(technologies);
technologies.splice(2,1,'Angular JS');
console.log(technologies);
console.log('---------------------------------------------------------------');


// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice();
arr1.splice(2);
console.log('Arr1 : ' + arr1);
console.log('Arr2 : ' + arr2);

// indexOf()
arr1 = [10,20,30,40,50];
var  value = 30;
if(arr1.indexOf(value) === -1){
    console.log('The ' + value + ' is not Exists');
}
else{
    console.log('The ' + value + ' is Exists @ index : ' + arr1.indexOf(value));
}

// Join()
arr1 = [10,20,30,40,50];
var strArray = arr1.join(' ABC ');
console.log(strArray);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

technologies = ['HTML' , 'CSS' , 'JAvaScript' , 'JQuery' , 'Bootstrap'];

// loop using Normal for-loop
var output = '';
for(var i = 0; i<technologies.length; i++){
   output += technologies[i].toUpperCase() + ' ';
}
console.log(output);

// for Each Loop
output = '';
technologies.forEach(function (element) {
    output += element.toUpperCase() + ' ';
});
console.log(output);

// for-in loop ES5
output = '';
for(var index in technologies){
    output += technologies[index].toUpperCase() + ' ';
}
console.log(output);

