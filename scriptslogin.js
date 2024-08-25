document.addEventListener("DOMContentLoaded", function() {
    // Manipulação do formulário de login
    const formLogin = document.getElementById('formLogin');
    const loginStatus = document.getElementById('loginStatus');
    const loginFormSection = document.getElementById('login-form');

    // Adicionar classe para animação quando o DOM é carregado
    loginFormSection.classList.add('visible');

    formLogin.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o envio do formulário padrão
        
        const emailLogin = document.getElementById('emailLogin').value.trim();
        const senhaLogin = document.getElementById('senhaLogin').value.trim();

        if (emailLogin === '' || senhaLogin === '') {
            loginStatus.innerText = 'Por favor, preencha todos os campos.';
            loginStatus.style.color = 'red';
            loginStatus.classList.add('visible');
        } else {
            loginStatus.innerText = 'Login realizado com sucesso!';
            loginStatus.style.color = 'green';
            loginStatus.classList.add('visible');
            
            // Opcional: Limpar campos após um curto intervalo
            setTimeout(() => {
                formLogin.reset();
                loginStatus.classList.remove('visible');
            }, 2000);
        }
    });
});
