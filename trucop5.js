// VARIAVEIS GLOBAIS A SEREM USADAS NO SISTEMA
let imgBaralho; // IMAGEM DO BARALHO (COSTA DAS CARTAS)
let mesaWidth = 800; // LARGURA DA MESA
let mesaHeight = 600;// ALTURA DA MESA
let jogadorWidth = 200; // LARGURA DA ÁREA DO JOGADOR
let jogadorHeight = 100; // ALTURA DA ÁREA DO JOGADOR
let centerAreaWidth = 200; // LARGURA DA AREA CENTRAL 
let centerAreaHeight = 100;// ALTURA DA AREA CENTRAL
let inicio=true; // VARIAVEL BOOLENA PARA CONTROLAR SE É A PRIMEIRA CONSTRUÇÃO DE TELA
let j1,r4;

// a biblioteca P5 PERMITE QUE UTILIZEMOS SKETCHS PADRÕES DE DESENHO E SEMPRE TEREMOS
// PRELOAD-SETUP - DRAW são funções que trabalham em comjunto.

//---------------------------------------------------------//
function preload() { // ESTA FUNÇÃO É EXECUTADA ANTES DE SE CARREGAR TODOS OS ITENS DE TELA
  imgBaralho = loadImage('baralho.png'); // Carrega a imagem do baralho (ou use qualquer outra imagem para representar as cartas)
}
function setup() {
    // ESTA FUNÇÃO SETUP É PADRÃO DO SISTEMA P5
  createCanvas(mesaWidth, mesaHeight); //CRIAR TELA
  noLoop(); // garante que a tela será desenhada apenas uma vez
}
function draw() {  // função padrão do P5 obrigatoriamente executa ela com frequencia
  drawTable(); // função criada para desenharmos a tabela da mesa 
  // apresenta jogadores se for inicio
  if (inicio){ // apenas se for inicio
        // Desenha as áreas dos jogadores
         j1=prompt("Qual seu Nome meu corajoso");
        r4=prompt("Qual nome do seu Androíde Amigo");
        drawPlayerArea(100, 100,j1); // envia coordenada x e y e playername 
        drawPlayerArea(mesaWidth - jogadorWidth - 100, 100, "Jogador 2"); // envia coordenada x e y e playername
        drawPlayerArea(100, mesaHeight - jogadorHeight - 100, "Jogador 3"); // envia coordenada x e y e playername
        drawPlayerArea(mesaWidth - jogadorWidth - 100, mesaHeight - jogadorHeight - 100, r4); // envia coordenada x e y e playername
        inico=false};
  drawCenterArea();
  console.log(j1);
console.log(r4);
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
  image(imgBaralho, centerX + centerAreaWidth / 4, centerY + centerAreaHeight / 4, centerAreaWidth / 2, centerAreaHeight / 2);
  rect(centerX, centerY, centerAreaWidth, centerAreaHeight);
  //desenha a area para as 3 cartas no centro da mesa
  for (i=0;i<126;i=i+42){
    fill(34, 139, 187);
    rect(335+i,210,40,60);
    }
 // redesenha a area para as cartas da mão do jogador
 for (i=0;i<126;i=i+52){
    fill(34, 39, 187);
    image(imgBaralho,105+i,202,50,70);
    }
  
    
}


