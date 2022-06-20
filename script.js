let contador = 0 
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


    if (!virado) {
        elemento.classList.add("visible")
        contador++
        console.log(contador)
    } 
    if (contador === 2){
        Dgame();
    }
}

function Dgame(){
    //fazer com que as cartas iguais fiquem viradas, e diferentes não.

    let cartasViradas = document.querySelectorAll(".visible");
    if(cartasViradas[0].querySelector(" img").scr === cartasViradas[1].querySelector(" img").scr){
        console.log("funfou")
    }
    
    
}


function desvirador(){
    
    for (i=0;i<cartas.length;i++){
        cartas[i].classList.remove("visible")
    }
    desvirador()

}