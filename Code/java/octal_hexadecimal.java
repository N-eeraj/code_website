import java.util.Scanner;

class OctalHexadecimal
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.toHexString(Integer.parseInt(scanner.next(), 8)).toUpperCase());

        scanner.close();
    }
}