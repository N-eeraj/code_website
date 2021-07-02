#include<stdio.h>
void main()
{
    float num1, num2;
    int operation;

    printf("Enter First Number: ");
    scanf("%f", &num1);
    printf("Enter Second Number: ");
    scanf("%f", &num2);
    printf("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter Operation Number: ");
    scanf("%d", &operation);

    switch (operation)
    {
        case 1:
            printf("%f", num1 + num2);
            break;
        case 2:
            printf("%f", num1 - num2);
            break;
        case 3:
            printf("%f", num1 * num2);
            break;
        case 4:
            printf("%f", num1 / num2);
            break;
        default:
            printf("Invalid Option");
    }
}