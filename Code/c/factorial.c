#include<stdio.h>
void main()
{
    int input;

    printf("Enter Input: ");
    scanf("%d", &input);

    printf("%d", fact(input));
}

int fact(num)
{
    int factorial = 1;

    if (num == 1)
        return 1;
    factorial = num * fact(num - 1);

    return factorial;
}