#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float x, Cx;

printf("Digite o número: ");
scanf("%f", &x);

Cx = pow (x,3);
printf("O número elevado ao cubo é: %3.0f",Cx);

}
