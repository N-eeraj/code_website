#include<iostream>
using namespace std;
int main()
{
    int input1, input2, temp;

    cout << "Enter First Input: ";
    cin >> input1;
    cout << "Enter Second Input: ";
    cin >> input2;
    
    cout << "Before Swapping\nInput 1: " << input1 << ", Input 2: " << input2;
    temp = input1;
    input1 = input2;
    input2 = temp;
    cout << "\nAfter Swapping\nInput 1: " << input1 << ", Input 2: " << input2;
    return 0;
}