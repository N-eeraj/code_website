import java.util.Scanner;

class LCM
{
    public static void main(String[] args)
    {
        int num1, num2, num1M, num2M;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter First Number: ");
        num1 = scanner.nextInt();
        System.out.println("Enter Second Number: ");
        num2 = scanner.nextInt();

        num1M = num1;
        num2M = num2;
        while (num1M != num2M)
        {
            if (num1M < num2M)
                num1M += num1;
            else
                num2M += num2;
        }
        System.out.println(num1M);

        scanner.close();
    }
}