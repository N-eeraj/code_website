import java.util.Scanner;

class Ascii
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Character: ");
        System.out.println((int) scanner.next().charAt(0));

        scanner.close();
    }
}