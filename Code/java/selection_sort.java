import java.util.Scanner;
import java.util.Arrays;

class SelectionSort
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

        for (i = 0; i < length; i++)
        {
            for (j = i + 1; j < length; j++)
            {
                if (arr[i] > arr[j])
                {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}