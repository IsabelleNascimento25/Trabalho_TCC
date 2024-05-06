function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarForm() {
    var loginEmail = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("Csenha").value;

    // Verifica se o email é válido
    if (!validarEmail(loginEmail)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false;
    }

    return true;
}
