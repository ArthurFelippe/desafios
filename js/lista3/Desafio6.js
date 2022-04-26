const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio6- Faça um algoritmo que leia dois números inteiros e efetue as operações de adição, subtração, multiplicação e divisão de A por B:

Apresentar ao final os quatro resultados obtidos.
*/

rl.question('Digite o valor de A: ', (a) => {
    rl.question('Digite o valor de B: ', (b) => {

const soma = a + b;
const subtracao = a - b;
const divisao = a / b;
const multiplicacao = a * b;  
    
        console.log(`Soma: ${soma}, Subtração: ${subtracao}, Divisão: ${divisao}, Multiplicação: ${multiplicacao}`);
      rl.close();
    });
  });
    



   
