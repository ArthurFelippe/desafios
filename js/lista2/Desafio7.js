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
      
    let valorFinal = (parseInt(a) + parseInt(b)) * 0.45;
        
        console.log(`A porcentagem dos dois números é: ${valorFinal}`);
      rl.close();
  });
});