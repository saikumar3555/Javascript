// Get the HTML Elements
var usernameElement = document.querySelector('#username');
var emailElement = document.querySelector('#email');
var passwordElement = document.querySelector('#password');
var confirmPasswordElement = document.querySelector('#password_confirm');
var message = '';

// Get the Error Messages Elements
var userErrorElement = document.querySelector('#name_error');
var emailErrorElement = document.querySelector('#email_error');
var passwordErrorElement = document.querySelector('#password_error');

// Blur Event for UserName Field
usernameElement.addEventListener('blur',function() {
    clearErrorMessage(usernameElement,userErrorElement);
});
// Blur Event for Email Field
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailErrorElement);
});
// Blur Event for password Field
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});
// Blur Event for Confirm Password Field
confirmPasswordElement.addEventListener('blur',function() {
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
    clearErrorMessage(passwordElement,passwordErrorElement);
});

// Validate Function
function validate() {
    var isValid = true;


    // Required UserName validation
    if(usernameElement.value === ''){
        isValid = false;
        message = 'UserName is Required';
        displayErrorMessage(usernameElement,userErrorElement,message);
        return isValid;
    }

    // UserName Length Validation
    if(usernameElement.value.length < 5){
        isValid = false;
        message = 'Required at least 5 letters';
        displayErrorMessage(usernameElement,userErrorElement,message);
        return isValid;
    }

    // Reg Exp validation
    if(!usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        isValid = false;
        message = 'The Pattern is Not Matched';
        displayErrorMessage(usernameElement,userErrorElement,message);
        return isValid;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        isValid = false;
        message = 'Email is Required';
        displayErrorMessage(emailElement,emailErrorElement,message);
        return isValid;
    }

    // Required Password Validation
    if(passwordElement.value === ''){
        isValid = false;
        message = 'Password is Required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        return isValid;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        isValid = false;
        message = 'Confirm Password is Required';
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        return isValid;
    }

    // Password Match Validation
    if(passwordElement.value !== confirmPasswordElement.value){
        isValid = false;
        message = "Passwords didn't match";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        return isValid;
    }

    if(!isValid){
        return isValid;
    }
    else{
        window.open('success.html');
        return true;
    }

}

// display Error Message
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// clear the Error Message
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0px white';
    errorElement.textContent = '';
}