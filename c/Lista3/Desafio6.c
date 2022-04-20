#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    int A = 10, B = 5;

    float adicao, subtracao, divisao, multiplicacao;
    
printf("Selecione a operação: ");
printf("\n");
printf("\n");

adicao = A + B;
subtracao = A -B;
divisao = A / B;
multiplicacao = A * B;

printf("\n");
printf("A adição de X + Y = %3.0f", adicao);
printf("\n");
printf("A subtração de X - Y = %3.0f", subtracao);
printf("\n");
printf("A divisão de X / Y = %3.0f", divisao);
printf("\n");
printf("A multiplicação de X * Y = %3.0f", multiplicacao);
    
}
