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
var rocket = document.getElementById("rocket")

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


//ativação 
btnliga.addEventListener("click", () =>
iniciar());
function iniciar() {
  foguete1.style.animationDuration = "4s";
  segundos=16
  msg1.style.color="red"
    msg1.style.textDecoration = "line-through";
} 


//parar
foguete1.addEventListener("click", () =>
parar());
function parar() {
  foguete1.style.animationDuration = "0s";
} 


btnliga.addEventListener('click', () => conometro()); // Sem parênteses para não chamar a função imediatamente

function conometro() {
    if (segundos > 0) {
        segundos--;
        tempo.innerHTML = segundos; // Atualizando o valor no HTML
    } else {
        fim(); // Chamando a função fim quando segundos é 0
    }
}
setInterval(function () {
    conometro();
}, 1000);

function fim() {
foguete1.style.animationDuration = "0s";
btnliga.style.display="block"
btnliga.style.color="blue"
msg1.style.color="greenyellow"
    msg1.style.textDecoration = "none";
}

btnliga.addEventListener('click', () => sumir());
function sumir(){
btnliga.style.display="none"
}

