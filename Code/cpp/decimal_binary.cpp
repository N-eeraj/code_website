#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int num, binary = 0, i = 0;

    cout << "Enter Number: ";
    cin >> num;

    do
    {
        binary += (num % 2) * pow(10, i);
        num /= 2;
        i++;
    } while (num != 0);
    cout << binary;
    return 0;
}