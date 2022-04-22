const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Desafio1- Construa um programa que:
Desenvolva a lógica de um programa que efetue o cálculo de área de uma circunferência, apresentando a medida da área calculada.
Fórmula: Área = Pi * Raio².
*/

rl.question('Informe o raio: ', (raio) => {
  const PI = Math.PI;

  //const area = PI * (raio * raio);

  let area = PI * Math.pow(parseFloat(raio), 2);

  //console.log("A área da circunferência é: " + area);

  console.log(`A área  da circunferência é: ${area}`);

  //return areaCircunferencia;
 
  rl.close();
});


