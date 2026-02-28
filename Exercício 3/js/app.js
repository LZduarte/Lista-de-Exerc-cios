let celcius = parseInt(Math.random()*101);
let fahrenheit = parseInt(celcius * (9/5) + 32);

console.log(celcius);
console.log(fahrenheit);

document.getElementById("elCelcius").textContent = `Celcius:  ${celcius}`;
document.getElementById("elFahrenheit").textContent = `Fahrenheit:  ${fahrenheit}`;