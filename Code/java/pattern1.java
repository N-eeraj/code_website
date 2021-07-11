import java.util.Scanner;

class Pattern1
{
    public static void main(String[] args)
    {
        int limit, i, j;
        String star;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();

        for (i = 1; i <= limit; i++)
        {
            star = "";
            for (j = 1; j <= i; j++)
                star += "* ";
            System.out.println(star);
        }

        scanner.close();
    }
}