import java.util.Scanner;
import java.util.Arrays;

class BubbleSort
{
    public static void main(String[] args)
    {
        int length, temp, i, j;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Length: ");
        length = scanner.nextInt();
        int[] arr = new int[length];
        for (i = 0; i < length; i++)
        {
            System.out.println("Enter Number: ");
            arr[i] = scanner.nextInt();
        }

        for (i = length - 1; i > 0; i--)
        {
            for (j = 0; j < i; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}