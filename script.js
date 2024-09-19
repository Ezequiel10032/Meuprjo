//Variáveis//
//var nome = prompt("  Por favor Digite Seu Nome");
var foguete1 = document.querySelector("#foguete1");
var foguete2= document.querySelector("#foguete2")
var começar = document.getElementById("btniniciar")
var tempo = document.getElementById("tempo")
//ativação 
foguete2.addEventListener("click", () =>
iniciar());
function iniciar() {
  foguete1.style.animationDuration = "4s";
  segundos=16
  
} 

//parar
foguete1.addEventListener("click", () =>
parar());
function parar() {
  foguete1.style.animationDuration = "0s";
} 


foguete2.addEventListener('click', () => conometro()); // Sem parênteses para não chamar a função imediatamente

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
foguete2.style.display="block"
foguete2.style.color="blue"
}

foguete2.addEventListener('click', () => sumir());
function sumir(){
foguete2.style.display="none"
}

