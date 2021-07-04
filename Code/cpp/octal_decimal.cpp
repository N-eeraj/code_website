#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int num, dec = 0, temp, i = 0;

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
        dec += temp * pow(8, i++);
        num /= 10;
    }
    cout << dec;
    return 0;
}