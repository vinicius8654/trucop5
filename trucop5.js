// VARIAVEIS GLOBAIS A SEREM USADAS NO SISTEMA
let imgBaralho; // IMAGEM DO BARALHO (COSTA DAS CARTAS)
let mesaWidth = 1200; // LARGURA DA MESA
let mesaHeight = 650;// ALTURA DA MESA
let jogadorWidth = 200; // LARGURA DA ÁREA DO JOGADOR
let jogadorHeight = 100; // ALTURA DA ÁREA DO JOGADOR
let centerAreaWidth = 200; // LARGURA DA AREA CENTRAL 
let centerAreaHeight = 100;// ALTURA DA AREA CENTRAL
let inicio=true; // VARIAVEL BOOLENA PARA CONTROLAR SE É A PRIMEIRA CONSTRUÇÃO DE TELA
let j1,r4;
let meiomesa=[];
let turno=[];
let jacliquei=false;
const manilhas = [" diamond"," spade"," heart"," clubs"];
const forcas = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];
let deck = [];
let maoj1=[];
let maoj2=[];
let maoj3=[];
let maoj4=[];
let virada;
let cartaalvo=0;
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
virada= deck.pop();
carta1 = new Sprite();
carta2 = new Sprite();
carta3 = new Sprite();
carta1.scale = .42;
carta1.x=100;
carta1.y=280;
carta1.img = "image/"+maoj1[0]+".png";
carta2.scale = .42;
carta2.x=150;
carta2.y=280;
carta2.img = "image/"+maoj1[1]+".png";
carta3.scale = .42;
carta3.x=210;
carta3.y=280;
carta3.img = "image/"+maoj1[2]+".png";
cartavira= new  Sprite();
cartavira.scale = .40;
cartavira.x=510;
cartavira.y=120;
cartavira.img = "/image/"+virada+".png";
cartaj2= new  Sprite(-50,0);
cartaj3= new  Sprite(-100,0);
cartaj4= new  Sprite(-150,0);

