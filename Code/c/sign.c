#include<stdio.h>
void main()
{
    float num;

    printf("Enter Number: ");
    scanf("%f", &num);

    if (num < 0)
        printf("Negative");
    else if (num > 0)
        printf("Positive");
    else
        printf("Zero");
}