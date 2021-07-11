import java.util.Scanner;

class HexadecimalBinary
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.toBinaryString(Integer.parseInt(scanner.next(), 16)));

        scanner.close();
    }
}