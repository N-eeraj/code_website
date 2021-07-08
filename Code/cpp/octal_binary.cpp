#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int num, bin = 0, temp, i = 0;

    cout << "Enter Number: ";
    cin >> num;

    while (num != 0)
    {
        temp = num % 10;
        if (temp > 7 || temp < 0)
        {
            cout << "\nInvalid Input\n";
            break;
        }
        while (temp != 0)
        {
            bin += (temp % 2) * pow(10, i++);
            temp /= 2;
        }
        num /= 10;
    }
    cout << bin;
}