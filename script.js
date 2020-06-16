let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";


function criarBackground(){
    //cor do jogo
    context.fillStyle = "lightgreen";
    //x, y, altura, largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update); 

function update (event) {
    if(event.keyCode == 37 && direction != "left") {
        //37 é o codigo da tecla que vai pra direita
        direction = "left";
    }
    if(event.keyCode == 38 && direction != "up") {
        direction = "up";
    }
    if(event.keyCode == 39 && direction != "right") {
        direction = "right";
    }
    if(event.keyCode == 40 && direction != "down") {
        direction = "down";
    }
}

function iniciarJogo() {
    criarBackground();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;

    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box; 

    snake.pop();
     
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //método que sempre acrescenta um elemento no começo 
    //do vetor.
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);


