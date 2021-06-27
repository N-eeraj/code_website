import java.util.Scanner;

class StringLength
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Input: ");
        System.out.println(scanner.nextLine().length());

        scanner.close();
    }
}