#include<stdio.h>
void main()
{
    int num1, num2, num, gcd = 1, i;

    printf("Enter First Number: ");
    scanf("%d", &num1);
    printf("Enter Second Number: ");
    scanf("%d", &num2);

    num = num1 < num2 ? num1: num2;
    for (i = 2; i <= num; i++)
    {
        if (num1 % i == 0 && num2 % i == 0)
            gcd = i;
    }
    printf("%d", gcd);
}