let horasTrabalhadas = parseInt(Math.random()*251);
let dependentesFuncionario = parseInt(Math.random()*7);
let salario = (horasTrabalhadas * 80) + dependentesFuncionario;
let inss = salario / 91.5;
let ir = salario / 95;
let salariobruto = (salario - inss) - ir;


console.log(horasTrabalhadas);
console.log(dependentesFuncionario);
console.log(salario);
console.log(inss, ir, salariobruto);


document.getElementById("elHorasTrabalhadas").textContent = `Horas de Trabalho:  ${horasTrabalhadas}`;
document.getElementById("elDependentesFuncionario").textContent = `Dependentes dos Funcionários:  ${dependentesFuncionario}`;
document.getElementById("elSalario").textContent = `Salário:  ${salario}`;
document.getElementById("elInss").textContent = `INSS:  ${inss}`;
document.getElementById("elIr").textContent = `IR:  ${ir}`;
document.getElementById("elSalarioBruto").textContent = `Salário Bruto:  ${salariobruto}`;