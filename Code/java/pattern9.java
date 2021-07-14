import java.util.Scanner;

class Pattern9
{
    public static void main(String[] args)
    {
        int limit, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();

        if (limit % 2 == 1)
        {
            for (i = 0; i * 2 + 1 <= limit; i++)
                System.out.println("   ".repeat(Math.round(limit / 2) - i) + " * ".repeat(i * 2 + 1));
            for (i = Math.round(limit / 2); i > 0; i--)
                System.out.println("   ".repeat(Math.round(limit / 2) - i + 1) + " * ".repeat(i * 2 - 1));
        }
        else
            System.out.println("Enter Odd Number");

        scanner.close();
    }
}