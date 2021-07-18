#include<stdio.h>
void main()
{
    int size, top = 0, element, option, i;

    printf("Enter Stack Size: ");
    scanf("%d", &size);

    int stack[size];
    while (1)
    {
        printf("\n\nStack:");
        for (i = 0; i < top; i++)
            printf(" %d", stack[i]);

        printf("\n\nSelect Stack Operation\n1. Is Empty?\n2. Push\n3. Pop\n4. Top\n5. Exit\nEnter Option Number: ");
        scanf("%d", &option);
        printf("\n");

        if (option == 1)
            printf(isEmpty(top)? "Empty": "Not Empty\n");
        else if (option == 2)
        {
            if(top == size)
                printf("Stack will Overflow\n");
            else
            {
                printf("Enter Element: ");
                scanf("%d", &element);
                stack[top++] = element;
            }
        }
        else if (option == 3)
        {
            if (isEmpty(top))
                printf("Stack is Empty\n");
            else
                top--;
        }
        else if (option == 4)
            printf(isEmpty(top)? "Stack is Empty\n": "%d", stack[top - 1]);
        else if (option == 5)
            break;
        else
            printf("Enter a number between 1 & 5\n");
    }
    printf("\n\nStack:");
    for (i = 0; i < top; i++)
        printf(" %d", stack[i]);
}

int isEmpty(top)
{return top == 0? 1: 0;}