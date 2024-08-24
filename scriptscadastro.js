document.addEventListener("DOMContentLoaded", function() {
 // Manipulação do formulário de cadastro
 const formCadastro = document.getElementById('formCadastro');
 const cadastroStatus = document.getElementById('cadastroStatus');

 formCadastro.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevenir o envio do formulário padrão

     const nomeCadastro = document.getElementById('nomeCadastro').value.trim();
     const emailCadastro = document.getElementById('emailCadastro').value.trim();
     const senhaCadastro = document.getElementById('senhaCadastro').value.trim();
     const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

     if (nomeCadastro === '' || emailCadastro === '' || senhaCadastro === '' || confirmarSenha === '') {
         cadastroStatus.innerText = 'Por favor, preencha todos os campos.';
         cadastroStatus.style.color = 'red';
     } else if (senhaCadastro !== confirmarSenha) {
         cadastroStatus.innerText = 'As senhas não coincidem.';
         cadastroStatus.style.color = 'red';
     } else {
         cadastroStatus.innerText = 'Cadastro realizado com sucesso!';
         
     }});
});