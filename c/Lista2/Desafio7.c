#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float A, B, soma, resultado;
    
    printf("Digite o valor de A: ");
    scanf("%f", &A);

    printf("Digite o valor de B: ");
    scanf("%f", &B);

    soma = A+B;
    resultado = (soma * 45) / 100;
    printf("O resultado da operação é: %3.0f",resultado);

}
