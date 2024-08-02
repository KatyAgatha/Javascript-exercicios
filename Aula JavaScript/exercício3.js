// Função para modificar o conteúdo da página
function modificarConteudo() {
    document.getElementById('titulo').textContent = 'Olá, estudante de DEV!';
    document.getElementById('paragrafo').textContent = 'Quer descobrir uma curiosidade?';
}

// Função para exibir um alerta com uma mensagem personalizada
function exibirAlerta() {
    alert('Não é Java!! É JavaScript!');
}

// Adiciona o ouvinte de evento ao botão quando a página é carregada
window.onload = function() {
    modificarConteudo();
    var botao = document.getElementById('meuBotao');
    botao.addEventListener('click', exibirAlerta);
};
