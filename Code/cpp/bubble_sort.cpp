#include<iostream>
using namespace std;
int main()
{
    int length, temp, i, j;

    cout << "Enter Length: ";
    cin >> length;
    int arr[length];
    for (i = 0; i < length; i++)
    {
        cout << "Enter Number: ";
        cin >> arr[i];
    }

    for (i = length - 1; i > 0; i--)
    {
        for (j = 0; j < i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for (i = 0; i < length; i++)
        cout << arr[i] << " ";
    return 0;
}