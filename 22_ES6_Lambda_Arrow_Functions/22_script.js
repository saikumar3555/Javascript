// Arrow Function in ES6
let greet1 = function() {
    return "Good Morning";
};
console.log(greet1());

let greet1Arrow = () => "Good Morning";
console.log(greet1Arrow());

// with Parameters
let greetArgs1 = function(name) {
    return `Good Morning ${name}`;
};
console.log(greetArgs1('John'));

let greetArgs1Arrow = (name) => `Good Morning ${name}`;
console.log(greetArgs1Arrow('John'));

// Arrow Function
let technologies = ['HTML','CSS','JavaScript','Bootstrap','Angular JS'];
let output = '';
technologies.forEach(function(element) {
    output += `${element.toUpperCase()} `;
});
console.log(output);

output = '';
technologies.forEach((element) => output += `${element.toUpperCase()} `);
console.log(output);