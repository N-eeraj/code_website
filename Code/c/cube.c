#include<stdio.h>
void main()
{
    float edge;

    printf("Enter Edge: ");
    scanf("%f", &edge);

    printf("Volume: %f", pow(edge, 3));
    printf("\nSurface Area: %f", 6 * pow(edge, 2));
}