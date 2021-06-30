#include<stdio.h>
#include<stdbool.h>
void main()
{
    int range, i, j;
    bool prime;

    printf("Enter Range: ");
    scanf("%d", &range);

    for (i = 2; i <= range; i++)
    {
        prime = true;
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                prime = false;
                break;
            }
        }
        if (prime)
            printf("%d\n", i);
    }
}