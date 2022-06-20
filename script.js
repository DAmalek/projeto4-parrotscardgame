let identificador = [1,1,2,2,3,3,4,4,5,5,6,6,7,7]; 
const cartas = document.querySelectorAll("div.card");

function userBurro(){
    x = prompt("escolha quantas cartas quer jogar, de 4 a 14")

    if (x%2 !== 0){
        alert("burro tenta de novo");
        userBurro();
    }if (x < 4){
        alert("burro tenta de novo");                           
        userBurro();
    }if (x > 14){
        alert("burro tenta de novo");
        userBurro();
    }
    for (i=0;i<x;i++){
        cartas[i].classList.add("visivel")
    }
}
userBurro()



function virada(elemento){
    const virado = elemento.classList.contains("visible");

    if (virado) {
        elemento.classList.remove("visible")
    } else {
        elemento.classList.add("visible")
    }
}

function Dgame(){
    //fazer com que as cartas iguais fiquem viradas, e diferentes não.
    let cartasViradas = document.querySelectorAll(".visible")
    if (cartasViradas[0].querySelector("img .visible").src == cartasViradas[0].querySelector("img .visible").src) {
        console.log("ok")

    }

    
}

function desvirador(){
    
    for (i=0;i<cartas.length;i++){
        cartas[i].classList.remove("visible")
    }
    desvirador()

}