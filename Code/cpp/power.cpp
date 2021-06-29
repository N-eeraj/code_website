#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int base, exponent;

    cout << "Enter Base: ";
    cin >> base;
    cout << "Enter Exponent: ";
    cin >> exponent;

    cout << pow(base, exponent);
    return 0;
}