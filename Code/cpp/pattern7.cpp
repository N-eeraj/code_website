#include<iostream>
using namespace std;
int main()
{
    int limit, i, j;

    cout << "Enter Limit: ";
    cin >> limit;

    for (i = 0; i < limit; i++)
    {
        for (j = 0; j <  limit - i - 1; j++)
            cout << "  ";
        for (j = 0; j < 2 * i + 1; j++)
            cout << " *";
        cout << "\n";
    }
    return 0;
}