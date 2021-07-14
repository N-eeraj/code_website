#include<stdio.h>
void main()
{
    int limit, i, j;

    printf("Enter Limit: ");
    scanf("%d", &limit);

    if (limit % 2 == 1)
    {
        for (i = 1; i <= limit / 2 + 1; i++)
        {
            for (j = 0; j < limit / 2 - i + 1; j++)
                printf("   ");
            for (j = 0; j < 2 * i - 1; j++)
                printf(" * ");
            printf("\n");
        }
        for (i = limit / 2; i >= 0 + 1; i--)
        {
            for (j = 0; j < limit / 2 - i + 1; j++)
                printf("   ");
            for (j = 0; j < 2 * i - 1; j++)
                printf(" * ");
            printf("\n");
        }
    }
    else
        printf("Enter Odd Number");
}