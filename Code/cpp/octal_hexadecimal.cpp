#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int num, dec = 0, hex, temp, i = 0, j;
    char hexD[25] = "";

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
    i = 0;
    while (dec != 0)
    {
        hex = dec % 16;
        if (hex > 9)
          hex += 55;
        else
          hex += 48;
        hexD[i++] = hex;
        dec /= 16;
    };
    for (j = i - 1; j >= 0; j--)
        cout << hexD[j];
    return 0;
}