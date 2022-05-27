const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio9- Construa um algoritmo para pagamento de comissão de vendedores de peças:

Levando-se em consideração que sua comissão será de 5% do total da venda e que você tem os seguintes dados:

Código do vendedor

Código da peça

Preço unitário da peça 

Quantidade vendida.
*/

rl.question('Digite o código do vendedor: ', (codigoVendedor) => {
    rl.question('Digite o código da peça: ', (codigoPeca) => {
        rl.question('Digite o preço unitário da peça: ', (precoUnitarioPeca) => {
            rl.question('Digite a quantidade vendida: ', (quantidadeVendida) => {
              
    let PxQ =  parseFloat(precoUnitarioPeca) * parseInt(quantidadeVendida);
    let comissao = PxQ * (5 / 100);
        
        console.log(`A comissão que o vendedor ganha é: ${comissao}`);
      rl.close();
  });
});
});
});