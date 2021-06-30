import java.util.Scanner;

class Prime
{
    public static void main(String[] args)
    {
        int num, i;
        String prime = "Prime";
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        num = scanner.nextInt();

        for (i = 2; i < num; i++)
        {
            if (num % i == 0)
            {
                prime = "Not Prime";
                break;
            }
        }
        System.out.println(prime);

        scanner.close();
    }
}