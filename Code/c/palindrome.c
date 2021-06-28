#include<stdio.h>
#include<string.h>
void main()
{
    char input[25], result[15] = "Palindrome";
    int length, i;

    printf("Enter Input: ");
    gets(input);

    length = strlen(input);
    for (i = 0; i < length / 2; i++)
    {
        if (input[i] != input[length - i - 1])
        {
            strcpy(result, "Not Palindrome");
            break;
        }
    }

    printf("%s", result);
}