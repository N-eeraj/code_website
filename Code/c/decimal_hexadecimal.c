#include<stdio.h>
void main()
{
    int num, hex, i = 0, j;
    char hexD[25] = "";

    printf("Enter Number: ");
    scanf("%d", &num);

    while (num != 0)
    {
        hex = num % 16;
        if (hex > 9)
            hex += 55;
        else
            hex += 48;
        hexD[i++] = hex;
        num /= 16;
    };
    for (j = i - 1; j >= 0; j--)
        printf("%c", hexD[j]);
}