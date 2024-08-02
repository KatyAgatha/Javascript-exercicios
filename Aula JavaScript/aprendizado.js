// Array contendo as mensagens sobre os 4 exercícios
var mensagens = [
    "Exercício 1 - Manipulação de Variáveis e Tipos de Dados: Aprendemos a declarar variáveis de diferentes tipos de dados e exibir seus valores.",
    "Exercício 2 - Função de Soma:  Criamos uma função que recebe dois números e retorna a soma deles.",
    "Exercício 3 - Manipulação de Eventos com Botões: Adicionamos um botão que exibe um alerta quando clicado.",
];

// Função para exibir as mensagens dos exercícios na página HTML
function exibirMensagens() {
    var lista = document.getElementById('exercicios');
    mensagens.forEach(function(mensagem) {
        var item = document.createElement('li');
        item.textContent = mensagem;
        lista.appendChild(item);
    });
}

// Chama a função exibirMensagens quando a página é carregada
window.onload = exibirMensagens;
