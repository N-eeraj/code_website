import java.util.Scanner;

class SumAverage
{
    public static void main(String[] args)
    {
        int limit, sum = 0, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();

        for (i = 0; i <= limit; i++)
            sum += i;

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + sum * 1.0 / limit);

        scanner.close();
    }
}