#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

    float salario, inss, salarioFinal;
    
    printf("Digite o valor do salário: ");
    scanf("%f", &salario);

    printf("Digite a porcentagem de desconto do INSS: ");
    scanf("%f", &inss);

    salarioFinal = (salario * inss) / 100;
    printf("O valor retirado do seu salário é: %3.0f", salarioFinal);
    
}
