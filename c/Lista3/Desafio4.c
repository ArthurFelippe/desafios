#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float valor, juros, dias, ValorFinal;
    
    printf("Digite o valor da compra: ");
    scanf("%f", &valor);
    
    printf("Digite o valor de juros: ");
    scanf("%f", &juros);
    
    printf("Digite os dias de atraso: ");
    scanf("%f", &dias);

    ValorFinal = valor + (valor * (juros / 100) * dias);
    printf("O valor a pagar é: %3.0f", ValorFinal);
    
}
