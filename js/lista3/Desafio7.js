const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio7- Escreva um algoritmo para ler o salário mensal e o percentual de reajuste:

Calcular o salário final do funcionário;

Escrever o valor do novo salário.
*/

rl.question('Digite o valor do salário mensal: ', (salarioMensal) => {
    rl.question('Digite o valor do reajuste: ', (reajuste) => {

let salarioFinal = salarioMensal;
let novoSalario = salarioFinal + salarioMensal;
    
        console.log(`O salário do funcionário é: ${salarioFinal} e o novo salário é: ${novoSalario}`);
      rl.close();
    });
  });
    