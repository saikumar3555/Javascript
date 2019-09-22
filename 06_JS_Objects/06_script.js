/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/

// Create an Object
var fridge = {};
console.log(fridge);

// add properties to an object
fridge.eggs = 20;
fridge.vegitables = 30;

console.log(fridge);

// Access th properties of an Object
console.log('Eggs : ' + fridge.eggs);

// Object Literal
var mobile = {
    company : 'Lenovo',
    color : 'black',
    RAM : '4GB',
    isInsured : false
};

console.log(mobile);

// Access the properties of an object Dot Notation
console.log('Company Name : ' + mobile.company);

// Access with [] Notation
console.log('Company Name : ' + mobile['company']);

// Non Existing prop of an object
console.log('Non-Existing : ' + mobile.price);

// Nested Object
var student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana'
    }
};

console.log(student.address);

// add prop to an obj
student.dob = 'JAN-1995';
console.log(student);

// Add prop to a nested Object
student.address.country = 'India';
console.log(student.address);

// Delete a prop of an Object
console.log(student);
delete student.address;
console.log(student);


// Function inside an Object
var actor = {
  firstName : 'Arjun',
  lastName : 'Reddy',
  fullName : function() {
      return this.firstName + ' ' + this.lastName;
  }
};

console.log(actor.fullName());



