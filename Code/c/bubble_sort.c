#include<stdio.h>
void main()
{
    int length, temp, i, j;

    printf("Enter Length: ");
    scanf("%d", &length);
    int arr[length];
    for (i = 0; i < length; i++)
    {
        printf("Enter Number: ");
        scanf("%d", &arr[i]);
    }

    for (i = length - 1; i > 0; i--)
    {
        for (j = 0; j < i; j++)
        {
            if (arr[j] > arr[j+ 1])
            {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for (i = 0; i < length; i++)
        printf("%d ", arr[i]);
}