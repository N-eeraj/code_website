import java.util.Scanner;

class Pattern7
{
    public static void main(String[] args)
    {
        int limit, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();

        for (i = 0; i < limit; i++)
            System.out.println("  ".repeat(limit - i - 1) + " *".repeat(2 * i + 1));

        scanner.close();
    }
}