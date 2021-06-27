#include<iostream>
using namespace std;
int main()
{
    int num, length = 1;

    cout << "Enter Number: ";
    cin >> num;

    while (num / 10 != 0)
    {
        num /= 10;
        length++;
    }
    cout << length;
    return 0;
}