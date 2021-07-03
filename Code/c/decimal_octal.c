#include<stdio.h>
void main()
{
    int num, oct = 0, i = 0;

    printf("Enter Number: ");
    scanf("%d", &num);

    do
    {
        oct += (num % 8) * pow(10, i);
        num /= 8;
        i++;
    } while (num != 0);
    printf("%d", oct);
}