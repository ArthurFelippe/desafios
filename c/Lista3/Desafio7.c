#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float salario, PR, SalarioFinal;
    
printf("Digite o valor do salário: ");
scanf("%f", &salario);
    
printf("Digite o percentual de reajuste: ");
scanf("%f", &PR);
    
SalarioFinal = (salario * PR) / 100;
printf("O valor retirado do seu salário é: %3.0f", SalarioFinal);
    
}
