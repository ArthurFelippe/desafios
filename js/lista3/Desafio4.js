const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio4- Criar o programa onde o usuário vai entrar com o valor da compra:

A taxa de juros pelo atraso do pagamento;

A quantidade de dias em atraso;

Efetuar o cálculo do valor a pagar;

Fórmula: valorPagar = Valor * (Taxa / 100) * qtdeDiasAtraso).
*/

rl.question('Digite o valor da compra: ', (valorCompra) => {
     rl.question('Digite a tava de juros pelo atraso do pagamento: ', (taxaJuros) => {
        rl.question('Digite a quantidade de dias em atraso: ', (diasAtraso) => {
     
       let valorPagar = valorCompra * (taxaJuros / 100) * diasAtraso;

        console.log(`O valor a pagar é: ${valorPagar}`);
      rl.close();
        });
    });
});