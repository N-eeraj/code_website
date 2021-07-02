#include<iostream>
using namespace std;
int main()
{
    float num1, num2;
    int operation;

    cout << "Enter First Number: ";
    cin >> num1;
    cout << "Enter Second Number: ";
    cin >> num2;
    cout << "1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter Operation Number: ";
    cin >> operation;

    switch (operation)
    {
        case 1:
            cout << num1 + num2;
            break;
        case 2:
            cout << num1 - num2;
            break;
        case 3:
            cout << num1 * num2;
            break;
        case 4:
            cout << num1 / num2;
            break;
        default:
            printf("Invalid Option");
    }
    return 0;
}