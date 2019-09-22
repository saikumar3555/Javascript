let technologies = ['HTML','CSS','JavaScript','Bootstrap','Angular JS'];

let output = '';

// Normal For-loop ES5
for(let i=0; i<technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// forEach Loop ES5
output = '';
technologies.forEach(function(element) {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// for-in Loop ES5
output = '';
for(let index in technologies){
    let element = technologies[index];
    output += `${element.toUpperCase()} `;
}
console.log(output);

// For-of Loop ES6
output = '';
for(let element of technologies){
    output += `${element.toUpperCase()} `;
}
console.log(output);