import java.util.Scanner;

class Division
{
    public static void main(String[] args)
    {
        int num1, num2;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Dividend: ");
        num1 = scanner.nextInt();
        System.out.println("Enter Divisor: ");
        num2 = scanner.nextInt();

        System.out.println("Quotient: " + num1 / num2);
        System.out.println("Remainder: " + num1 % num2);

        scanner.close();
    }
}