


// na função setup definimos as configurações de largura(sempre vem primeiro) e altura
function setup() {
    
    createCanvas(700, 400);

}

//na função definimos de desenho definimos o que será exibido
function draw(params) {
    
    background(130);
    background(imagemDaEstrada);
    // o image permite manipular o objeto no eixo x(da esquerda para a direita) e y(de cima para baixo) com tambem a largura(w) e altura(h)
    image(imagemDoMascote, xMascote, yMascote, 40, 40);
    mostrarCarros();
    movimentoCarro();
    movimentoMascote();
    mostrarMascote();
    incluirPontos();
    verificaColisao();
}

 