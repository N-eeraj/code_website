import java.util.Scanner;

class Main
{
    public static void main(String[] args)
    {
        float length, width;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Length: ");
        length = scanner.nextFloat();
        System.out.println("Enter Width: ");
        width = scanner.nextFloat();

        System.out.println("Area: " + length * width);
        System.out.println("Perimeter: " + 2 * (length + width));

        scanner.close();
    }
}