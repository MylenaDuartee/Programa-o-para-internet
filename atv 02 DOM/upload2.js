document.querySelector('#selectImagem').addEventListener('change', function () {

    var url = this.value;

    var resultado = document.querySelector('#resultado');

    resultado.innerHTML = ""; // limpa imagem anterior

    var img = document.createElement('img');

    img.src = url;

    img.style.maxWidth = "300px";

    resultado.appendChild(img);
});