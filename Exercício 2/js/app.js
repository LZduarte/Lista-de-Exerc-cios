let nota01 = parseInt(Math.random()*101);
let nota02 = parseInt(Math.random()*101);
let nota03 = parseInt(Math.random()*101);
let nota04 = parseInt(Math.random()*101);
let mediaNotas = nota01 + nota02 + nota03 + nota04;

console.log(nota01);
console.log(nota02);
console.log(nota03);
console.log(nota04);
console.log(mediaNotas);

document.getElementById("elNota01").textContent = `Nota 01:  ${nota01}`;
document.getElementById("elNota02").textContent = `Nota 02:  ${nota02}`;
document.getElementById("elNota03").textContent = `Nota 03:  ${nota03}`;
document.getElementById("elNota04").textContent = `Nota 04:  ${nota04}`;
document.getElementById("elMediaNotas").textContent = `Média das Notas:  ${mediaNotas}`;