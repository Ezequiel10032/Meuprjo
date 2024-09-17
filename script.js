var nome = prompt("  Por favor Digite Seu Nome");
var foguete = document.querySelector(".bi-rocket-takeoff");
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
let f = document.getElementById("btniniciar");
f.addEventListener("click", () => inicio());
function inicio() {
  foguete.style.animationDuration = "0.3s";
  tempo.style.display = "inline";
  segundos = 0;
}
let t = document.getElementById("btniniciar");
t.addEventListener("click", () => mostrar());
var segundos = 0;
function conometro() {
  segundos++;
  document.getElementById("tempo").innerHTML = segundos;
}
setInterval(function () {
  conometro();
}, 1000);

let r = document.getElementById("up");
r.addEventListener("click", () => AVCA());
function AVCA() {
  alert("Novas fases em Breve");
}


