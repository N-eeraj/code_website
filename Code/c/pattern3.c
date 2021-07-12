#include<stdio.h>
void main()
{
    int limit, i, j;

    printf("Enter Limit: ");
    scanf("%d", &limit);

    for (i = 1; i < limit; i++)
    {
        for (j = 0; j < i; j++)
            printf("* ");
        printf("\n");
    }
    for (i = limit; i > 0; i--)
    {
        for (j = i; j > 0; j--)
            printf("* ");
        printf("\n");
    }
}