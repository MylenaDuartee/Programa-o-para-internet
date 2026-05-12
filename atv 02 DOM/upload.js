document.querySelector('#carregarBtn').addEventListener('click', function () {

    var uploadImagem = document.querySelector('#uploadImagem');
    var arquivoSelecionado = uploadImagem.files[0];

    if (!arquivoSelecionado) {
        alert("Selecione uma imagem primeiro!");
        return;
    }

    var img = document.createElement('img');

    img.src = URL.createObjectURL(arquivoSelecionado);

    var resultado = document.querySelector('#resultado');

    resultado.appendChild(img);
});