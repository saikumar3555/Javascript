/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
piValue = Math.PI;
console.log(piValue);

// Math sqrt
var sqrt = Math.sqrt(144);
console.log('Sqrt of 144 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(879,4,544,3,1498461,98,456,4516,8,41651,68163,513);
console.log('min : ' + min);

// find the Max of 4 numbers
var max = Math.max(879,4,544,3,1498461,98,456,4516,8,41651,68163,513);
console.log('max : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);

// Get proper date
var date = today.toLocaleDateString();
console.log(date);

// Current Time
var time = today.toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
today = new Date().getDay();
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

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */



/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */