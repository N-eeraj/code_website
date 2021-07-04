#include<stdio.h>
void main()
{
    int num, dec = 0, temp, i = 0;

    printf("Enter Number: ");
    scanf("%d", &num);

    while (num != 0)
    {
        temp = num % 10;
        if (temp != 0 && temp!= 1)
        {
            printf("\nInvalid Input\n");
            break;
        }
        dec += temp * pow(2, i++);
        num /= 10;
    }
    printf("%d", dec);
}