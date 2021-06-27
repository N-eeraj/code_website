#include<iostream>
using namespace std;
int main()
{
    int limit, first = 0, second = 1, next, i;

    cout << "Enter Limit: ";
    cin >> limit;

    cout << first << "\n" << second;
    for (i = 2; i < limit; i++)
    {
        next = first + second;
        cout << next << "\n";
        first = second;
        second = next;
    }
    return 0;
}