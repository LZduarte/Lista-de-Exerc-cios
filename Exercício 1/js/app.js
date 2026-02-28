let numeroSorteado = parseInt(Math.random()*101);
let sucessor = numeroSorteado + 1;
let antecessor = numeroSorteado - 1;
let dobro = numeroSorteado * 2;
let metade = numeroSorteado / 2;

console.log(numeroSorteado);
console.log(numeroSorteado + 1);
console.log(numeroSorteado - 1);
console.log(numeroSorteado * 2);
console.log(numeroSorteado / 2);

document.getElementById("elNumeroSorteado").textContent = `Número Sorteado: ${numeroSorteado}`;
document.getElementById("elSucessor").textContent = `Sucessor: ${sucessor}`;
document.getElementById("elAntecessor").textContent = `Antecessor: ${antecessor}`;
document.getElementById("elDobro").textContent = `Dobro : ${dobro}`;
document.getElementById("elMetade").textContent = `Metade: ${metade}`;