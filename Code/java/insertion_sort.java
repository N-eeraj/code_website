import java.util.Scanner;
import java.util.Arrays;

class InsertionSort
{
    public static void main(String[] args)
    {
        int length, temp, i, j, select;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Length: ");
        length = scanner.nextInt();
        int[] arr = new int[length];
        for (i = 0; i < length; i++)
        {
            System.out.println("Enter Number: ");
            arr[i] = scanner.nextInt();
        }

        for (i = 1; i < length; i++)
        {
            select = i;
            for (j = select - 1; j > -1; j--)
            {
                if (arr[select] < arr[j])
                {
                    temp = arr[j];
                    arr[j] = arr[select];
                    arr[select] = temp;
                    select = j;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}