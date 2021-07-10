#include<stdio.h>
#include<stdbool.h>
void main()
{
    int num, hex, temp, i = 0, j;
    char hexD[25] = "";
    bool invalid = false;

    printf("Enter Number: ");
    scanf("%d", &num);

    while (num != 0)
    {
        hex = 0;
        j = 0;
        temp = num % 10000;
        while (temp != 0)
        {
            if (temp % 10 != 0 && temp % 10 != 1)
            {
                invalid = true;
                printf("Invalid Input\n");
                break;
            }
            hex += temp % 10 * pow(2, j++);
            temp /= 10;
        }
        if (hex > 9)
            hex += 55;
        else
            hex += 48;
        hexD[i++] = hex;
        num /= 10000;
    }
    for (i--; i >= 0; i--)
        printf("%c", hexD[i]);
}