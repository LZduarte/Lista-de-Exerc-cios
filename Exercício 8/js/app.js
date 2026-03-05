
let numero1 = parseInt(Math.random() * 10); 
let numero2 = parseInt(Math.random() * 10); 
let numero3 = parseInt(Math.random() * 10); 

let x = numero1;

let termoA = numero1 * (x ** 2); 
let termoB = numero2 * x; 
let resultadoFinal = termoA + termoB + numero3; 

document.getElementById("elNumero1").textContent = `Número 1 (A): ${numero1}`;
document.getElementById("elNumero2").textContent = `Número 2 (B): ${numero2}`;
document.getElementById("elNumero3").textContent = `Número 3 (C): ${numero3}`;

document.getElementById('resultado').textContent = `Cálculo de Ax²: ${numero1} * (${x}²) = ${termoA}`;
document.getElementById('equacao').textContent = `Resultado Final (${termoA} + ${termoB} + ${numero3}) = ${resultadoFinal}`;

console.log("Valores:", numero1, numero2, numero3, "X:", x);
console.log("Resultado:", resultadoFinal);
