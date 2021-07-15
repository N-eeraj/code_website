#include<stdio.h>
void main()
{
    int length, temp, i, j, select;

    printf("Enter Length: ");
    scanf("%d", &length);
    int arr[length];
    for (i = 0; i < length; i++)
    {
        printf("Enter Number: ");
        scanf("%d", &arr[i]);
    }

    for (i = 1; i < length; i++)
    {
        select = i;
        for (j = select - 1; j > -1; j--)
        {
            if (arr[select] < arr[j])
            {
                temp = arr[j];
                arr[j] = arr[select];
                arr[select] = temp;
                select = j;
            }
        }
    }
    for (i = 0; i < length; i++)
        printf("%d ", arr[i]);
}