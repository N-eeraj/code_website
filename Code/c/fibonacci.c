#include<stdio.h>
void main()
{
    int limit, first = 0, second = 1, next, i;

    printf("Enter Limit: ");
    scanf("%d", &limit);

    printf("%d\n%d\n", first, second);
    for (i = 2; i < limit; i++)
    {
        next = first + second;
        printf("%d\n", next);
        first = second;
        second = next;
    }
}