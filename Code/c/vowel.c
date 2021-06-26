#include<stdio.h>
void main()
{
    char alphabet, vowels[5] = {'A', 'E', 'I', 'O', 'U'}, result[9] = "Consonant";
    int i;

    printf("Enter Alphabet: ");
    scanf("%c", &alphabet);

    alphabet = toupper(alphabet);
    for (i = 0; i < 5; i++)
    {
        if (alphabet == vowels[i])
        {
            strcpy(result, "Vowel");
            break;
        }
    }
    printf("%c is a %s", alphabet , result);
}