import java.util.Scanner;

class Armstrong
{
    public static void main(String[] args)
    {
        int num, length = 1, sum = 0, i;
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter Number: ");
        num = scanner.nextInt();

        length = Integer.toString(num).length();
        for (i = 0; i < length; i++)
            sum += Math.pow(Character.getNumericValue(Integer.toString(num).charAt(i)), length);
        if (sum == num)
            System.out.println("Armstrong");
        else
            System.out.println("Not Armstrong");

        scanner.close();
    }
}