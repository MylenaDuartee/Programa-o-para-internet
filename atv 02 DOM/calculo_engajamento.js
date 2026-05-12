
function mostrarErro(idElemento, mensagem) {
    var el = document.querySelector(idElemento);

    el.innerHTML = mensagem;
    el.classList.remove('oculto');

    setTimeout(function () {
        el.classList.add('oculto');
    }, 3000);
}


document.querySelector('#taxaEng').addEventListener('click', function () {

    var interacoes = document.querySelector('#interacoesInput').value;
    var visualizacoes = document.querySelector('#visualizacoesInput').value;

    interacoes = Number(interacoes);
    visualizacoes = Number(visualizacoes);

    // validação
    if (isNaN(interacoes) || isNaN(visualizacoes)) {
        mostrarErro('#mensagemErro', 'Digite apenas números válidos!');
        return;
    }
    
    if (interacoes === "" || visualizacoes === "") {
        mostrarErro('#mensagemErro', 'Por favor, preencha todos os campos');
        return;
    }

    var taxa = (interacoes / visualizacoes) * 100;

    document.querySelector('#resultado').innerHTML =
        'Taxa de engajamento: ' + taxa.toFixed(2) + '%';
});