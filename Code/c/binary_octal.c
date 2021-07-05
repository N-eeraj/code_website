#include<stdio.h>
#include<stdbool.h>
void main()
{
    int num, oct = 0, octTemp, temp, i = 0, j;
    bool invalid = false;

    printf("Enter Number: ");
    scanf("%d", &num);

    while (num != 0)
    {
        temp = num % 1000;
        octTemp = 0;
        j = 0;
        while (temp != 0)
        {
            if (temp % 10 != 0 && temp % 10 != 1)
            {
                invalid = true;
                printf("Invalid Input\n");
                break;
            }
            if (invalid == true)
                break;
            octTemp += temp % 10 * pow(2, j++);
            temp /= 10;
        }
        oct += octTemp * pow(10, i++);
        num /= 1000;
    }
    printf("%d", oct);
}