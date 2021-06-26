import java.util.Scanner;

class Largest
{
    public static void main(String[] args)
    {
        int limit, i;
        float input, largest = -999999999;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Limit: ");
        limit = scanner.nextInt();
        for (i = 0; i < limit; i++)
        {
            System.out.println("Enter Input: ");
            input = scanner.nextFloat();
            if (i == 0 || largest < input)
                largest = input;
        }

        System.out.println(largest);

        scanner.close();
    }
}