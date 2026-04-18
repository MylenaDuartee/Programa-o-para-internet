    function getById(id) {
        return document.getElementById(id);
    }
    
    getById("texto").innerText = "Hello world!";

    let pai = getById("pai");
    let filhos = pai.children;
    let resultado = getById("resultadoFilhos");
    let texto = "";

    for(var i = 0; i < filhos.length; i++) {
        texto +=filhos[i].innerText + " ";
    }
    resultado.innerText = texto;

    let botao = getById("botao1");
    let resultado1 = getById("resultado1");

    botao1.addEventListener("click",function(){
        resultado1.innerText = "hello world";
    });

    // Lendo o conteúdo de uma caixa de texto
    let botao2 = getById("botao2");
    let textoInput = getById("textoInput");
    let resultado2 = getById("resultado2");
    
    botao2.addEventListener("click", function(){
        let texto = textoInput.value;
        resultado2.innerHTML = texto;
    });

    //Lendo o valor de um select
    getById("botaoCidade").addEventListener("click", function() {
        let cidade = getById("cidades").value;
        getById("resultadoCidade").innerText = 
            "Cidade selecionada: " + cidade;
    });

    //Alterando a cor de fundo de uma página
    let botaoCor = getById("botaoCor");
    let inputCor = getById("inputCor");

    botaoCor.addEventListener("click", function(){
        let cor = inputCor.value;
        document.body.style.backgroundColor = cor;
    });

    //Lendo o valor de um checkbox
    getById("botaoInteresse").addEventListener("click", function(){
        let interesse = getById("interesse").checked;
        if (interesse) {
            getById("saidaInteresse").innerText = "Vc optou por receber novidades!";
        } else {
            getById("saidaInteresse").innerText = "Vc optou por não receber novidade!";
        }
    });

    //Usando querySelector
    document.querySelector("#titulo");

    document.querySelector(".texto");

    document.querySelector("p");

    document.querySelector("p").innerText = "Alterado!";

    let paragrafos = document.querySelectorAll("p");

    paragrafos.forEach(function(paragrafo) {
    paragrafo.innerText = "Olá!";
    });

    function query(seletor) {
        return document.querySelector(seletor);

    }

    function queryAll(seletor) {
        return document.querySelectorAll(seletor);
    }

    queryAll(".botaoAcao").forEach(function(botao) {
    botao.addEventListener("click", function() {
        query("#resultado1").innerText = "Clique!";

        });

    });

