#include<stdio.h>
void main()
{
    int num, binary = 0, i = 0;

    printf("Enter Number: ");
    scanf("%d", &num);

    do
    {
        binary += (num % 2) * pow(10, i);
        num /= 2;
        i++;
    } while (num != 0);
    printf("%d", binary);
}