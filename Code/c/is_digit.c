#include<stdio.h>
void main()
{
    char input;

    printf("Enter Input: ");
    input = getchar();

    if (isdigit(input))
        printf("Is Digit");
    else
        printf("Is not Digit");
}