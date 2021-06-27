#include<iostream>
using namespace std;

int fact(int num)
{
    int factorial = 1;

    if (num == 1)
        return 1;
    factorial = num * fact(num - 1);

    return factorial;
}

int main()
{
    int input;

    cout << "Enter Input: ";
    cin >> input;

    cout << fact(input);
    return 0;
}