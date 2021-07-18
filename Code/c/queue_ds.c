#include<stdio.h>
void main()
{
    int size, end = 0, element, option, i;

    printf("Enter Queue Size: ");
    scanf("%d", &size);

    int queue[size];
    while (1)
    {
        printf("\n\nQueue:");
        for (i = 0; i < end; i++)
            printf(" %d", queue[i]);

        printf("\n\nSelect Queue Operation\n1. Is Empty?\n2. Is Full?\n3. Enqueue\n4. Dequeue\n5. Exit\nEnter Option Number: ");
        scanf("%d", &option);
        printf("\n");

        if (option == 1)
            printf(isEmpty(end)? "Empty": "Not Empty\n");
        else if (option == 2)
            printf(isFull(end, size)? "Full": "Not Full\n");
        else if (option == 3)
        {
            if (isFull(end, size))
                printf("Can't Enqueue: Queue Full\n");
            else
            {
                printf("Enter Element: ");
                scanf("%d", &element);
                queue[end++] = element;
            }
        }
        else if (option == 4)
        {
            if (isEmpty(end))
                printf("Can't Dequeue: Queue Empty\n");
            else
            {
                for (i = 1; i <= end; i++)
                    queue[i - 1] = queue[i];
                end--;
            }
        }
        else if (option == 5)
            break;
        else
            printf("Enter a number between 1 & 5");
    }
    printf("\n\nQueue:");
    for (i = 0; i < end; i++)
        printf(" %d", queue[i]);
}

int isEmpty(end)
{return end == 0? 1: 0;}

int isFull(end, size)
{return end == size? 1: 0;}