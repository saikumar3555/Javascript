// Get the HTML Elements
var numberInputElement = document.querySelector('#number');
var strNumberElement = document.querySelector('#text-number');
var numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

//keyup Event
numberInputElement.addEventListener('keyup',function() {
   var inputValue = numberInputElement.value;
   strNumberElement.textContent = displayWordNumber(inputValue);
});

function displayWordNumber(strNum) {
    var  tempNumber = strNum;
    var tempString = '';
    for(var i=strNum.length-2; i>=0; i--){
        tempNumber += strNum.charAt(i);
    }
    for(var j=0; j<tempNumber.length;j++){
        var digit = parseInt(tempNumber.charAt(j));
        tempString += numberArray[digit] + ' ';
    }
    return tempString;
}
console.log(displayWordNumber('123'));