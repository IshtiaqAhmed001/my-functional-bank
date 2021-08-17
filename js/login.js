document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // clear input fileds 
    emailField.value = '';
    passwordField.value = '';
    // check email pass 
    if (email == 'abc@gmail.com' && password == '123456') {
        window.location.href = 'banking.html';
    }
})