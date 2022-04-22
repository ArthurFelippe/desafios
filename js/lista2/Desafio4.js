const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio4- Faça um algoritmo para ler uma variável:

Apresentar seu cubo.
*/

rl.question('Digite um número: ', (numero) => {
    let cubo = Math.pow(numero,3);
        
        console.log(`O cubo do número: ${numero} é: ${cubo}`);
      rl.close();
  });