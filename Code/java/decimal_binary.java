import java.util.Scanner;

class DecimalBinary
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.toBinaryString(scanner.nextInt()));

        scanner.close();
    }
}