import java.util.Scanner;
import java.util.Arrays;

class QueueDS
{
    public static boolean isEmpty(int end)
    {return end == 0? true: false;}

    public static boolean isFull(int end, int size)
    {return end == size? true: false;}

    public static void main(String[] args)
    {
        int size, end = 0, option, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Queue Size: ");
        size = scanner.nextInt();

        int[] queue = new int[size];
        while (true)
        {
            int[] q = new int[end];
            for (i = 0; i < end; i++)
                q[i] = queue[i];
            System.out.println("Queue: " + Arrays.toString(q));

            System.out.println("\nSelect Queue Operation\n1. Is Empty?\n2. Is Full?\n3. Enqueue\n4. Dequeue\n5. Exit\nEnter Option Number: ");
            option = scanner.nextInt();
            System.out.println();

            if (option == 1)
                System.out.println(isEmpty(end)? "Empty": "Not Empty");
            else if (option == 2)
                System.out.println(isFull(end, size)? "Full": "Not Full");
            else if (option == 3)
            {
                if (isFull(end, size))
                    System.out.println("Can't Enqueue: Queue Full");
                else
                {
                    System.out.println("Enter Element:");
                    queue[end++] = scanner.nextInt();
                }
            }
            else if (option == 4)
            {
                if (isEmpty(end))
                    System.out.println("Can't Dequeue: Queue Empty");
                else
                {
                    for (i = 1; i < end; i++)
                        queue[i - 1] = queue[i];
                    end--;
                }
            }
            else if (option == 5)
                break;
            else
                System.out.println("Enter a number between 1 & 5");
        }
        int[] q = new int[end];
        for (i = 0; i < end; i++)
            q[i] = queue[i];
        System.out.println("Queue: " + Arrays.toString(q));

        scanner.close();
    }
}