#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float vi, a, t, v;
    
    printf("Digite a velocidade inicial: ");
    scanf("%f", &vi);
    
    printf("Digite a aceleração: ");
    scanf("%f", &a);
    
    printf("Digite o tempo: ");
    scanf("%f", &t);
    v = vi + a * t;printf("A velocidade é: %3.0f", v);
    
}

