#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

    float NumeroAula, ValorAula, Salario;
    
    printf("Digite o número de aulas mensais: ");
    scanf("%f", &NumeroAula);
    printf("Digite o valor das aulas: ");
    scanf("%f", &ValorAula);
    Salario = NumeroAula * ValorAula;
    printf("O salario é: %3.0f",Salario);
}