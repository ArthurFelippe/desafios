cmd#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

    float SalarioMinimo, SalarioF, QuantSalMin;
    
    printf("Digite o valor do salário minimo: ");
    scanf("%f", &SalarioMinimo);

    printf("Digite o valor do salário do funcionário: ");
    scanf("%f", &SalarioF);

    QuantSalMin = SalarioF / SalarioMinimo;
    printf("A quantidade de salário minimo do funcionário é: %2.0f", QuantSalMin);
    
}
