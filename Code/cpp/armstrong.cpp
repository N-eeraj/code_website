#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int num, numCopy, length = 1, sum = 0, i;

    cout << "Enter Number: ";
    cin >> num;

    numCopy = num;
    while (numCopy / 10 != 0)
    {
        numCopy /= 10;
        length++;
    }
    numCopy = num;
    for (i = 0; i < length; i++)
    {
        sum += pow(numCopy % 10, length);
        numCopy /= 10;
    }
    if (num == sum)
        cout << "Armstrong";
    else
        cout << "Not Armstrong";
    return 0;
}