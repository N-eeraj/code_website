#include<stdio.h>
void main()
{
    int input1, input2, temp;

    printf("Enter First Input: ");
    scanf("%d", &input1);
    printf("Enter Second Input: ");
    scanf("%d", &input2);

    printf("Before Swapping\nInput 1: %d, Input 2: %d", input1, input2);
    temp = input1;
    input1 = input2;
    input2 = temp;
    printf("\nAfter Swapping\nInput 1: %d, Input 2: %d", input1, input2);
}