import java.util.Scanner;

class Roots
{
    public static void main(String[] args)
    {
        double a, b, c, d;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Coefficient a: ");
        a = scanner.nextFloat();
        System.out.println("Enter Coefficient b: ");
        b = scanner.nextFloat();
        System.out.println("Enter Coefficient c: ");
        c = scanner.nextFloat();

        d = Math.pow(b, 2) - (4 * a * c);
        if (d > 0)
        {
            System.out.println((-b + Math.sqrt(d) )/ (2 * a));
            System.out.println((-b - Math.sqrt(d)) / (2 * a));
        }
        else if (d == 0)
            System.out.println(-b / (2 * a));
        else
            System.out.println("Complex Roots");

        scanner.close();
    }
}