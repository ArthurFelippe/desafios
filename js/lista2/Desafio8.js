const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
8- Faça um algoritmo para ler três variáveis (A,B,C):

Apresentar o resultado;

Fórmula: D = A + C - B.
*/

rl.question('Digite o valor de A: ', (a) => {
    rl.question('Digite o valor de B: ', (b) => {
        rl.question('Digite o valor de C: ', (c) => {
    let D = a+c-b;
        
        console.log(`O resultado da operação A + C - B é: ${D}`);
      rl.close();
  });
});
});