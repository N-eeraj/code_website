import java.util.Scanner;

class Digit
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Input: ");
        try
        {
            Float.parseFloat(scanner.next());
            System.out.println("Is Digit");
        }
        catch(NumberFormatException e)
            {System.out.println("Is not Digit");}

        scanner.close();
    }
}