#include<stdio.h>
void main()
{
    int limit, i, j;

    printf("Enter Limit: ");
    scanf("%d", &limit);

    for (i = 0; i < limit; i++)
    {
        for (j = 0; j < limit - i - 1; j++)
            printf("  ");
        for (j = 0; j < 2 * i + 1; j++)
            printf(" *");
        printf("\n");
    }
}