function getById<T extends HTMLElement>(id: string): T {
    return document.getElementById(id) as T;
}

// Questão 2
let alterarCorTexto = getById<HTMLButtonElement>("botaoCorTexto");
let Corh1 = getById<HTMLElement>("Corh1");
let inputCorTexto = getById<HTMLInputElement>("corTexto");

alterarCorTexto.addEventListener("click", () => {
    let cor: string = inputCorTexto.value;
    Corh1.style.color = cor;
});

// Letra B
let alterarCorNameTag = getById<HTMLButtonElement>("botaoCorNameTag");
let nameTag = document.getElementsByTagName("li");
let inputCortag = getById<HTMLInputElement>("corNameTag");
let inputNum = getById<HTMLInputElement>("numeroNameTag");

alterarCorNameTag.addEventListener("click", () => {
    let corNT: string = inputCortag.value;
    let numNT: number = Number(inputNum.value) - 1;
    nameTag[numNT].style.color = corNT;
});

// Questão 3
let pai = getById<HTMLElement>("pai");
let filhos = pai.children;
let resultado = getById<HTMLElement>("resultadoFilhos");
let contarParagrafos = getById<HTMLButtonElement>("botaoContarParagrafo");

contarParagrafos.addEventListener("click", () => {
    let qtdParagrafos: number = filhos.length;
    resultado.innerText = `Na div acima temos ${qtdParagrafos} parágrafos`;
});

// Questão 4
let botao = document.getElementById("botao") as HTMLButtonElement;

botao.addEventListener("click", () => {
    let paragrafo = document.getElementById("paragrafo") as HTMLElement;
    paragrafo.innerText = "O texto deste parágrafo foi alterado!";
});

// Limpar
let limpar = getById<HTMLButtonElement>("botaoLimpar");

limpar.addEventListener("click", () => {
    let paragrafo = getById<HTMLElement>("paragrafo");
    paragrafo.textContent = "";
});

// Questão 6
function mudarparagrafo(): void {
    let elemento = getById<HTMLElement>("mudarFormato");
    elemento.style.color = "white";
    elemento.style.background = "#A47BAB";
}

// Questão 7
let maiusculo = getById<HTMLButtonElement>("botaoMaiusculo");
let inputMaiusculo = getById<HTMLInputElement>("textoMinusculo");
let resultadoM = getById<HTMLElement>("resultadoMaiusculo");

maiusculo.addEventListener("click", () => {
    let textoM: string = inputMaiusculo.value;
    let textoCerto: string = textoM.toUpperCase();
    resultadoM.innerText = textoCerto;
});

// Questão 8
function mudarBody(): void {
    document.body.style.background = "black";
    document.body.style.color = "white";
}

function corBodyOri(): void {
    document.body.style.background = "white";
    document.body.style.color = "black";
}

// Questão 9
function aumentarTam(): void {
    document.body.style.fontSize = "5rem";
}

function diminuirTam(): void {
    document.body.style.fontSize = "3px";
}

// Questão 10
function calcular(): void {
    let operador = document.querySelector('input[name="operacao"]:checked') as HTMLInputElement | null;

    if (!operador) return;

    let numero1 = getById<HTMLInputElement>("numero1");
    let numero2 = getById<HTMLInputElement>("numero2");
    let resultadoOpera = getById<HTMLElement>("resultadoOpera");

    let n1: number = parseFloat(numero1.value);
    let n2: number = parseFloat(numero2.value);
    let resultadoop: number = 0;

    if (operador.value === "+") {
        resultadoop = n1 + n2;
    } else if (operador.value === "-") {
        resultadoop = n1 - n2;
    } else if (operador.value === "/") {
        resultadoop = n1 / n2;
    } else {
        resultadoop = n1 * n2;
    }

    resultadoOpera.innerText = resultadoop.toString();
}

// Questão 11
let item = getById<HTMLInputElement>("item");

function inserirLi(): void {
    let topico = document.createElement("li");
    topico.innerText = item.value;

    let lista = getById<HTMLUListElement>("resultadoLista");
    lista.appendChild(topico);
}

// Questão 12
let itemsele = getById<HTMLInputElement>("itemSelect");

function inserirSel(): void {
    let topico = document.createElement("option");
    topico.innerText = itemsele.value;

    let select = getById<HTMLSelectElement>("resultadoSelec");
    select.appendChild(topico);
}