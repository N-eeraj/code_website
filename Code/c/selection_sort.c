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

    for (i = 0; i < length; i++)
    {
        for (j = i + 1; j < length; j++)
        {
            if (arr[i] > arr[j])
            {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    for (i = 0; i < length; i++)
        printf("%d ", arr[i]);
}