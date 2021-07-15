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

    for (i = 0; i <  length; i++)
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
        cout << arr[i] << " ";
    return 0;
}