
    // Evento do formulário de contato
    document.getElementById('formContato').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário para teste
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let assunto = document.getElementById('assunto').value;
        let mensagem = document.getElementById('mensagem').value;

        if (nome && email && assunto && mensagem) {
            document.getElementById('formStatus').innerText = 'Mensagem enviada com sucesso!';
        } else {
            document.getElementById('formStatus').innerText = 'Por favor, preencha todos os campos.';
        }
    });

    // Evento do formulário de inscrição
    document.getElementById('formInscricao').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário para teste
        let nomeInscricao = document.getElementById('nomeInscricao').value;
        let emailInscricao = document.getElementById('emailInscricao').value;

        if (nomeInscricao && emailInscricao) {
            document.getElementById('subscribeStatus').innerText = 'Inscrição realizada com sucesso!';
        } else {
            document.getElementById('subscribeStatus').innerText = 'Por favor, preencha todos os campos.';
        }
    });

    
