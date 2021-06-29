import java.util.Scanner;

class Power
{
    public static void main(String[] args)
    {
        int base, exponent;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Base: ");
        base = scanner.nextInt();
        System.out.println("Enter Exponent: ");
        exponent = scanner.nextInt();

        System.out.println(Math.pow(base, exponent));

        scanner.close();
    }
}