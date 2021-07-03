#include<stdio.h>
void main()
{
    int base, exponent, answer;

    printf("Enter Base: ");
    scanf("%d", &base);
    printf("Enter Exponent: ");
    scanf("%d", &exponent);

    answer = pow(base, exponent);
    printf("%d", answer);
}