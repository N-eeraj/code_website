import java.util.Scanner;

class MenuCalculator
{
    public static void main(String[] args)
    {
        float num1, num2;
        int operation;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter First Number: ");
        num1 = scanner.nextFloat();
        System.out.println("Enter Second Number: ");
        num2 = scanner.nextFloat();
        System.out.println("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter Operation Number: ");
        operation = scanner.nextInt();

        switch (operation)
        {
            case 1:
                System.out.println(num1 + num2);
                break;
            case 2:
                System.out.println(num1 - num2);
                break;
            case 3:
                System.out.println(num1 * num2);
                break;
            case 4:
                System.out.println(num1 / num2);
                break;
            default:
                System.out.println("Invalid Option");
        }

        scanner.close();
    }
}