import java.util.Scanner;

class DecimalOctal
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.toOctalString(scanner.nextInt()));

        scanner.close();
    }
}