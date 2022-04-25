const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio2- Implemente um algoritmo que leia um número:

Exiba seu sucessor.
*/

rl.question('Digite um número: ', (numero) => {

      let sucessor = (parseInt(numero) + 1 );
        
        console.log(`O sucessor do número: ${numero} é: ${sucessor}`);
      rl.close();
  });