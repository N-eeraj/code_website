import java.util.Scanner;

class Pattern1
{
    public static void main(String[] args)
    {
        int limit, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();

        for (i = 1; i <= limit; i++)
            System.out.println("* ".repeat(i));

        scanner.close();
    }
}