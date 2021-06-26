import java.util.Scanner;

class Addition
{
    public static void main(String[] args)
    {
        float sum = 0;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter First Number: ");
        sum += scanner.nextFloat();
        System.out.println("Enter Second Number: ");
        sum += scanner.nextFloat();
        System.out.println(sum);

        scanner.close();
    }
}