#include<stdio.h>
void main()
{
    int limit, i, j;

    printf("Enter Limit: ");
    scanf("%d", &limit);

    for (i = limit; i > 0; i--)
    {
        for (j = i; j > 0; j--)
            printf("* ");
        printf("\n");
    }
}