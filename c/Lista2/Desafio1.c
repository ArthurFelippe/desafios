#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){float EstoqueMedio, QuantMin, QuantMax;

printf("Digite a quantidade mínima de peça: ");
scanf("%f", &QuantMin);

printf("Digite a quantidade máxima de peça: ");
scanf("%f", &QuantMax);

EstoqueMedio = (QuantMin + QuantMax) / 2;
printf("O estoque médio de peças é: %3.0f", EstoqueMedio);
    
}
