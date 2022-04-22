const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

/*
Desafio5- Elaborar um programa que calcule o salário de um professor:

O usuário deverá entrar com o número de aulas dadas;

O valor da hora aula.
*/

rl.question('Informe o número de horas aula dada: ', (numeroHorasAula) => {
    rl.question('Informe o valor de hora aula: ', (valorHoraAula) => {
        let salarioProfessor = numeroHorasAula * valorHoraAula;
        console.log(`O salário do professor é: ${salarioProfessor}`);
      rl.close();
    });
  });
