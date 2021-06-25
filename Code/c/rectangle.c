#include<stdio.h>
void main()
{
    float length, width;

    printf("Enter Length: ");
    scanf("%f", &length);
    printf("Enter Width: ");
    scanf("%f", &width);

    printf("Area: %f", length * width);
    printf("\nPerimeter: %f", 2 * (length + width));
}