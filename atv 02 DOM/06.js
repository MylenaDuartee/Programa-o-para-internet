
function mostrarErro(idElemento, mensagem) {
    var el = document.querySelector(idElemento);

    el.innerHTML = mensagem;
    el.classList.remove('oculto');

    setTimeout(function () {
        el.classList.add('oculto');
    }, 3000);
}


document.querySelector('#enviarBtn').addEventListener('click', function () {

    var checkboxes = document.querySelectorAll('input[name="redesSociais"]');
    var selecionadas = [];

    checkboxes.forEach(function (item) {
        if (item.checked) {
            selecionadas.push(item.value);
        }
    });

    if (selecionadas.length === 0) {
        mostrarErro('#mensagemErro', 'Selecione pelo menos uma rede social!');
        return;
    }

    document.querySelector('#redesSelecionadas').innerHTML =
        'Redes selecionadas: ' + selecionadas.join(', ');
});