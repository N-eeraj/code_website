#include<stdio.h>
void main()
{
    float radius;

    printf("Enter Radius: ");
    scanf("%f", &radius);

    printf("Area: %f", 3.14 * radius * radius);
    printf("\nCircumference : %f", 6.28 * radius);
}