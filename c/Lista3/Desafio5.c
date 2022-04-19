#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float numero, potencia, resultado;
    
    printf("Digite o número: ");
    scanf("%f", &numero);
    
    printf("Digite a potencia: ");
    scanf("%f", &potencia);
    
    resultado = pow (numero,potencia);
printf("O resultado da operação é: %3.0f", resultado);
    
}
