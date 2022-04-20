#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float dias, meses, anos, IdadeEmDia;
    
printf("Digite anos: ");
scanf("%f", &anos);
    
printf("Digite meses: ");
scanf("%f", &meses);
    
printf("Digite dias: ");
scanf("%f", &dias);
    
IdadeEmDia = (anos * 365) + (dias * 30) + dias;
printf("A idade em dias é: %3.0f", IdadeEmDia);
    
} 
