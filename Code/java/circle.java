import java.util.Scanner;

class Main
{
    public static void main(String[] args)
    {
        float radius;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Radius: ");
        radius = scanner.nextFloat();

        System.out.println("Area: " + 3.14 * radius * radius);
        System.out.println("Circumference: " + 6.28 * radius);

        scanner.close();
    }
}