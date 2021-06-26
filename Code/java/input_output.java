import java.util.Scanner;

class Input
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Input: ");
        String input = scanner.nextLine();
        System.out.println(input);

        scanner.close();
    }
}