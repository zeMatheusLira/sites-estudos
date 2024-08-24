document.addEventListener("DOMContentLoaded", function() {

    // Manipulação do formulário de login
    const formLogin = document.getElementById('formLogin');
    const loginStatus = document.getElementById('loginStatus');

    formLogin.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o envio do formulário padrão
        
        const emailLogin = document.getElementById('emailLogin').value.trim();
        const senhaLogin = document.getElementById('senhaLogin').value.trim();

        if (emailLogin === '' || senhaLogin === '') {
            loginStatus.innerText = 'Por favor, preencha todos os campos.';
            loginStatus.style.color = 'red';
        } else {
            loginStatus.innerText = 'Login realizado com sucesso!';
        }
    });
});