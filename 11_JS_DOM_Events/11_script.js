// Login form
var usernameElement = document.querySelector('#username');
var passwordElement = document.querySelector('#password');
var userTextElement = document.querySelector('#user-text');
var passTextElement = document.querySelector('#pass-text');
var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click',function() {
    userTextElement.textContent = usernameElement.value;
    passTextElement.textContent = passwordElement.value;
});

// UserName KeyUp Event
usernameElement.addEventListener('keyup',function() {
    var username = usernameElement.value;
    if(username === 'naveen'){
        usernameElement.style.backgroundColor = 'lightgreen';
        usernameElement.style.borderColor = 'green';
    }
    else{
        usernameElement.style.backgroundColor = 'red';
        usernameElement.style.borderColor = 'red';
    }
    userTextElement.textContent = username;
});

// password KeyUp Event
passwordElement.addEventListener('keyup',function() {
    passTextElement.textContent = passwordElement.value;
});

// SMS App
var textAreaElement = document.querySelector('#smsTextArea');
var spanElement = document.querySelector('#span');
var maxLength = 100;
textAreaElement.addEventListener('keyup',function() {
    var textLength = textAreaElement.value.length;
    spanElement.textContent = (maxLength - textLength);
});