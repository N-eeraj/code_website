#include<iostream>
using namespace std;
int main()
{
    char input;

    cout << "Enter Input: ";
    cin >> input;

    if (isdigit(input) != 0)
        cout << "Is Digit";
    else
        cout << "Is not Digit";
    return 0;
}