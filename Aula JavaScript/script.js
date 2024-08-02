// Função para modificar o conteúdo da página
function modificarConteudo() {
    document.getElementById('titulo').textContent = 'Olá, Mundo!';
    document.getElementById('paragrafo').textContent = 'Esta é uma página HTML simples. Você pode usar o JavaScript para modificar o conteúdo da página HTML com o seguinte código: const título = document.getElementById("title")';
}

// Função para alterar a cor de fundo da página
function alterarCorDeFundo(event) {
    document.body.style.backgroundColor = event.target.value;
}

// Adiciona o ouvinte de evento ao input color picker quando a página é carregada
window.onload = function() {
    modificarConteudo();
    var colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', alterarCorDeFundo);
};
