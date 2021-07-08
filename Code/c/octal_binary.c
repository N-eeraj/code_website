#include<stdio.h>
void main()
{
    int num, bin = 0, temp, i = 0;

    printf("Enter Number: ");
    scanf("%d", &num);

    while (num != 0)
    {
        temp = num % 10;
        if (temp > 7 || temp < 0)
        {
          printf("\nInvalid Input\n");
          break;
        }
        while (temp != 0)
        {
            bin += temp % 2 * pow(10, i++);
            temp /= 2;
        }
        num /= 10;
    }
    printf("%d", bin);
}