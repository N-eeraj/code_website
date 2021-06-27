#include<stdio.h>
void main()
{
    int num, i;

    printf("Enter Number: ");
    scanf("%d", &num);

    for (i = 1; i < 11; i++)
        printf("%d x %d = %d\n", num, i, num * i);
}