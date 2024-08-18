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

window.onload = function() {
    alert('Bem-vindo ao site de VALORANT BRASIL!');
}

const images = document.querySelectorAll('.press img, .press1 img');
images.forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
