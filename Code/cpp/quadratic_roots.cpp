#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    float a, b, c, d;

    cout << "Enter Coefficient a: ";
    cin >> a;
    cout << "Enter Coefficient b: ";
    cin >> b;
    cout << "Enter Coefficient c: ";
    cin >> c;

    d = pow(b,2) - (4 * a * c);
    if (d > 0)
    {
        cout << (-b + sqrt(d)) / (2 * a) << "\n";
        cout << (-b - sqrt(d)) / (2 * a);
    }
    else if(d == 0)
        cout << -b / (2 * a);
    else
        cout << "Complex Roots";
    return 0;
}