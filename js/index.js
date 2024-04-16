function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");
    var isValid = true;

    // Validating username
    if (username.trim() === "") {
        usernameError.innerText = "Escreva o nome ou email corretamente";
        isValid = false;
    } else {
        usernameError.innerText = "";
    }

    // Validating password
    if (password.trim() === "") {
        passwordError.innerText = "Escreva a senha corretamente";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    return isValid;
}