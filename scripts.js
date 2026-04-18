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

    //Questão 6
    function mudarparagrafo(){
        let elemento = getById("mudarFormato");
        elemento.style.color = "white";
        elemento.style.background = "#A47BAB";
        elemento.style.borderRadius = "12px";
        elemento.style.padding = "12px 18px";
        elemento.style.margin = "12px 0";
        elemento.style.maxWidth = "400px";
        elemento.style.textAlign = "center";
    };

    //Questão 7
    let maiusculo = getById("botaoMaiusculo");
    let inputMaiusculo = getById("textoMinusculo");
    let resultadoM = getById("resultadoMaiusculo");

    maiusculo.addEventListener("click", function(){
        let textoM = inputMaiusculo.value;
        let textoCerto = textoM.toUpperCase();
        resultadoM.innerText = textoCerto;
    })

    //Questão 8
    function mudarBody() {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
    function corBodyOri() {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }

    //Questão 9
    function aumentarTam() {
        document.body.style.fontSize = "5rem";
    }

    function diminuirTam() {
        document.body.style.fontSize = "3px";
    }

    //Questão 10
    function calcular(){
        let operador = document.querySelector('input[name="operacao"]:checked');
        let numero1 = getById("numero1");
        let numero2 = getById("numero2");
        let resultadoOpera = getById("resultadoOpera");
        let resultadoop = 0;
        if (operador.value == "+") {
            resultadoop = parseFloat(numero1.value) + parseFloat(numero2.value);
        } else if (operador.value == "-") {
            resultadoop = parseFloat(numero1.value) - parseFloat(numero2.value);
        } else if (operador.value == "/") {
            resultadoop = parseFloat(numero1.value) / parseFloat(numero2.value);
        } else {
            resultadoop = parseFloat(numero1.value) * parseFloat(numero2.value);
        }

        resultadoOpera.innerText = resultadoop

    }

    //Questão 11
    
    let item = getById("item");

    function inserirLi(){
        let topico = document.createElement("li");
        topico.innerText = item.value;
        getById("resultadoLista").appendChild(topico);
    }

    //Questão 12
    
    let itemsele = getById("itemSelect");

    function inserirSel(){
        let topico = document.createElement("option");
        topico.innerText = itemsele.value;
        getById("resultadoSelec").appendChild(topico);
    }
