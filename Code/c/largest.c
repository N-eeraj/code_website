#include<stdio.h>
void main()
{
    int limit, i;
    float input, largest;

    printf("Enter Limit: ");
    scanf("%d", &limit);
    for(i = 0; i < limit; i++)
    {
        printf("Enter Input: ");
        scanf("%f", &input);
        if (i == 0 || largest < input)
            largest = input;
    }

    printf("%f", largest);
}