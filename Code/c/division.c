#include<stdio.h>
void main()
{
    int num1, num2;

    printf("Enter Dividend: ");
    scanf("%d", &num1);
    printf("Enter Divisor: ");
    scanf("%d", &num2);

    printf("Quotient: %d\n", num1 / num2);
    printf("Remainder: %d", num1 % num2);
}