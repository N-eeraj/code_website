#include<iostream>
using namespace std;
int main()
{
    int limit, i, j;

    cout << "Enter Limit: ";
    cin >> limit;

    for (i = limit; i > 0; i--)
    {
        for (j = i; j > 0; j--)
            cout << "* ";
        cout << "\n";
    }
    return 0;
}