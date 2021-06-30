#include<iostream>
using namespace std;
int main()
{
    int range, i, j;
    bool prime;

    cout << "Enter Range: ";
    cin >> range;

    for (i = 2; i <= range; i++)
    {
        prime = true;
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                prime = false;
                break;
            }
        }
        if (prime)
            cout << i << "\n";
    }
    return 0;
}