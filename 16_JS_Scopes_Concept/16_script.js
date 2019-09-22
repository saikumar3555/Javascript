// Block scoping for FOR loop
for(var i=0; i<=10; i++){

}
console.log(i); // 11

//Block scoping for if Block
var dept1 = 'Engineering';
if(dept1 === 'Engineering'){
    var job1 = 'software';
}
console.log(dept1);// Engineering
console.log(job1); // Software

// Function Scoping
var dept2 = 'Medical';
function allocateJob() {
    if(dept2 === 'Medical'){
        var job2 = 'Doctor';
    }
}
allocateJob();
console.log(dept2); // Medical
// console.log(job2); // Cannot Access

// Scope Examples
var a = 10;
function outerFn(){
    var a = 20;
    function innerFn(){
        var a = 30;
        console.log(a); // 30
    }
    innerFn();
    console.log(a); // 20
}
outerFn();
console.log(a); // 10

// IIFE example
var name = 'John';
(function(name) {
    var desg = 'Manager';
    console.log('Good Morning ' + name + ' Desg : ' + desg);
})(name);

