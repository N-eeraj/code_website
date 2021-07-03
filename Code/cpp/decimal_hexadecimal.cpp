#include<iostream>
using namespace std;
int main()
{
    int num, hex, i = 0, j;
    char hexD[25] = "";

    cout << "Enter Number: ";
    cin >> num;

    while (num != 0)
    {
        hex = num % 16;
        if (hex > 9)
            hex += 55;
        else
            hex += 48;
        hexD[i++] = hex;
        num /= 16;
    };
    for (j = i - 1; j >= 0; j--)
        cout << hexD[j];
    return 0;
}