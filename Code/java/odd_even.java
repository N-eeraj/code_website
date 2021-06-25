import java.util.Scanner;

class Main
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        if (scanner.nextInt() % 2 == 0)
            System.out.println("Even");
        else
            System.out.println("Odd");

        scanner.close();
    }
}