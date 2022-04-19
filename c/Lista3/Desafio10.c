#include <stdio.h>
#include <stdlib.h>
#include <math.h>

main(){
    
    float preco, QuantidadeKM, distancia, precoGasto, litrosGastos;
    
    printf("Digite o preço por litro do combústivel: ");
    scanf("%f", &preco);
    
    printf("Digite a quantidade de KM por litro do seu carro: ");
    scanf("%f", &QuantidadeKM);
    
    printf("Digite a distância percorrida: ");
    scanf("%f", &distancia);
    
    litrosGastos = distancia / QuantidadeKM;
    precoGasto = litrosGastos * preco;
    printf("Os litros gastos na corrida são: %3.0f \n O preço gasto é %3.0f", litrosGastos, precoGasto);
}