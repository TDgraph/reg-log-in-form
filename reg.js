// adding javascript styles
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    

});
// get the values from the input
function checkInputs() {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
const button = button.value.trim();

if(usernameValue === ''){
    setErrorFor(username, 'fullname cannot be blank');
}
else if(usernameValue.length < 6){
    setErrorFor(username, 'fullname must consist of first and surname');
}
else {
    setSuccessFor(username);
}
if(emailValue === '') {
    setErrorFor(email, 'Email can not be blank');
}
else {
    setSuccessFor(email);
}
if(passwordValue === '') {
    setErrorFor(password, 'Password cannot blank');
}
else if(passwordValue.length < 8){
    setErrorFor(password, 'Password must be at least 8 characters long');
}
else {
    setSuccessFor(password);
}
if(password2Value === '') {
    setErrorFor(password2, 'please create a new password');
}
else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
}
else if(password2Value.length < 8){
    setErrorFor(password2, 'created password must be at least 8characters');
}
else{
    setSuccessFor(password2);
}
if (fullnameValue  === '') {
    setErrorFor(button, 'unable to register enter full name');
}else {
    setSuccessFor(button, 'successfully registered');
}
if(emailValue === '') {
    setErrorFor(button, 'enter a correct email address');
}else {
    setSuccessFor(button, 'successfuly registered');
}
if(passwordValue === '') {
    setErrorFor(button, 'unable to register enter password');
}else {
    setSuccessFor(button, 'successfully registered');
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement; 
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}