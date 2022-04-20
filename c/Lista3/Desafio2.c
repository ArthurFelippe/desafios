#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){

	float Dias, Meses, Anos, IdadeEmDia;

printf("Digite anos: ");
scanf("%f", &Anos);

printf("Digite meses: ");
scanf("%f", &Meses);

printf("Digite dias: ");
scanf("%f", &Dias);

IdadeEmDia = (Anos * 365) + (Meses * 30) + Dias;
printf("A idade em dias é: %3.0f", IdadeEmDia);

}
