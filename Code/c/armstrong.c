#include<stdio.h>
void main()
{
    int num, numCopy, length = 1, sum = 0, i;

    printf("Enter Number: ");
    scanf("%d", &num);

    numCopy = num;
    while (numCopy / 10 != 0)
    {
        numCopy /= 10;
        length++;
    }
    numCopy = num;
    for (i = 0; i < length; i++)
    {
        sum += pow(numCopy % 10, length);
        numCopy /= 10;
    }
    if (num == sum)
        printf("Armstrong");
    else
        printf("Not Armstrong");
}