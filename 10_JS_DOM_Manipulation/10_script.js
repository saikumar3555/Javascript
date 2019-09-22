// DOM Manipulation for H2 Tag
var h2Element = document.querySelector('h2');


// function GoodMorning
function sayGoodMorning() {
    h2Element.textContent = 'Good Morning';
    h2Element.style.backgroundColor = 'lightblue';
}

// function GoodMorning
function sayGoodAfternoon() {
    h2Element.textContent = 'Good Afternoon';
    h2Element.style.backgroundColor = 'lightgreen';
}

// function GoodMorning
function sayGoodEvening() {
    h2Element.textContent = 'Good Evening';
    h2Element.style.backgroundColor = 'lightsalmon';
}

// function GoodMorning
function sayGoodNight() {
    h2Element.textContent = 'Good Night';
    h2Element.style.backgroundColor = 'lightgray';
}

// Function WishMe
function wishMe(message,color) {
   h2Element.textContent = message;
   h2Element.style.backgroundColor = color;
   h2Element.style.boxShadow = '0 0 15px black';
}

// Event Listeners of JavaScript

// Good Morning Button
var gmElement = document.querySelector('#gm');
gmElement.addEventListener('click',function() {
    wishMe('Good Morning','lightblue');
});

// Good Afternoon Button
var gaElement = document.querySelector('#ga');
gaElement.addEventListener('click',function() {
    wishMe('Good Afternoon','lightgreen');
});

// Good Evening Button
var geElement = document.querySelector('#ge');
geElement.addEventListener('click',function() {
    wishMe('Good Evening','lightsalmon');
});

// Good Night Button
var gnElement = document.querySelector('#gn');
gnElement.addEventListener('click',function() {
    wishMe('Good Night','lightgray');
});


// Change Images Function
var imageElement = document.querySelector('#myImage');

function changeImage(source) {
    imageElement.setAttribute('src',source);
}