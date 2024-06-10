//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

function setup() {
  createCanvas(600, 400);
}

//variáveis do oponente

let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo 

let meusPontos = 0;
let pontosOponente = 0;

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcarPontos();

}

function mostraBolinha(){
  circle(xBolinha , yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0) {

        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y) {
rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){

  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
   }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
    }
}

function colisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }

}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
}

function marcarPontos(){
  if (xBolinha > 585){
    meusPontos += 1;
  }
  if (xBolinha < 12){
    pontosOponente += 1;
  }
}
