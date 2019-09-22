// Example 1: Triangle String
var theStr = 'NAVEENSAGGAM';
function triangleString(str) {
    var tempStr = '';
    for(var i = 0; i<=str.length; i++){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(triangleString(theStr));

function reverseTriangle(str) {
    var tempStr = '';
    for(var i=str.length; i>=0; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return  tempStr;
}
console.log(reverseTriangle(theStr));

function triangle3(str) {
    var tempStr = '';
    for(var i=0; i<str.length; i++){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(triangle3(theStr));

function triangle4(str) {
    var tempStr = '';
    for(var i=str.length; i>=0; i--){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(triangle4(theStr));

function triangle5(str) {
    var tempStr = '';
    for(var i=0; i<=str.length/2; i++){
        var num = str.length - i;
        var spaceNum = str.length - i*2;
        tempStr += str.substr(0,i) + addSpace(spaceNum) + str.substr(num) + '\n';
    }
    return tempStr;
}
console.log(triangle5(theStr));

function addSpace(num) {
    var tempSpace = '';
    for(var i=0; i<num; i++){
        tempSpace += ' ';
    }
    return tempSpace;
}

//Example 1 Logic
var triangleOneTextElement = document.querySelector('#triangleOneText');
var triangleOneParagraph = document.querySelector('#triangleOneDisplay');
triangleOneTextElement.addEventListener('keyup',function() {
    var textEntered = triangleOneTextElement.value;
    var triangleText = triangleString(textEntered);
    triangleOneParagraph.textContent = triangleText;
});

//Example 2 Logic
var triangleTwoTextElement = document.querySelector('#triangleTwoText');
var triangleTwoParagraph = document.querySelector('#triangleTwoDisplay');
triangleTwoTextElement.addEventListener('keyup',function() {
    var textEntered = triangleTwoTextElement.value;
    var triangleText = reverseTriangle(textEntered);
    triangleTwoParagraph.textContent = triangleText;
});

//Example 3 Logic
var triangleThreeTextElement = document.querySelector('#triangleThreeText');
var triangleThreeParagraph = document.querySelector('#triangleThreeDisplay');
triangleThreeTextElement.addEventListener('keyup',function() {
    var textEntered = triangleThreeTextElement.value;
    var triangleText = triangle3(textEntered);
    triangleThreeParagraph.textContent = triangleText;
});

//Example 4 Logic
var triangleFourTextElement = document.querySelector('#triangleFourText');
var triangleFourParagraph = document.querySelector('#triangleFourDisplay');
triangleFourTextElement.addEventListener('keyup',function() {
    var textEntered = triangleFourTextElement.value;
    var triangleText = triangle4(textEntered);
    triangleFourParagraph.textContent = triangleText;
});

//Example 5 Logic
var triangleFiveTextElement = document.querySelector('#triangleFiveText');
var triangleFiveParagraph = document.querySelector('#triangleFiveDisplay');
triangleFiveTextElement.addEventListener('keyup',function() {
    var textEntered = triangleFiveTextElement.value;
    var triangleText = triangle5(textEntered);
    triangleFiveParagraph.textContent = triangleText;
});
