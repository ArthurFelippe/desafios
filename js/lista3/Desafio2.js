const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio2- Faça um programa que leia a idade de uma pessoa em anos, meses e dias:

Exemplo: 12 anos, 5 meses e 3 dias;

Escrever a idade dessa pessoa só em dias;

Considerar ano igual a 365 dias e mês igual a 30 dias;

Mostrar ao final a idade em dias.
*/
rl.question('Digite a quantidade de anos: ', (anos) => {
    rl.question('Digite a quantidade de meses: ', (meses) => {
        rl.question('Digite a quantidade de dias: ', (dias) => {

        let idadeEmDias = (anos * 365) + (meses * 30) + ( dias * 1);
    
        console.log(`A idade da pessoa em dias é: ${idadeEmDias} dias`);
      rl.close();
        });
    });
 });