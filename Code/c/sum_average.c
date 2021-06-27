#include<stdio.h>
void main()
{
    int limit, sum = 0, i;

    printf("Enter Limit: ");
    scanf("%d", &limit);

    for (i = 1; i <= limit; i++)
        sum += i;

    printf("Sum: %d\n", sum);
    printf("Average: %f", sum * 1.0 / limit);
}