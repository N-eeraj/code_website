import java.util.Scanner;

class Swap
{
    public static void main(String[] args)
    {
        String input1, input2, temp;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter First Input: ");
        input1 = scanner.nextLine();
        System.out.println("Enter Second Input: ");
        input2 = scanner.nextLine();

        System.out.println("Before Swapping\nInput 1: " + input1 + ", Input 2: "+ input2);
        temp = input1;
        input1 = input2;
        input2 = temp;
        System.out.println("After Swapping\nInput 1: " + input1 + ", Input 2: "+ input2);

        scanner.close();
    }
}