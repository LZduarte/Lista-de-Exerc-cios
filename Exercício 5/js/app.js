let base = parseInt(Math.random()*101);
let altura = parseInt(Math.random()*101);
let area = (base + altura) / 2;

console.log(base);
console.log(altura);
console.log(area);

document.getElementById("elBase").textContent = `Base:  ${base}`;
document.getElementById("elAltura").textContent = `Altura:  ${altura}`;
document.getElementById("elArea").textContent = `Área:  ${area}`;