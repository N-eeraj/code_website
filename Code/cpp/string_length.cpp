#include<iostream>
#include<cstring>
using namespace std;
int main()
{
    char input[25];

    cout << "Enter Input: ";
    cin.getline(input, 25);

    cout << strlen(input);
    return 0;
}