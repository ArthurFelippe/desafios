const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio8- Faça um programa que receba o preço por litro de um combustível:

A quantidade de quilômetros por litro de um determinado carro;

A distância a percorrer desejada;

Seu programa deverá exibir quantos litros serão necessários para percorrer esta distância e quanto será gasto.
*/

rl.question('O preço do litro de um combustível é: ', (valorLitroCombustivel) => {
    rl.question('A quantidade de quilômetros que o carro faz por litro é: ', (quantidadeKM) => {
        rl.question('Distância percorrida: ', (distanciaPercorrida) => {
          
      let quantidadeLitros = distanciaPercorrida / quantidadeKM;
      let valorGasto = quantidadeLitros * valorLitroCombustivel;
        
        console.log(`Serão necessários: ${quantidadeLitros} litros e o valor gasto é: ${valorGasto} reais`);
      rl.close();
    });
  });
});