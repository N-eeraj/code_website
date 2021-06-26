import java.util.Scanner;

class Sign
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        float num = scanner.nextFloat();

        if (num < 0)
            System.out.println("Negative");
        else if (num > 0)
            System.out.println("Positive");
        else
            System.out.println("Zero");

        scanner.close();
    }
}