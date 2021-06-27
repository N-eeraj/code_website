#include<iostream>
using namespace std;
int main()
{
    int limit, sum = 0, i;

    cout << "Enter Limit: ";
    cin >> limit;

    for (i = 1; i <= limit; i++)
        sum += i;

    cout << "Sum: " << sum;
    cout << "\nAverage: " << sum * 1.0 / limit;
    return 0;
}