import java.util.Scanner;

class Fibonacci
{
    public static void main(String[] args)
    {
        int limit, first = 0, second = 1, next, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();

        System.out.println(first + "\n" + second);
        for (i = 2; i < limit; i++)
        {
            next = first + second;
            System.out.println(next);
            first = second;
            second = next;
        }

        scanner.close();
    }
}