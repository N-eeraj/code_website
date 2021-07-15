#include<iostream>
using namespace std;
int main()
{
    int length, temp, i, j, select;

    cout << "Enter Length: ";
    cin >> length;
    int arr[length];
    for (i = 0; i < length; i++)
    {
        cout << "Enter Number: ";
        cin >> arr[i];
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
        cout << arr[i] << " ";
    return 0;
}