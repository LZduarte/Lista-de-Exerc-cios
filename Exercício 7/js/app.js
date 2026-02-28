let peso = parseInt(Math.random()*201);
let emagreceu = parseInt((peso * 0.2)+peso);
let engordou = parseInt(peso - (peso * 0.2))


console.log(peso);
console.log(emagreceu);
console.log(engordou)


document.getElementById("elPeso").textContent = `Peso:  ${peso}`;
document.getElementById("elEmagreceu").textContent = `Emagreceu 20%:  ${emagreceu}`;
document.getElementById("elEngordou").textContent = `Engordou 20%:  ${engordou}`;