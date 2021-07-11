import java.util.Scanner;

class HexadecimalOctal
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Numbrer: ");
        System.out.println(Integer.toOctalString(Integer.parseInt(scanner.next(), 16)));

        scanner.close();
    }
}