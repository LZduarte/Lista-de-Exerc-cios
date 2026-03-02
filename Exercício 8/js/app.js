let numero1 = parseInt(Math.random()*10);
let numero2 = parseInt(Math.random()*10);
let numero3 = parseInt(Math.random()*10);

console.log(numero1, numero2, numero3);
document.getElementById("elNumero1").textContent = `Número 1:  ${numero1}`;
document.getElementById("elNumero2").textContent = `Número 2:  ${numero2}`;
document.getElementById("elNumero3").textContent = `Número 3:  ${numero3}`;

let resultadoequacao;
let resultado = numero1 ** numero1;
document.getElementById('resultado').textContent = `A² : ${numero1} ** ${numero1} = ${resultado}`;
let equacao = resultado + numero2 + numero3;
document.getElementById('equacao').textContent = `A² + bx + c : ${resultado} + ${numero2} + ${numero3} = ${resultadoequacao}`;