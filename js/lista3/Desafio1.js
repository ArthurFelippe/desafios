const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio1- Escrever um programa para ler as dimensões de um retângulo (base e altura) pelo teclado:

Calcular e escrever a área do retângulo;

Fórmula: Area = base * altura.
*/

rl.question('Digite o valor da base: ', (base) => {
    rl.question('Digite o valor da altura: ', (altura) => {
      let area = base * altura;
     
        console.log(`O valor da área do retângulo é: ${area}`);
      rl.close();
    });
  });