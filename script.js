//Variáveis//
var nome = prompt("  Por favor Digite Seu Nome");
var foguete = document.querySelector(".bi-rocket-takeoff");
var começar = document.getElementById("btniniciar")


foguete.addEventListener("click", () => Voar());
function voar() {
  foguete.style.animationDuration = "4s";
  tempo.style.display = "none";
}
foguete.addEventListener("click", () => aviso());
function aviso() {
  alert(
    `${nome} VOCÊ CONSEGUIU CONCLUIR O NIVEL 1 EM ${segundos} SEGUNDOS. PARABÉNS,ZEKA DESEJA BOA SORTE;`
  );
}
começar.addEventListener("click", () => inicio());
function inicio() {
  foguete.style.animationDuration = "0.3s";
  tempo.style.display = "inline";
  segundos = 0;
}

começar.addEventListener("click", () => mostrar());
var segundos = 0;
function conometro() {
  segundos++;
  document.getElementById("tempo").innerHTML = segundos;
}
setInterval(function () {
  conometro();
}, 1000);



