#include<iostream>
using namespace std;
int main()
{
    int arr[25] = {};
    int length = 0, index, element, option, i;
    char loop_char;

    while (1)
    {
        cout << "\nArray: ";
        for (i = 0; i < length; i++)
            cout << arr[i] << " ";

        cout << "\n\nSelect Array Operation\n1. Traverse\n2. Insertion\n3. Deletion\n4. Updation\n5. Exit\nEnter Option Number: ";
        cin >> option;
        cout << "\n";

        if (option == 1)
        {
            for (i = 0; i < length; i++)
                cout << "\n" << arr[i];
        }
        else if (1 < option && option < 5)
        {
            cout << "\nEnter Index: ";
            cin >> index;
            if (option == 2)
            {
                if (index > length)
                {
                    cout << "\nInvalid Index\n";
                    continue;
                }
                cout << "\n\nEnter Element: ";
                cin >> element;
                for (i = length++; i > index; i--)
                    arr[i] = arr[i - 1];
                arr[index] = element;
            }
            else
            {
                if (index >= length)
                {
                    cout << "\nInvalid Index\n";
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
                    cout << "\n\nEnter Element: ";
                    cin >> element;
                    arr[index] = element;
                }
            }
        }
        else if (option == 5)
            break;
        else
            cout << "Enter a number between 1 & 4";
    }
    cout << "\nArray: ";
    for (i = 0; i < length; i++)
        cout << "%d ", arr[i];
    return 0;
}