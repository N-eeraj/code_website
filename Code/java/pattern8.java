import java.util.Scanner;

class Pattern8
{
    public static void main(String[] args)
    {
        int limit, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();

        for (i = limit; i > 0; i--)
            System.out.println("  ".repeat(limit - i) + " *".repeat(2 * i - 1));

        scanner.close();
    }
}