#include<iostream>
using namespace std;
int main()
{
    char alphabet, vowels[5] = {'A', 'E', 'I', 'O', 'U'};
    string result = "Consonant";
    int i;

    cout << "Enter Alphabet: ";
    cin >> alphabet;

    alphabet = toupper(alphabet);
    for (i = 0; i < 5; i++)
    {
        if (alphabet == vowels[i])
        {
            result.replace(0, 10,"Vowel");
            break;
        }
    }
    cout << alphabet << " is a " << result;
    return 0;
}