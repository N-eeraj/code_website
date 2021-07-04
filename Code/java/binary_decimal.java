import java.util.Scanner;

class BinaryDecimal
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.parseInt(scanner.next(), 2));

        scanner.close();
    }
}