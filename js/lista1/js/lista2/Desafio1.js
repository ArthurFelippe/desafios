const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio1- Faça um algoritmo para:

Calcular o estoque médio de uma peça;

Fórmula: ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) / 2.
*/

rl.question('Quantidade Máxima: ', (quantidadeMaxima) => {
    rl.question('Quantidade Mínima: ', (quantidadeMinima) => {
      let estoqueMedio = quantidadeMaxima + quantidadeMinima /2
        
        console.log(`Estoque médio: ${estoqueMedio}`);
      rl.close();
    });
  });

