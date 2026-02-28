let salario = 1500;
let comissao = (parseInt(Math.random()*201)*35);
let total = comissao + salario;

console.log(salario);
console.log(comissao);
console.log(total);

document.getElementById("elSalario").textContent = `Salário:  ${salario}`;
document.getElementById("elComissao").textContent = `Comissão:  ${comissao}`;
document.getElementById("elTotal").textContent = `Total recebido no fim do mês:  ${total}`;