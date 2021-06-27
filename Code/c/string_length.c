#include<stdio.h>
void main()
{
    char input[25];

    printf("Enter Input: ");
    gets(input);

    printf("%d", strlen(input));
}