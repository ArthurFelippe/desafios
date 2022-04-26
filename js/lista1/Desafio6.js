const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio6- Elaborar um programa que calcule o salário de um funcionário:

O usuário deverá entrar com o valor do salário;

O percentual de desconto do INSS.
*/

rl.question('Valor do salário: ', (valorSalario) => {
    rl.question('Valor de desconto do INSS: ', (descontoINSS) => {
      
        /*let salarioDesconto = valorSalario * descontoINSS / 100;
        let salarioFinal = valorSalario - salarioDesconto;*/
        let salarioFinal = valorSalario * (1-(descontoINSS / 100));

        console.log(`O salário do funcionário é: ${salarioFinal}`);
      rl.close();
    });
  });


