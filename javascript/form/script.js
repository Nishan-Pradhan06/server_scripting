const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const btn = document.getElementById('btn');

function errorMsg(input, msg) {
    const form_group = input.parentElement;
    form_group.className = "form-group error";
    const errorMessage = form_group.getElementById("usernameError");
}
function sucessMsg(input, msg) {
    const form_group = input.parentElement;
    form_group.className = "form-group sucess";

}
function validateAll(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            errorMsg(input, `${input} is required.`);
        }
    });
}

btn.addEventListener('submit', function (e) {
    e.preventDefault();
    validateAll([username, email, password, confirmpassword]);
    checkLength(username, 4, 16);
    checkLength(password, 8, 12);
    checkEmail();
    checkPasswordMatch(password, confirmpassword);
});

function upperCaseLetter() {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        errorMsg(input, `${upperCaseLetter(input)} must be at least ${min} characters.`);
    } else if (input.value.length > max) {
        errorMsg(input, `${upperCaseLetter(input)} must be at less than ${max} characters.`);
    }
    else {
        sucessMsg(input);
    }
}

function checkEmail(input) {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (reg.test(input.value.trim())) {
        sucessMsg(input);
    }
    else {
        errorMsg(input, "Invalid email");
    }

}

function checkPassword(password1, password2) {
    if (password1.value != password2.value) {
        errorMsg(password2, "Password do not match.")
    }
}