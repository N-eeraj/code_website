#include<stdio.h>
void main()
{
    int num, length = 1;

    printf("Enter Number: ");
    scanf("%d", &num);

    while (num / 10 != 0)
    {
        num /= 10;
        length++;
    }
    printf("%d", length);
}