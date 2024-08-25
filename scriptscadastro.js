document.addEventListener("DOMContentLoaded", function() {
    // Manipulação do formulário de cadastro
    const formCadastro = document.getElementById('formCadastro');
    const cadastroStatus = document.getElementById('cadastroStatus');
    const cadastroFormSection = document.getElementById('cadastro-form');

    // Adicionar classe para animação quando o DOM é carregado
    cadastroFormSection.classList.add('visible');

    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o envio do formulário padrão

        const nomeCadastro = document.getElementById('nomeCadastro').value.trim();
        const emailCadastro = document.getElementById('emailCadastro').value.trim();
        const senhaCadastro = document.getElementById('senhaCadastro').value.trim();
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

        if (nomeCadastro === '' || emailCadastro === '' || senhaCadastro === '' || confirmarSenha === '') {
            cadastroStatus.innerText = 'Por favor, preencha todos os campos.';
            cadastroStatus.style.color = 'red';
            cadastroStatus.classList.add('visible');
        } else if (senhaCadastro !== confirmarSenha) {
            cadastroStatus.innerText = 'As senhas não coincidem.';
            cadastroStatus.style.color = 'red';
            cadastroStatus.classList.add('visible');
        } else {
            cadastroStatus.innerText = 'Cadastro realizado com sucesso!';
            cadastroStatus.style.color = 'green';
            cadastroStatus.classList.add('visible');
            
            // Opcional: Limpar campos após um curto intervalo
            setTimeout(() => {
                formCadastro.reset();
                cadastroStatus.classList.remove('visible');
            }, 2000);
        }
    });
});
