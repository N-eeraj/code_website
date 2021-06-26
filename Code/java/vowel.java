import java.util.Scanner;

class Vowel
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Alphabet: ");
        String alphabet =  scanner.next().toUpperCase();
        if ("AEIOU".contains(alphabet))
            System.out.println(alphabet + " is a Vowel");
        else
            System.out.println(alphabet + " is a Consonant");

        scanner.close();
    }
}