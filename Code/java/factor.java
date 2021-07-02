import java.util.Scanner;

class Factor
{
    public static void main(String[] args)
    {
        int num, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        num = scanner.nextInt();

        for (i = 1; i <= num; i++)
        {
            if (num % i == 0)
                System.out.println(i);
        }

        scanner.close();
    }
}