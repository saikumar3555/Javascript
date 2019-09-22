// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You will get a job Soon');
}
else  if(courseCompleted && !practiceCompleted){
    console.log('Please start practicing');
}
else{
    console.log('Please join any Course');
}

// For loop Example to display from 0 - 10 values
var output = '';
for(var i = 0; i<= 10; i++){
   if(i <= 9){
       output +=  i + ' , ';
   }
   else{
       output +=  i ;
   }
}
console.log(output);

// While loop Example to display from 0 - 10 values
output = '';
i = 0;
while(i <= 10){
    if(i <= 9){
        output +=  i + ' - ';
    }
    else{
        output +=  i ;
    }
    i++;
}
console.log(output);

// Do while loop Example to display from 0 - 10 values
output = '';
i = 0;
do{
    if(i <= 9){
        output +=  i + ' * ';
    }
    else{
        output +=  i ;
    }
    i++;
}
while(i <= 10);
console.log(output);

// For-Loop to print the values from 20 to 0 and diff 2
output = '';
for(i = 20; i >= 0; i-= 2){
    if(i > 0){
        output +=  i + ' , ';
    }
    else{
        output +=  i ;
    }
}
console.log(output);

// While-Loop to print the values from 20 to 0 and diff 2
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output +=  i + ' - ';
    }
    else{
        output +=  i ;
    }
    i-= 2;
}
console.log(output);

// Do-While-Loop to print the values from 20 to 0 and diff 2
output = '';
i = 20;
do{
    if(i > 0){
        output +=  i + ' * ';
    }
    else{
        output +=  i ;
    }
    i-= 2;
}
while(i >= 0);
console.log(output);

// Switch Statement Example
var today = new Date().getDay();
var str = 'Today is : ';
switch(today){
    case 0:
        str += 'Sunday';
        break;
    case 1:
        str += 'Monday';
        break;
    case 2:
        str += 'Tuesday';
        break;
    case 3:
        str += 'Wednesday';
        break;
    case 4:
        str += 'Thursday';
        break;
    case 5:
        str += 'Friday';
        break;
    case 6:
        str = 'Saturday';
        break;
    default:
        str = 'No - Day';
        break;
}
console.log(str);

// Print the String Numbers
str = '87987';
var tempStr = '';
for(var j = 0; j<str.length; j++){
    var ch = parseInt(str.charAt(j));
    switch(ch){
        case 0:
            tempStr += ' ZERO ';
            break;
        case 1:
            tempStr += ' ONE ';
            break;
        case 2:
            tempStr += ' TWO ';
            break;
        case 3:
            tempStr += ' THREE ';
            break;
        case 4:
            tempStr += ' FOUR ';
            break;
        case 5:
            tempStr += ' ZERO ';
            break;
        case 6:
            tempStr += ' SIX ';
            break;
        case 7:
            tempStr += ' SEVEN ';
            break;
        case 8:
            tempStr += ' EIGHT ';
            break;
        case 9:
            tempStr += ' NINE ';
            break;
        default:
            tempStr += ' ';
            break;
    }
}
console.log(tempStr);