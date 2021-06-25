#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    float edge;

    cout << "Enter Edge: ";
    cin >> edge;

    cout << "Volume: " << pow(edge, 3);
    cout << "\nSurface Area: " << 6 * pow(edge, 2);
    return 0;
}