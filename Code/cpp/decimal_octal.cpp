#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int num, oct = 0, i = 0;

    cout << "Enter Number: ";
    cin >> num;

    do
    {
        oct += (num % 8) * pow(10, i);
        num /= 8;
        i++;
    } while (num != 0);
    cout << oct;
    return 0;
}