//let ref = vira.slice(0,1);
//console.log("carta referencia "+ref );
//let refvirada = forcas.lastIndexOf(ref);
//if (refvirada==9){
//console.log("Todas as "+forcas[0]+" são fortes .. eita manilha veiia");
//}else{
//console.log("todas as " + forcas[refvirada+1]+" São fortes .. eita manilhada veiaaaaaa uhh hu");
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

     // defino a forma de colisão para carta1
 
}
function Toaqui(){
  console.log("sobre a carta1");
 };
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
// verificar se o mouse foi pressionado
function mousePressed() {
 // o unico que usará o mouse é o Jogador 1 o unico humano, portanto a ação principal se dar[a nesta rotina]
   // clicado sobre carta1
  if (mouseX >=(carta1.x)-40 && mouseX <=(carta1.x)+4 && mouseY>=(carta1.y)-40 && mouseY<=(carta1.y)+4){
  if (confirm(j1+", vai meter este "+maoj1[0]+", mesmo ??") == true){
    alert("tome esta ladrão...")
    cartaalvo=1;
    jacliquei=true;
    carta1.x=(mesaWidth / 2 - centerAreaWidth / 2)+50;
    carta1.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
      meiomesa.push(maoj1[0]);
      let escolha2=Math.floor(Math.random()*(maoj2.length-1));
      let escolha3=Math.floor(Math.random()*(maoj3.length-1));
      let escolha4=Math.floor(Math.random()*(maoj4.length-1));
      cartaj2.img = "image/"+maoj2[escolha2]+".png";
      cartaj2.scale=.42;
      meiomesa.push(maoj2[escolha2]);
      cartaj2.x=(mesaWidth / 2 - centerAreaWidth / 2);
      cartaj2.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
      maoj2.splice(escolha2,1);
      cartaj3.img = "image/"+maoj3[escolha2]+".png";
      cartaj3.scale=.42;
      meiomesa.push(maoj3[escolha3]);
      maoj3.splice(escolha3,1);
      cartaj3.x=(mesaWidth / 2 - centerAreaWidth / 2);
      cartaj3.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
      cartaj4.img = "image/"+maoj4[escolha4]+".png";
      cartaj4.scale=.42;
      maoj4.splice(escolha4,1);
      meiomesa.push(maoj4[escolha4]);
      cartaj4.x=(mesaWidth / 2 - centerAreaWidth / 2);
      cartaj4.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
     console.log(meiomesa);
     alert("agora é calcular qual das cartas é a ganhadora");
     alert("proxima rodada");
    }};

 // clicado sobre carta2
 if (mouseX >=(carta2.x)-40 && mouseX <=(carta2.x)+4 && mouseY>=(carta2.y)-40 && mouseY<=(carta2.y)+4){
  if (confirm(j1+", vai meter este "+maoj1[1]+", mesmo ??") == true){
    alert("tome esta ladrão...")
    cartaalvo=2;
    jacliquei=true;
    carta2.x=(mesaWidth / 2 - centerAreaWidth / 2)+50;
    carta2.y=(mesaWidth / 2 - centerAreaWidth / 2)-100;
    meiomesa.push(maoj1[1]);
    let escolha2=Math.floor(Math.random()*(maoj2.length-1));
    let escolha3=Math.floor(Math.random()*(maoj3.length-1));
    let escolha4=Math.floor(Math.random()*(maoj4.length-1));
    cartaj2.img = "image/"+maoj2[escolha2]+".png";
    cartaj2.scale=.42;
    meiomesa.push(maoj2[escolha2]);
    cartaj2.x=(mesaWidth / 2 - centerAreaWidth / 2);
    cartaj2.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
    maoj2.splice(escolha2,1);
    cartaj3.img = "image/"+maoj3[escolha2]+".png";
    cartaj3.scale=.42;
    meiomesa.push(maoj3[escolha3]);
    maoj3.splice(escolha3,1);
    cartaj3.x=(mesaWidth / 2 - centerAreaWidth / 2);
    cartaj3.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
    cartaj4.img = "image/"+maoj4[escolha4]+".png";
    cartaj4.scale=.42;
    maoj4.splice(escolha4,1);
    meiomesa.push(maoj4[escolha4]);
    cartaj4.x=(mesaWidth / 2 - centerAreaWidth / 2);
    cartaj4.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
   console.log(meiomesa);
   alert("agora é calcular qual das cartas é a ganhadora");
   alert("proxima rodada");
  }};

  // clicado sobre carta3
 if (mouseX >=(carta3.x)-40 && mouseX <=(carta3.x)+4 && mouseY>=(carta3.y)-40 && mouseY<=(carta3.y)+4){
  if (confirm(j1+", vai meter este "+maoj1[2]+", mesmo ??") == true){
    alert("tome esta ladrão...")
    cartaalvo=3;
    jacliquei=true;
    carta3.x=(mesaWidth / 2 - centerAreaWidth / 2)+50;
    carta3.y=(mesaWidth / 2 - centerAreaWidth / 2)-100;
    meiomesa.push(maoj1[2]);
    let escolha2=Math.floor(Math.random()*(maoj2.length-1));
    let escolha3=Math.floor(Math.random()*(maoj3.length-1));
    let escolha4=Math.floor(Math.random()*(maoj4.length-1));
    cartaj2.img = "image/"+maoj2[escolha2]+".png";
    cartaj2.scale=.42;
    meiomesa.push(maoj2[escolha2]);
    cartaj2.x=(mesaWidth / 2 - centerAreaWidth / 2);
    cartaj2.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
    maoj2.splice(escolha2,1);
    cartaj3.img = "image/"+maoj3[escolha2]+".png";
    cartaj3.scale=.42;
    meiomesa.push(maoj3[escolha3]);
    maoj3.splice(escolha3,1);
    cartaj3.x=(mesaWidth / 2 - centerAreaWidth / 2);
    cartaj3.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
    cartaj4.img = "image/"+maoj4[escolha4]+".png";
    cartaj4.scale=.42;
    maoj4.splice(escolha4,1);
    meiomesa.push(maoj4[escolha4]);
    cartaj4.x=(mesaWidth / 2 - centerAreaWidth / 2);
    cartaj4.y=(mesaWidth / 2 - centerAreaWidth / 2)-200;
   console.log(meiomesa);
   alert("agora é calcular qual das cartas é a ganhadora");
   alert("proxima rodada");
  }};
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
  rect(centerX, centerY, centerAreaWidth, centerAreaHeight+10);
  //desenha a area para as 3 cartas no centro da mesa
  
      }
     
function limparmeio(){
 //switch (cartaalvo){
 // case 1: 
 // carta1.x=-100;
 // break;
 // case 2: 
 // carta2.x=-100;
 // break;
 // case 3: 
 // carta3.x=-100;
 // break;
//};
 //cartaj2.x=-100;
 //cartaj3.x=-100;
 //cartaj4.x=-100;
  
}