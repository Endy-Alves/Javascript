var subnav = document.getElementById("sub-nav");
var meuBotao = document.getElementById("button");

window.addEventListener('DOMContentLoaded', function() {
    var meuBotao = document.getElementById("button");
    meuBotao.classList.remove("diminuido");
})

function toggleDiv() {
    var meuBotao = document.getElementById("button");
    var subnav = document.getElementById('sub-nav');

    if (subnav.style.display === "none") {
        subnav.style.display = "flex";
            meuBotao.classList.add("diminuido");
    } else {
        subnav.style.display = "none";
            meuBotao.classList.remove("diminuido");
    }
    
}
document.addEventListener('click', function(event) {
    var subnav = document.getElementById("sub-nav");
    var meuBotao = document.getElementById("button");
    if(event.target !== subnav && event.target !== meuBotao) {
        subnav.style.display = "none";
            meuBotao.classList.remove("diminuido");
    }
})

subnav.addEventListener("animationend", function() {
    subnav.classList.remove("sub-nav");
});

function mostrarDivDoLink() {
        if(novaDiv.style.display === "none") {
            novaDiv.style.display = "flex";
        } else {
            novaDiv.style.display = "none";
        }
}

novaDiv = document.createElement("div");
novaDiv.setAttribute("id", "div-Filho")
novaDiv.innerHTML = "<h2 class='h2deTestes1'>Teste1</h2>" + "<h2 class='h2deTestes2'>Teste2</h2>" + "<h2 class='h2deTestes3'>Teste3</h2>" + "<h2 class='h2deTestes4'>Teste4</h2>";

var divDoLink = document.getElementById("divDoLink");

divDoLink.appendChild(novaDiv);
novaDiv.style.backgroundColor = "rgb(0, 0, 190)";
novaDiv.style.width = "15em";
novaDiv.style.height = "20em";
novaDiv.style.border = "2px solid white";
novaDiv.style.position = "absolute";
novaDiv.style.display = "none";

novaDiv.onmouseover = function(){
    if(novaDiv.style.display === "flex"){
        novaDiv.style.display = "none";
    }else {
        novaDiv.style.display = "none";
    }
}
novaDiv.onmouseout = function(){
    novaDiv.style.display = "none";
}