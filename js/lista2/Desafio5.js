const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio5- Faça um algoritmo para ler uma variável:

Apresentar sua metade.
*/

rl.question('Digite um número: ', (numero) => {
  
    let metade = parseInt(numero) / 2;
        
        console.log(`A metade do número: ${numero} é: ${metade}`);
      rl.close();
  });