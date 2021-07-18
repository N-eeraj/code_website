#include<iostream>
using namespace std;

int isEmpty(int end)
{return end == 0? 1: 0;}

int isFull(int end, int size)
{return end == size? 1: 0;}

int main()
{
    int size, end = 0, element, option, i;

    cout << "Enter Queue Size: ";
    cin >>size;

    int queue[size];
    while (1)
    {
        cout << "\n\nQueue:";
        for (i = 0; i < end; i++)
            cout << " " << queue[i];

        cout << "\n\nSelect Queue Operation\n1. Is Empty?\n2. Is Full?\n3. Enqueue\n4. Dequeue\n5. Exit\nEnter Option Number: ";
        cin >> option;
        cout << "\n";

        if (option == 1)
            cout << (isEmpty(end)? "Empty": "Not Empty\n");
        else if (option == 2)
            cout << (isFull(end, size)? "Full": "Not Full\n");
        else if (option == 3)
        {
            if (isFull(end, size))
                cout << "Can't Enqueue: Queue Full\n";
            else
            {
                cout << "Enter Element: ";
                cin >> element;
                queue[end++] = element;
            }
        }
        else if (option == 4)
        {
            if (isEmpty(end))
                cout << "Can't Dequeue: Queue Empty\n";
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
            cout << "Enter a number between 1 & 5";
    }
    cout << "\n\nQueue:";
    for (i = 0; i < end; i++)
        cout << " %d", queue[i];
    return 0;
}