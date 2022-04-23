const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio8- Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias mostre-a expressa apenas em dias:

Ignore variações de meses como fevereiro.*/

rl.question('Digite a quantidade de anos: ', (anos) => {
    rl.question('Digite a quantidade de meses: ', (meses) => {
        rl.question('Digite a quantidade de dias: ', (dias) => {

        let idadeEmDias = (anos * 365) + (meses * 30) + ( dias * 1);
    
        console.log(`A idade da pessoa em dias é: ${idadeEmDias} dias`);
      rl.close();
        });
    });
 });