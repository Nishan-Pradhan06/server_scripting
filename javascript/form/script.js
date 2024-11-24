const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const btn = document.getElementById('button');

function errorMsg(e) {
    e.preventDefault();
    console.log('called');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmpasswordError = document.getElementById('confirmpasswordError');


    usernameError.innerText = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';
    confirmpasswordError.innerHTML = '';


    if (username.value == "") {
        console.log('validared');
        usernameError.innerText = 'username is required.'
    }

}

btn.addEventListener('click', function () {
    console.log('clicked');
    errorMsg();
})