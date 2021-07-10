#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int num, hex, temp, hexTemp, i = 0, j;
    char hexD[25] = "";
    bool invalid = false;

    cout << "Enter Number: ";
    cin >> num;

    while (num != 0)
    {
        hex = 0;
        j = 0;
        temp = num % 10000;
        while (temp != 0)
        {
            if (temp % 10 != 0 && temp % 10 != 1)
            {
                invalid = true;
                cout << "Invalid Input\n";
                break;
            }
            hex += temp % 10 * pow(2, j++);
            temp /= 10;
        }
        if (hex > 9)
            hex += 55;
        else
            hex += 48;
        hexD[i++] = hex;
        num /= 10000;
    }
    for (i--; i >= 0; i--)
        cout << hexD[i];
}