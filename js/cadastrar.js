/* FUNÇÃO PARA VERIFICAR PREENCHIMENTO DE LOGIN*/
function acessar() {
    let loginEmail = document.getElementById("email").value;
    let loginSenha = document.getElementById("senha").value;
    let loginNome = document.getElementById("nome").value;
    let loginCPF = document.getElementById("cpf").value;
    
    if (!loginNome || !loginCPF ||!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "inicio.html";
    }
}
    function confirmarDados(){
        function validarEmail(email) {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
            var email = document.getElementById("email").value;
            if (!validarEmail(email)) {
                alert("Por favor, insira um email válido.");
                return false;
            }

            return true;
        }

/* FUNÇÃO PARA CONFIRMAR SENHA*/
function validarSenha() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("Csenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false; // Impede o envio do formulário se as senhas não coincidirem
    }
    return true; // Permite o envio do formulário se as senhas coincidirem
}


