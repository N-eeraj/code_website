import java.util.Scanner;

class Factorial
{
    public static int fact(int num)
    {
        int factorial = 1;

        if (num == 1)
            return 1;
        factorial = num * fact(num - 1);

        return factorial;
    }
    
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Input: ");
        int input = scanner.nextInt();

        System.out.println(fact(input));

        scanner.close();
    }
}