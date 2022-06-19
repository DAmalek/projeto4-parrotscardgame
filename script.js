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
}
userBurro()

