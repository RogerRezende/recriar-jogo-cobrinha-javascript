//variáveis
let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d"); 
let box = 32;
let snake = []; 
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
//função para criar o background do jogo
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}
//função para criar a cobrinha
function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
//chamadas das funções
criarBG();
criarCobrinha();