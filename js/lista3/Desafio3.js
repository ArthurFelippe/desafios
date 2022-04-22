const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio3- Faça um programa para calcular a velocidade de um objeto:

O usuário irá fornecer para o programa a velocidade inicial (vi), a aceleração (a) e o tempo (t);

Mostre o valor da velocidade;

Fórmula: v = vi + a * t.
*/

rl.question('Digite o valor da velocidade inicial: ', (vi) => {
    rl.question('Digite o valor da aceleração: ', (a) => {
        rl.question('Digite o valor do tempo: ', (t) => {
            
        let v = (vi + a) * t;

        console.log(`A velocidade é: ${v}`);
      rl.close();
        });
    });
});