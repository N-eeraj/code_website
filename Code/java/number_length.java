import java.util.Scanner;

class NumberLength
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        System.out.println(Integer.toString(scanner.nextInt()).length());

        scanner.close();
    }
}