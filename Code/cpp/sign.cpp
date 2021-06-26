#include<iostream>
using namespace std;
int main()
{
    float num;

    cout << "Enter Number: ";
    cin >> num;

    if (num < 0)
        cout << "Negative";
    else if (num > 0)
        cout << "Positive";
    else
        cout << "Zero";
    return 0;
}