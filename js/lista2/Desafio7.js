const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio7- Faça um algoritmo para ler duas variáveis:

Apresentar 45% da soma destas.
*/

rl.question('Digite o valor de A: ', (a) => {
    rl.question('Digite o valor de B: ', (b) => {
    let valorFinal = a + b;
        
        console.log(`A porcentagem dos dois números é: ${valorFinal}`);
      rl.close();
  });
});