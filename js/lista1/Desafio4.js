const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Desafio4- Construa um programa que:

Leia 2 números inteiros A e B;

Calcule o quadrado para cada um;

Somar os dois;

Mostrar os resultados.
*/
 
rl.question('Informe o valor de A: ', (a) => {
    rl.question('Informe o valor de B: ', (b) => {
      
      const quadradoA = Math.pow(a,2);
      const quadradoB = Math.pow(b,2);
      const soma = quadradoA + quadradoB;
      
      console.log(`A soma do quadrado A(${quadradoA}) + quadrado B(${quadradoB}): ${soma}`);
      rl.close();
    });
  });

