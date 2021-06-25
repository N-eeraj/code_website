#include<iostream>
using namespace std;
int main()
{
    float radius;

    cout << "Enter radius: ";
    cin >> radius;

    cout << "Area: " << 3.14 * radius * radius;
    cout << "\nCircumference: "<< 6.28 * radius;
    return 0;
}