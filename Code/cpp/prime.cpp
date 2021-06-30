#include<iostream>
using namespace std;
int main()
{
    int num, i;
    string prime = "Prime";

    cout << "Enter Number: ";
    cin >> num;

    for (i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            prime.replace(0, 10, "Not Prime");
            break;
        }
    }
    cout << prime;
    return 0;
}