mainObj = {
    
"hello_world":
{
'js':
`console.log("hello world");`,

'py':
`print("hello world")`,

'c':
`#include<stdio.h>
void main()
{
  printf("hello world");
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  cout << "hello world";
  return 0;
}`,

'java':
`class Main
{
  public static void main(String[] args)
  {
    System.out.println("hello world");
  }
}`
},


"input_output":
{
'js':
`console.log(prompt("Enter Input"));`,

'py':
`print(input("Enter Input: "))`,

'c':
`#include<stdio.h>
void main()
{
  char input[20];
  printf("Enter Input: ");
  gets(input);
  printf("%s", input);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  char input[20];
  cout << "Enter Input: ";
  cin.getline(input, 20);
  cout << input;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Main
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Input: ");
    String input = scanner.nextLine();
    System.out.println(input);

    scanner.close();
  }
}`
},


"add_2_numbers":
{
'js':
`let sum = 0;
sum += Number(prompt("Enter First Number"));
sum += Number(prompt("Enter Second Number"));
console.log(sum);`,

'py':
`sum = 0
sum += float(input("Enter First Number: "))
sum += float(input("Enter Second Number: "))
print(sum)`,

'c':
`#include<stdio.h>
void main()
{
  float num1, num2;

  printf("Enter First Number: ");
  scanf("%f", &num1);
  printf("Enter Second Number: ");
  scanf("%f", &num2);
  printf("%f", num1 + num2);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  float num1, num2;

  cout << "Enter First Number: ";
  cin >> num1;
  cout << "Enter Second Number: ";
  cin >> num2;
  cout << num1 + num2;
}`,

'java':
`import java.util.Scanner;

class Main
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
}`
},


"multiply_2_numbers":
{
'js':
`let product = 1;
product *= Number(prompt("Enter First Number"));
product *= Number(prompt("Enter Second Number"));
console.log(product);`,

'py':
`product = 1
product *= float(input("Enter First Number: "))
product *= float(input("Enter Second Number: "))
print(product)`,

'c':
`#include<stdio.h>
void main()
{
  float num1, num2;

  printf("Enter First Number: ");
  scanf("%f", &num1);
  printf("Enter Second Number: ");
  scanf("%f", &num2);

  printf("%f", num1 * num2);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  float num1, num2;

  cout << "Enter First Number: ";
  cin >> num1;
  cout << "Enter Second Number: ";
  cin >> num2;
  cout << num1 * num2;
}`,

'java':
`import java.util.Scanner;

class Main
{
  public static void main(String[] args)
  {
    float product = 1;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter First Number: ");
    product *= scanner.nextFloat();
    System.out.println("Enter Second Number: ");
    product *= scanner.nextFloat();
    System.out.println(product);

    scanner.close();
  }
}`
},


"division":
{
'js':
`let num1 = prompt("Enter Dividend");
let num2 = prompt("Enter Divisor");

console.log("Quotient: " + Math.floor(num1 / num2));
console.log("Remainder: " + num1 % num2);`,

'py':
`num1 = float(input("Enter Dividend: "))
num2 = float(input("Enter Divisor: "))

print("Quotient:", num1 // num2)
print("Divisor", num1 % num2)`,

'c':
`#include<stdio.h>
void main()
{
  int num1, num2;

  printf("Enter Dividend: ");
  scanf("%d", &num1);
  printf("Enter Divisor: ");
  scanf("%d", &num2);

  printf("Quotient: %d\\n", num1 / num2);
  printf("Remainder: %d", num1 % num2);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num1, num2;

  cout << "Enter Dividend: ";
  cin >> num1;
  cout << "Enter Divisor: ";
  cin >> num2;

  cout << "Quotient: " << num1 / num2;
  cout << "'\\n'Remainder: " << num1 % num2;
}`,

'java':
`import java.util.Scanner;

class Main
{
  public static void main(String[] args)
  {
    int num1, num2;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Dividend: ");
    num1 = scanner.nextInt();
    System.out.println("Enter Divisor: ");
    num2 = scanner.nextInt();

    System.out.println("Quotient: " + num1 / num2);
    System.out.println("Remainder: " + num1 % num2);

    scanner.close()
  }
}`
}

}

function changeCode(lang)
{terminal.innerText = mainObj[programName][lang];}

changeCode('c');