const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio7- Faça um programa que receba o valor do salário mínimo:

O valor do salário de um funcionário;

Calcule e mostre a quantidade de salários mínimos que ganha esse funcionário.
*/

rl.question('O valor do salário do salário mínimo é: ', (salarioMinimo) => {
    rl.question('O valor do salário do funcionário é: ', (salarioFuncionario) => {
        //let quantidadeSalario = salarioFuncionario / salarioMinimo;
    
        console.log(`A quantidade de salários minímos do funcionário é: ${salarioFuncionario / salarioMinimo}`);
      rl.close();
    });
  });