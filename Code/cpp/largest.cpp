#include<iostream>
using namespace std;
int main()
{
    int limit, i;
    float input, largest;

    cout << "Enter Limit: ";
    cin >> limit;
    for(i = 0; i < limit; i++)
    {
        cout << "Enter Input: ";
        cin >> input;
        if (i == 0 || largest < input)
            largest = input;
    }
    
    cout << largest;
    return 0;
}