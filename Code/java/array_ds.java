import java.util.Scanner;
import java.util.Arrays;

class ArrayDS
{
    public static void main(String[] args)
    {
        int[] arr = new int[25];
        int length = 0, option, index, element, i;
        Scanner scanner = new Scanner(System.in);

        while (true)
        {
            int[] a = new int[length];
            for (i = 0; i < length; i++)
                a[i] = arr[i];
            System.out.println("Array: " + Arrays.toString(a));

            System.out.println("\n\nSelect Array Operation\n1. Traverse\n2. Insertion\n3. Deletion\n4. Updation\n5. Exit\nEnter Option Number: ");
            option = scanner.nextInt();
            System.out.println("\n");

            if (option == 1)
            {
                for (i = 0; i < length; i++)
                    System.out.println(arr[i]);
            }
            else if (1 < option && option < 5)
            {
                System.out.println("Enter Index: ");
                index = scanner.nextInt();
                if (option == 2)
                {
                    if (index > length)
                    {
                        System.out.println("\nInvalid Index");
                        continue;
                    }
                    System.out.println("\nEnter Element: ");
                    element = scanner.nextInt();
                    for (i = length++; i > index; i--)
                        arr[i] = arr[i - 1];
                    arr[index] = element;
                }
                else
                {
                    if (index >= length)
                    {
                        System.out.println("Invlid Index\n");
                        continue;
                    }
                    if (option == 3)
                    {
                        for (i = index; i < length; i++)
                            arr[i] = arr[i + 1];
                        length--;
                    }
                    else
                    {
                        System.out.println("\nEnter Element");
                        element = scanner.nextInt();
                        arr[index] = element;
                    }
                }
            }
            else if (option == 5)
                break;
            else
                System.out.println("Enter a number between 1 & 4");
        }
        int[] a = new int[length];
        for (i = 0; i < length; i++)
            a[i] = arr[i];
        System.out.println("Array: " + Arrays.toString(a));

        scanner.close();
    }
}