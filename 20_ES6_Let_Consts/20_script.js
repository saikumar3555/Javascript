// If block Using Var , let keywords
var dept = 'Engineering';
if(dept === 'Engineering'){
    var job1 = 'Software';
    let job2 = 'Government';
}
console.log(dept); // Engineering
console.log(job1); // Software
// console.log(job2); // Cannot Access this

// for Loop for var , let keywords
for(var i=0; i<=10; i++){

}
console.log(i); // 11 because its 'var'

for(let j=0; j<=10; j++){

}
// console.log(j); RE: Cannot access the 'j' because its 'let'

// const Example
const APP_NAME = 'JavaScript APP';
// APP_NAME = 'TEST'; // Cannot Re-assign to it.

if(100 === 100){
    const MONTH = 'November';
}
// console.log(MONTH); // Cannot Access this outside if block
