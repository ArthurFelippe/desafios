const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Faça um algoritmo para ler uma variável:

Apresentar 25% da mesma.
*/

rl.question('Digite um número: ', (numero) => {
  
    let umQuarto = parseInt(numero) * 0.25;
        
        console.log(`25% do número: ${numero} é: ${umQuarto}`);
      rl.close();
  });