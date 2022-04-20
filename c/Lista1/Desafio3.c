#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

    float cot, dolar, real;
    
    printf("Digite a cotação do dolar: ");
    scanf("%f", &cot);printf("Digite o valor em dolar: ");
    scanf("%f", &dolar);

	real = cot * dolar;
    printf("Valor em real é: %3.0f \n", real);
    
}
