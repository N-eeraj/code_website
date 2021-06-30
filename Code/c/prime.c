#include<stdio.h>
void main()
{
    int num, i;
    char prime[10] = "Prime";

    printf("Enter Number: ");
    scanf("%d", &num);

    for (i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            strcpy(prime, "Not Prime");
            break;
        }
    }
    printf("%s", prime);
}