/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

let languages = new Map();

languages.set('1','HTML');
languages.set('2','CSS');
languages.set('3','JavaScript');
languages.set('4','JQuery');
languages.set('5','Bootstrap');
languages.set('6','Angular JS');

// Retrieve the Map data
/*
languages.forEach(function(value,key) {
    console.log(`value : ${value} Key : ${key}`);
});
*/

// Arrow Function
languages.forEach((value,key) => console.log(`value : ${value} Key : ${key}`));



/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let technologies = new Set();
technologies.add('HTML');
technologies.add('HTML');
technologies.add('CSS');
technologies.add('JavaScript');
technologies.add('JQuery');
technologies.add('JQuery');


// print the Set of elements
console.log(technologies);

// Delete elements of a set
technologies.delete('CSS');
console.log(technologies);


// Has function
let technology = 'HTML';
if(technologies.has(technology)){
    console.log(`The ${technology} is Exists in the Set`);
}
else{
    console.log(`The ${technology} is NOT Exists in the Set`);
}

// Size of the Set
console.log(`Size : ${technologies.size}`);

// Clear the Set
technologies.clear();
console.log(technologies);