const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Desafio3- Construa um programa que:

Leia a cotação do dólar;

Leia um valor em dólares;

Converta esse valor para Real;

Mostre o resultado.

Fórmula: Valor_Real = cot*valor_dolar.
*/

rl.question('Informe a cotação do dólar: ', (cot) => {
  rl.question('Informe o valor em dólares: ', (valor) => {

    const real = cot * valor;
    
    console.log(`O valor em reais é: ${real}`);
    rl.close();
  });
});
