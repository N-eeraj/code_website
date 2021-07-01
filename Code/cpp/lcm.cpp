#include<iostream>
using namespace std;
int main()
{
    int num1, num2, num1M, num2M;

    cout << "Enter First Number: ";
    cin >> num1;
    cout << "Enter Second Number: ";
    cin >> num2;

    num1M = num1;
    num2M = num2;
    while (num1M != num2M)
    {
        if (num1M < num2M)
            num1M += num1;
        else
            num2M += num2;
    }
    cout << num1M;
    return 0;
}