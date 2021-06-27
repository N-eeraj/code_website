import java.util.Scanner;

class MultiplicationTable
{
    public static void main(String[] args)
    {
        int num, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        num = scanner.nextInt();

        for (i = 1; i < 11; i++)
            System.out.println(num + " x " + i + " = " + num * i);

        scanner.close();
    }
}