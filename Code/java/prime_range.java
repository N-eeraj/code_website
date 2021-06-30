import java.util.Scanner;

class PrimeRange
{
    public static void main(String[] args)
    {
        int range, i, j;
        boolean prime;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Range: ");
        range = scanner.nextInt();

        for (i = 2; i <= range; i++)
        {
            prime = true;
            for (j = 2; j < i; j++)
            {
                if (i % j == 0)
                {
                    prime = false;
                    break;
                }
            }
            if (prime)
                System.out.println(i);
        }

        scanner.close();
    }
}