#include<stdio.h>
void main()
{
    char num[10];
    int dec = 0, temp, i, j = 0;

    printf("Enter Number: ");
    gets(num);

    for (i = strlen(num) - 1; i >= 0; i--)
    {
        temp = num[i];
        if (temp > 47 && temp < 58)
            temp -= 48;
        else if (temp > 64 && temp < 71)
            temp -= 55;
        else if (temp > 96 && temp < 103)
            temp -= 87;
        else
        {
            printf("\nInvalid Input\n");
            break;
        }
        dec += temp * pow(16, j++);
    }
    printf("%d", dec);
}