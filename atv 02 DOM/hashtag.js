
function mostrarErro(idElemento, mensagem) {
    var el = document.querySelector(idElemento);

    el.innerHTML = mensagem;
    el.classList.remove('oculto');

    setTimeout(function () {
        el.classList.add('oculto');
    }, 3000);
}

document.querySelector('#adicionarBtn').addEventListener('click', function () {

    var input = document.querySelector('#hashtagInput');
    var texto = input.value.trim();

    var select = document.querySelector('#listaHashtags');

    if (texto === "") {
        mostrarErro('#mensagemErro', 'Hashtag não pode ser vazia!');
        return;
    }

    if (texto.length < 2) {
        mostrarErro('#mensagemErro', 'Hashtag deve ter pelo menos 2 caracteres!');
        return;
    }

    if (select.options.length >= 5) {
        mostrarErro('#mensagemErro', 'Limite de 5 hashtags atingido!');
        return;
    }

    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value === texto) {
            mostrarErro('#mensagemErro', 'Hashtag já existe!');
            return;
        }
    }

    var option = document.createElement('option');
    option.text = texto;
    option.value = texto;

    select.appendChild(option);

    input.value = "";
});