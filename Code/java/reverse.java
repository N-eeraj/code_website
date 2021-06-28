import java.util.Scanner;

class Reverse
{
    public static void main(String[] args)
    {
        int num, reverse = 0;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        num = scanner.nextInt();

        while (num != 0)
        {
            reverse = reverse * 10 + num % 10;
            num /= 10;
        }
        System.out.println(reverse);

        scanner.close();
    }
}