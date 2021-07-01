#include<stdio.h>
void main()
{
    int num1, num2, num1M, num2M;

    printf("Enter First Number: ");
    scanf("%d", &num1);
    printf("Enter Second Number: ");
    scanf("%d", &num2);

    num1M = num1;
    num2M = num2;
    while (num1M != num2M)
    {
        if (num1M < num2M)
            num1M += num1;
        else
            num2M += num2;
    }
    printf("%d", num1M);
}