import java.util.Scanner;
import java.util.Arrays;

class StackDS
{
    public static boolean isEmpty(int top)
    {return top == 0? true: false;}

    public static void main(String[] args)
    {
        int size, top = 0, option, i;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Stack Size: ");
        size = scanner.nextInt();

        int[] stack = new int[size];
        while (true)
        {
            int[] s = new int[top];
            for (i = 0; i < top; i++)
                s[i] = stack[i];
            System.out.println("Stack: " + Arrays.toString(s));

            System.out.println("\nSelect Stack Operation\n1. Is Empty?\n2. Push\n3. Pop\n4. Top\n5. Exit\nEnter Option Number: ");
            option = scanner.nextInt();
            System.out.println();

            if (option == 1)
                System.out.println(isEmpty(top)? "Stack Empty": "Not Empty");
            else if (option == 2)
            {
                if(top == size)
                    System.out.println("Stack will Overflow");
                else
                {
                    System.out.println("Enter Element:");
                    stack[top++] = scanner.nextInt();
                }
            }
            else if (option == 3)
            {
                if (isEmpty(top))
                    System.out.println("Stack is Empty");
                else
                    top--;
            }
            else if (option == 4)
            {
                if (isEmpty(top))
                    System.out.println("Stack is Empty");
                else
                    System.out.println(stack[top - 1]);
            }
            else if (option == 5)
                break;
            else
                System.out.println("Enter a number between 1 & 5");
        }
        int[] s = new int[top];
        for (i = 0; i < top; i++)
            s[i] = stack[i];
        System.out.println("Stack: " + Arrays.toString(s));

        scanner.close();
    }
}