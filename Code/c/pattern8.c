#include<stdio.h>
void main()
{
    int limit, i, j;

    printf("Enter Limit: ");
    scanf("%d", &limit);

    for (i = limit; i > 0; i--)
    {
        for (j = 0; j < limit - i; j++)
            printf("  ");
        for (j = 0; j < 2 * i - 1; j++)
            printf(" *");
        printf("\n");
    }
}