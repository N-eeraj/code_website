import java.util.Scanner;

class Palindrome
{
    public static void main(String[] args)
    {
        String input, result = "Palindrome";
        int length, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Input: ");
        input = scanner.nextLine();

        length = input.length();
        for (i = 0; i < length / 2; i++)
        {
            if (input.charAt(i) != input.charAt(length - i - 1))
            {
                result = "Not Palindrome";
                break;
            }
        }
        System.out.println(result);

        scanner.close();
    }
}