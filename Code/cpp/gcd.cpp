#include<iostream>
using namespace std;
int main()
{
    int num1, num2, num, gcd = 1, i;

    cout << "Enter First Number: ";
    cin >> num1;
    cout << "Enter Second Number: ";
    cin >> num2;

    num = num1 < num2 ? num1: num2;
    for (i = 2; i <= num; i++)
    {
        if (num1 % i == 0 && num2 % i == 0)
            gcd = i;
    }
    cout << gcd;
    return 0;
}