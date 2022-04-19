#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define pi 3.14

main(){ 

float a, r;

printf("digite o valor de raio: ");
scanf("%f", &r);

a = pi * pow (r,2);
printf("\n");
printf("Valor da Area é: %.2f",a);

}
