import java.util.Scanner;

class OctalBinary
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.toBinaryString(Integer.parseInt(scanner.next(), 8)));

        scanner.close();
    }
}