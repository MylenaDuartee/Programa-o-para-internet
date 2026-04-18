    function getById(id) {
        return document.getElementById(id);
    }
     
    //Questão 2
        // letra A
    let alterarCorTexto = getById("botaoCorTexto");
    let  Corh1 = getById("Corh1");
    let inputCorTexto = getById("corTexto");

    alterarCorTexto.addEventListener("click", function(){
        let cor = inputCorTexto.value;
        Corh1.style.color = cor;
    });

        //Letra B
    let alterarCorNameTag = getById("botaoCorNameTag");
    let nameTag = document.getElementsByTagName("li");
    let inputCortag = getById("corNameTag");
    let inputNum = getById("numeroNameTag");

    alterarCorNameTag.addEventListener("click", function(){
        let corNT = inputCortag.value;
        let numNT = inputNum.value - 1;
        nameTag[numNT].style.color = corNT;
    });

    //Questão 3
    let pai = getById("pai")
    let filhos = pai.children;
    let resultado = getById("resultadoFilhos");
    let contarParagrafos = getById("botaoContarParagrafo");

    contarParagrafos.addEventListener("click", function(){
        let QtdParagrafos = filhos.length;
        resultado.innerText = "Na div acima temos " + QtdParagrafos + " parágrafos";
    });

    //Questão 4 -> feito pelo professor
        // selecione o botão usando o método getElementById
    var botao = document.getElementById("botao");
        // adicione um evento de clique ao botão
    botao.addEventListener("click", function() {
        // selecione o parágrafo usando o método getElementById
        let paragrafo = document.getElementById("paragrafo");
        // altere o texto do parágrafo
        paragrafo.innerText= "O texto deste parágrafo foi alterado!";
    });

    //Questão 4 -> minhas alterações
    let limpar = getById("botaoLimpar");
    limpar.addEventListener("click",function(){
        let paragrafo = getById("paragrafo");
        paragrafo.textContent = "";
    });

    


