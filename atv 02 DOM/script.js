function mostrarErro(idElemento, mensagem) {
    var el = document.querySelector(idElemento);

    el.innerHTML = mensagem;
    el.classList.remove('oculto');

    setTimeout(function () {
        el.classList.add('oculto');
    }, 3000);
}

document.querySelector('#botaoErro').addEventListener('click', function (){
    mostrarErro('#mensagemErro', 'Por favor, preencha o campo');
});


var botaoExibir = document.querySelector('#botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);

function exibirConteudo() {
    var campo = document.querySelector('#caixaDeTexto').value;
    var texto = campo.trim()

    if (texto === "") {
        mostrarErro('#conteudo', 'O campo não pode estar vazio!')
        return;
    }

    document.querySelector('#conteudo').innerHTML = texto;

}

