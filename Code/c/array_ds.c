#include<stdio.h>
void main()
{
    int arr[25] = {};
    int length = 0, index, element, option, i;
    char loop_char;

    while (1)
    {
        printf("\nArray: ");
        for (i = 0; i < length; i++)
            printf("%d ", arr[i]);

        printf("\n\nSelect Array Operation\n1. Traverse\n2. Insertion\n3. Deletion\n4. Updation\n5. Exit\nEnter Option Number: ");
        scanf("%d", &option);
        printf("\n");

        if (option == 1)
        {
            for (i = 0; i < length; i++)
                printf("%d\n", arr[i]);
        }
        else if (1 < option && option < 5)
        {
            printf("\nEnter Index: ");
            scanf("%d", &index);
            if (option == 2)
            {
                if (index > length)
                {
                    printf("\nInvalid Index\n");
                    continue;
                }
                printf("\n\nEnter Element: ");
                scanf("%d", &element);
                for (i = length++; i > index; i--)
                    arr[i] = arr[i - 1];
                arr[index] = element;
            }
            else
            {
                if (index >= length)
                {
                    printf("\nInvalid Index\n");
                    continue;
                }
                if (option == 3)
                {
                    for (i = index; i < length; i++)
                        arr[i] = arr[i + 1];
                    length--;
                }
                else
                {
                    printf("\n\nEnter Element: ");
                    scanf("%d", &element);
                    arr[index] = element;
                }
            }
        }
        else if (option == 5)
            break;
        else
            printf("Enter a number between 1 & 4");
    }
    printf("\nArray: ");
    for (i = 0; i < length; i++)
        printf("%d ", arr[i]);
}