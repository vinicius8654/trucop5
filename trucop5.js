// VARIAVEIS GLOBAIS A SEREM USADAS NO SISTEMA
let imgBaralho; // IMAGEM DO BARALHO (COSTA DAS CARTAS)
let mesaWidth = 1000; // LARGURA DA MESA
let mesaHeight = 600;// ALTURA DA MESA
let jogadorWidth = 200; // LARGURA DA ÁREA DO JOGADOR
let jogadorHeight = 100; // ALTURA DA ÁREA DO JOGADOR
let centerAreaWidth = 200; // LARGURA DA AREA CENTRAL 
let centerAreaHeight = 100;// ALTURA DA AREA CENTRAL
let inicio=true; // VARIAVEL BOOLENA PARA CONTROLAR SE É A PRIMEIRA CONSTRUÇÃO DE TELA
let j1,r4;
const manilhas = [" diamond"," spade"," heart"," clubs"];
const forcas = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];
let deck = [];
let maoj1=[];
let maoj2=[];
let maoj3=[];
let maoj4=[];
let imgc1,imgc2,imgc3,imgvira

// PROTOTIPEI UMA FUNÇÃO SHUFFLE para usar várias vezes no código
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

function preparabaralho(){
// preparação variaveis de controle do jogo
for (let naipe of manilhas) {
  for (let forca of forcas) {
      deck.push(forca+naipe);
      deck.shuffle();
  }
}
deck.shuffle();
prompt(deck);
maoj1.push(deck.pop());
maoj1.push(deck.pop());
maoj1.push(deck.pop());
maoj2.push(deck.pop());
maoj2.push(deck.pop());
maoj2.push(deck.pop());
maoj3.push(deck.pop());
maoj3.push(deck.pop());
maoj3.push(deck.pop());
maoj4.push(deck.pop());
maoj4.push(deck.pop());
maoj4.push(deck.pop());
let carta1="/image/"+maoj1[0]+".png";
let carta2= "/image/"+maoj1[1]+".png";
let carta3= "/image/"+maoj1[2]+".png";
imgc1=loadImage(carta1);
imgc2=loadImage(carta2);
imgc3=loadImage(carta3);
let vira= deck.pop();
let cartavira ="/image/"+(vira+".png");
imgvira=loadImage(cartavira);
let ref = vira.slice(0,1);
//console.log("carta referencia "+ref );
let refvirada = forcas.lastIndexOf(ref);
if (refvirada==9){
//console.log("Todas as "+forcas[0]+" são fortes .. eita manilha veiia");
}else{
//console.log("todas as " + forcas[refvirada+1]+" São fortes .. eita manilhada veiaaaaaa uhh hu");
}

}


// a biblioteca P5 PERMITE QUE UTILIZEMOS SKETCHS PADRÕES DE DESENHO E SEMPRE TEREMOS
// PRELOAD-SETUP - DRAW são funções que trabalham em comjunto.

//---------------------------------------------------------//
function preload() { // ESTA FUNÇÃO É EXECUTADA ANTES DE SE CARREGAR TODOS OS ITENS DE TELA
   imgBaralho = loadImage('baralho.png'); // Carrega a imagem do baralho (ou use qualquer outra imagem para representar as cartas)
   //c1j1=loadImage("/image/"+maoj1+".png");
  }
function setup() {
    // ESTA FUNÇÃO SETUP É PADRÃO DO SISTEMA P5
  createCanvas(mesaWidth, mesaHeight); //CRIAR TELA
   

}
function draw() {  // função padrão do P5 obrigatoriamente executa ela com frequencia
  drawTable(); // função criada para desenharmos a tabela da mesa 
  // apresenta jogadores se for inicio
  if (inicio){ // apenas se for inicio
        // Desenha as áreas dos jogadores
         j1=prompt("Qual seu Nome meu corajoso");
        r4=prompt("Qual nome do seu Androíde Amigo");
        preparabaralho();
        inicio=false};
        drawPlayerArea(100, 100,j1); // envia coordenada x e y e playername 
        drawPlayerArea(mesaWidth - jogadorWidth - 100, 100, "Jogador 2"); // envia coordenada x e y e playername
        drawPlayerArea(100, mesaHeight - jogadorHeight - 100, "Jogador 3"); // envia coordenada x e y e playername
        drawPlayerArea(mesaWidth - jogadorWidth - 100, mesaHeight - jogadorHeight - 100, r4); // envia coordenada x e y e playername
        drawCenterArea();

}
//------------------------------------------------------//

// funções que auxiliam o fluxo principal
function drawTable() {
  // Desenha a mesa como um retângulo preenchido
  fill(34, 139, 34); // Verde para a mesa
  rect(0, 0, mesaWidth, mesaHeight);
}

function drawPlayerArea(x, y, playerName) {
  // Desenha a área do jogador como um retângulo preenchido com o nome do jogador
  // repare que a função ´unica para todos os jogadores e recebe x, y e playername
  fill(255); // Branco para a área do jogador
  rect(x, y, jogadorWidth, jogadorHeight);
  fill(0); // Preto para o texto
  textSize(16);
  textAlign(CENTER, CENTER);
  text(playerName, x + jogadorWidth / 2, y + jogadorHeight / 2);
}

function drawCenterArea() {
  let centerX = mesaWidth / 2 - centerAreaWidth / 2;
  let centerY = mesaHeight / 2 - centerAreaHeight / 2;

  // Desenha a área central como um retângulo sem preenchimento
  noFill();
  stroke(0); // Cor da borda preta
  image(imgvira, centerX +10, centerY + 20, 80,90);
  rect(centerX, centerY, centerAreaWidth, centerAreaHeight+10);
  //desenha a area para as 3 cartas no centro da mesa
  for (i=0;i<126;i=i+42){
    fill(34, 139, 187);
    rect(335+i,210,40,60);
    }
    stroke(0); // Cor da borda preta
    image(imgc1,50,200,70,100);
    image(imgc2,125,200,70,100);
    image(imgc3,200,200,70,100);
      }

