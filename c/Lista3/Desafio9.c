#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float SalarioMin, SalarioF, QuantSalMin;
    
printf("Digite o valor do salário minimo: ");
scanf("%f", &SalarioMin);
    
printf("Digite o valor do salário do funcionário: ");
scanf("%f", &SalarioF);
    
QuantSalMin = SalarioF / SalarioMin;
    
printf("A quantidade de salário minimo do funcionário é: %2.0f", QuantSalMin);
    
}
