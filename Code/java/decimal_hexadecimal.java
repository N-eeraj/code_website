import java.util.Scanner;

class DecimalHexadecimal
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.toHexString(scanner.nextInt()).toUpperCase());

        scanner.close();
    }
}