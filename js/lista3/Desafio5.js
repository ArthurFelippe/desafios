const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio5- Construa um programa onde o usuário vai entrar com um número e com a potência desse número:
Calcular a potência;

Mostrar o número e o resultado;

Exemplo 3⁴ = 81.
*/

rl.question('Digite o número: ', (numero) => {
    rl.question('Digite a potência: ', (potencia) => {

        let resultado = Math.pow(numero,potencia);
        console.log(`O resultado da operação é: ${resultado}`);
      rl.close();
    });
  });
      
    

