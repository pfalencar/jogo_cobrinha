let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBackground(){
    //cor do jogo
    context.fillStyle = "lightgreen";
    //x, y, altura, largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBackground();