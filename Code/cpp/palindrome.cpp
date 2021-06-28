#include<iostream>
#include<string.h>
using namespace std;
int main()
{
    char input[25];
    string result = "Palindrome";
    int length, i;
    
    cout << "Enter Input: ";
    cin >> input;

    length = strlen(input);
    for (i = 0; i < length / 2; i++)
    {
        if (input[i] != input[length - i - 1])
        {
            result.replace(0, 14, "Not Palindrome");
            break;
        }
    }
    cout << result;
    return 0;
}