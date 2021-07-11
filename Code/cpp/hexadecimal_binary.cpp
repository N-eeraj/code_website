#include<iostream>
#include<cstring>
#include<cmath>
using namespace std;
int main()
{
    char num[10];
    int binary = 0, temp, binaryTemp, i = 0, j, k = 0;

    cout << "Enter Number: ";
    cin >> num;

    for (i = strlen(num) - 1; i >= 0; i--)
    {
        temp = num[i];
        j = 0;
        binaryTemp = 0;
        if (temp > 47 && temp < 58)
            temp -= 48;
        else if (temp > 64 && temp < 71)
            temp -= 55;
        else if (temp > 96 && temp < 103)
            temp -= 87;
        else
        {
            cout << "\nInvalid Input\n";
            break;
        }
        do
        {
            binaryTemp += (temp % 2) * pow(10, j++);
            temp /= 2;
        } while (temp != 0);
        binary += binaryTemp * pow(10, k);
        k += 4;
    }
    cout << binary;
    return 0;
}