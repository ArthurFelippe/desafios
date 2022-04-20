#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

	float Area, Base, Altura;

printf("Digite a base do retângulo: ");
scanf("%f", &Base);

printf("Digite a altura do retângulo ");
scanf("%f", &Altura);

Area = Base * Altura;
printf("A area do retângulo é:  %3.0f",Area);

}
