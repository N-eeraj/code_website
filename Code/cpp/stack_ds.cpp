#include<iostream>
using namespace std;

int isEmpty(int top)
{return top == 0? 1: 0;}

int main()
{
    int size, top = 0, element, option, i;

    cout << "Enter Stack Size: ";
    cin >> size;

    int stack[size];
    while (1)
    {
        cout << "\n\nStack:";
        for (i = 0; i < top; i++)
            cout << " " << stack[i];

        cout << "\n\nSelect Stack Operation\n1. Is Empty?\n2. Push\n3. Pop\n4. Top\n5. Exit\nEnter Option Number: ";
        cin >> option;
        cout << "\n";

        if (option == 1)
            cout << (isEmpty(top)? "Empty": "Not Empty\n");
        else if (option == 2)
        {
            if(top == size)
                cout << "Stack will Overflow\n";
            else
            {
                cout << "Enter Element: ";
                cin >> element;
                stack[top++] = element;
            }
        }
        else if (option == 3)
        {
            if (isEmpty(top))
                cout << "Stack is Empty\n";
            else
                top--;
        }
        else if (option == 4)
        {
            if (isEmpty(top))
                cout << "Stack is Empty\n";
            else
                cout << stack[top - 1];
        }
        else if (option == 5)
            break;
        else
            cout << "Enter a number between 1 & 5\n";
    }
    cout << "\n\nStack:";
    for (i = 0; i < top; i++)
        cout << " " << stack[i];
}