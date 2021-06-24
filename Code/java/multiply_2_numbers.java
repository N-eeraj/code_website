import java.util.Scanner;

class Main
{
    public static void main(String[] args)
    {
        float product = 1;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter First Number: ");
        product *= scanner.nextFloat();
        System.out.println("Enter Second Number: ");
        product *= scanner.nextFloat();
        System.out.println(product);

        scanner.close();
    }
}