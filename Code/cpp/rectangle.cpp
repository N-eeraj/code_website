#include<iostream>
using namespace std;
int main()
{
    float length, width;

    cout << "Enter Length: ";
    cin >> length;
    cout << "Enter Width: ";
    cin >> width;

    cout << "Area: " << length * width;
    cout << "\nPerimeter: "<< 2 * (length + width);
    return 0;
}