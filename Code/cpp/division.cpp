#include<iostream>
using namespace std;
int main()
{
    int num1, num2;

    cout << "Enter Dividend: ";
    cin >> num1;
    cout << "Enter Divisor: ";
    cin >> num2;

    cout << "Quotient: " << num1 / num2;
    cout << "\nRemainder: " << num1 % num2;
}