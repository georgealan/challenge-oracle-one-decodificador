const linkSignIn = document.getElementById('sign-in-link');
const linkSignUp = document.getElementById('sign-up-link');
const formSignIn = document.getElementById('sign-in');
const formSignUp = document.getElementById('sign-up');
const errorAlert = document.getElementById('signin-error-alert');

/* LINKS TO OPEN/CLOSE PAGE STORE BOXES */
linkSignIn.addEventListener('click', () => {
    formSignUp.classList.add('hide');
    formSignIn.classList.remove('hide');
});

linkSignUp.addEventListener('click', () => {
    formSignIn.classList.add('hide');
    formSignUp.classList.remove('hide');
});

function signUp(e) {
    event.preventDefault();

    let userName = document.getElementById('su-user-name').value;
    let password = passwordMatch();

    let user = {
        username: userName,
        password: password,
        boxesencrypted: null,
        boxesdecrypted: null,
        boxtextsbefore: [],
        iddecrypt: 0,
        idencrypt: 0,
    };
    
    let json = JSON.stringify(user);
    localStorage.setItem(userName, json);

    formSignUp.classList.add('hide');
    formSignIn.classList.remove('hide');
}

function passwordMatch() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');

    if(password.value.length <= 7) {
        password.setCustomValidity('Password must be at least 8 characters');
    } else if(!password.value.match(/[a-z]/)) {
        password.setCustomValidity('Password must be at least one letter character');
    } else if(!password.value.match(/[A-Z]/)) {
        password.setCustomValidity('Password must be at least one uppercase letter character');
    } else if(!password.value.match(/[\d]/)) {
        password.setCustomValidity('Password must be at least one number character');
    } else if(!password.value.match(/[\W]/)) {
        password.setCustomValidity('Password must be at least one special character');
    } else {
        password.setCustomValidity('');
    }
     
    if(password.value === confirm.value) {
        confirm.setCustomValidity('');
        return password.value;
    } else {
        confirm.setCustomValidity('Passwords do not match');
    } 
}

function verifyIfUserAlreadyExist() {
    let inputUserName = document.querySelector('input[name=username]');
    let user = JSON.parse(localStorage.getItem(inputUserName.value));

    if(user === null) {
        inputUserName.setCustomValidity('');
    } else {
        inputUserName.setCustomValidity('User already exists in the system, please chose other user name');
    }
}

function signIn(e) {
    event.preventDefault();

    let inputUserName = document.getElementById('si-user-name').value;
    let inputPassword = document.getElementById('si-password').value;
    let user = JSON.parse(localStorage.getItem(inputUserName));

    if(user === null) {
        errorAlert.classList.remove('hide');
        setTimeout(() => {
            errorAlert.classList.add('hide');
        }, 2000);
    } else if(user.username === inputUserName && user.password === inputPassword) {
        localStorage.setItem('userLogged', user.username);
        window.location.href = 'https://georgealan.github.io/challenge-oracle-one-decodificador/system.html';
    } else {
        errorAlert.classList.remove('hide');
        setTimeout(() => {
            errorAlert.classList.add('hide');
        }, 2000);
    }
}
