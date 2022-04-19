#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

    int A, B, QA, QB, soma1, soma2;
    
    printf("Digite o número A: ");
    scanf("%i", &A);printf("Digite o número B: ");
    scanf("%i", &B);QA = pow (A,2);
    
    QB = pow (B,2);
    soma1 = A + B;soma2 = QA + QB;
    printf("A soma dos números A e B são: %i", soma1);
    printf("\n");
printf("A soma dos quadrados dos números de A e B são: %i", soma2);
    }
