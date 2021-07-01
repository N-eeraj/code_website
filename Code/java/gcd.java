import java.util.Scanner;

class GCD
{
    public static void main(String[] args)
    {
        int num1, num2, num, gcd = 1, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter First Number: ");
        num1 = scanner.nextInt();
        System.out.println("Enter Second Number: ");
        num2 = scanner.nextInt();

        num = num1 < num2 ? num1: num2;
        for (i = 2; i<= num; i++)
        {
            if (num1 % i == 0 && num2 % i == 0)
                gcd = i;
        }
        System.out.println(gcd);

        scanner.close();
    }
}