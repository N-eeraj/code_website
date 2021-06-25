import java.util.Scanner;

class Main
{
    public static void main(String[] args)
    {
        float edge;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Edge: ");
        edge = scanner.nextFloat();

        System.out.println("Volume: " + Math.pow(edge, 3));
        System.out.println("Surface Area: " + 6 * Math.pow(edge, 2));

        scanner.close();
    }
}