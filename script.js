//Variáveis//
//var nome = prompt("  Por favor Digite Seu Nome");
var abertura = document.getElementById("txt0")
var header = document.getElementById("header")
var main = document.getElementById("main"
)
var footer = document.getElementById("footer")
var foguete1 = document.querySelector("#foguete1");
var btnliga= document.querySelector("#ligar")
var começar = document.getElementById("btniniciar")
var tempo = document.getElementById
("tempo")
var msg1= document.getElementById("txt2")
var rocket = document.getElementById("rocket");
var pontuação = document.getElementById("pontos")
//Inicialização

alert("Olá, Ezequiel deseja boas vindas. Clique em Super Ezq para Começar!")
abertura.addEventListener("click",  () =>
inicializar())

function inicializar () {
header.style.visibility="visible"
main.style.visibility="visible"
footer.style.visibility="visible"
abertura.style.visibility="hidden"
rocket.style.visibility ="hidden"
}


//mudanças após ativação 
btnliga.addEventListener("click", () =>
iniciar());
function iniciar() {
  foguete1.style.animationDuration = "4s";
  segundos=21
  msg1.style.color="red"
    msg1.style.textDecoration = "line-through";
números = 1
}
btnliga.addEventListener('click', () => sumir());
function sumir(){
btnliga.style.display="none"
}

// sistema de tempo 
btnliga.addEventListener('click', () => conometro()); 
function conometro() {
    if (segundos >0) {
        segundos--;
        tempo.innerHTML = segundos; // Atualizando o valor no HTML
    } else {
        fim(); // Chamando a função fim quando segundos é 0
    }
}
setInterval(function () {
    conometro();
}, 1000);

//sistema de pontos 
foguete1.addEventListener("click", () =>
pontos());

function pontos(){

if (segundos>0) {
        números++;
     pontuação.innerHTML= números 
}
}
setInterval(function () {
    pontos();
}, 100);

//sistema de recorde
 
  


//sistema de quando acabar o tempo 
function fim() {
foguete1.style.animationDuration = "0s";
btnliga.style.display="block"
btnliga.style.color="blue"
msg1.style.color="greenyellow"
msg1.style.textDecoration = "none";


}


