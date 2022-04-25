const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio3- Faça um algoritmo para ler uma variável:

Apresentar seu quadrado.
*/

rl.question('Digite um número: ', (numero) => {
  
    let quadrado = Math.pow(numero,2);
        
        console.log(`O quadrado do número: ${numero} é: ${quadrado}`);
      rl.close();
  });