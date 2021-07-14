#include<iostream>
using namespace std;
int main()
{
    int limit, i, j;

    cout << "Enter Limit: ";
    cin >> limit;

    if (limit % 2 == 1)
    {
        for (i = 1; i <= limit / 2 + 1; i++)
        {
            for (j = 0; j < limit / 2 - i + 1; j++)
                cout << "   ";
            for (j = 0; j < 2 * i - 1; j++)
                cout << " * ";
            cout << "\n";
        }
        for (i = limit / 2; i >= 0 + 1; i--)
        {
            for (j = 0; j < limit / 2 - i + 1; j++)
                cout << "   ";
            for (j = 0; j < 2 * i - 1; j++)
                cout << " * ";
            cout << "\n";
        }
    }
    else
        cout << "Enter Odd Number";
    return 0;
}