#include<stdio.h>
void main()
{
    int num, dec = 0, temp, i = 0;

    printf("Enter Number: ");
    scanf("%d", &num);

    while (num != 0)
    {
        temp = num % 10;
        if (temp > 7 || temp < 0)
        {
            printf("\nInvalid Input\n");
            break;
        }
        dec += temp * pow(8, i++);
        num /= 10;
    }
    printf("%d", dec);
}