#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

    float CodVendedor, CodPeca, PrecoUni, QuantVend, PxQ, comissao;
    
printf("Digite o código do vendedor: ");
scanf("%f", &CodVendedor);

printf("Digite o código da peça:  ");
scanf("%f", &CodPeca);

printf("Digite o preco unitário da peca: ");
scanf("%f", &PrecoUni);

printf("Digite a quantidade de peças vendidas ");
scanf("%f", &QuantVend);

PxQ = PrecoUni * QuantVend;
comissao = (PxQ * 5) / 100;printf("A comissão que o vendedor ganha é:%3.0f",comissao);

}
