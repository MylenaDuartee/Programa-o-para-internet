    function getById(id){
        return document.getElementById(id);
    }

    let mudarCorTexto = getById("mudarCor");
    let inputCor = getById("alterarCor");
    let preCor = getById("alterar")
    
    mudarCorTexto.addEventListener("click", function(){
        let cor = inputCor.value;
        preCor.style.color = cor;
    })
    
    let mudarCorTextotag = getById("mudarCorTextotag");
    let nametag = document.getElementsByTagName("p");
    let inputCortag = getById("alterarCortag");

    mudarCorTextotag.addEventListener("click", function(){
        let cor = inputCortag.value;
        nametag[2].style.color = cor

    })