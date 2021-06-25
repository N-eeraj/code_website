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

    scanner.close();
  }
}`
},


"swap":
{
'js':
`let input1 = prompt("Enter First Input");
let input2 = prompt("Enter Second Input");

console.log("Before Swapping\\nInput 1: " + input1 + ", Input 2: " + input2);
[input1, input2] = [input2, input1];
console.log("After Swapping\\nInput 1: " + input1 + ", Input 2: " + input2);`,

'py':
`input1 = input("Enter First Input: ")
input2 = input("Enter Second Input: ")

print("Before Swapping\\nInput 1:", input1 + ", Input 2:", input2)
input1, input2 = input2, input1;
print("After Swapping\\nInput 1:", input1 + ", Input 2:", input2)`,

'c':
`#include<stdio.h>
void main()
{
  int input1, input2, temp;

  printf("Enter First Input: ");
  scanf("%d", &input1);
  printf("Enter Second Input: ");
  scanf("%d", &input2);

  printf("Before Swapping\\nInput 1: %d, Input 2: %d", input1, input2);
  temp = input1;
  input1 = input2;
  input2 = temp;
  printf("\\nAfter Swapping\\nInput 1: %d, Input 2: %d", input1, input2);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int input1, input2, temp;

  cout << "Enter First Input: ";
  cin >> input1;
  cout << "Enter Second Input: ";
  cin >> input2;
  
  cout << "Before Swapping\\nInput 1: " << input1 << ", Input 2: " << input2;
  temp = input1;
  input1 = input2;
  input2 = temp;
  cout << "\\nAfter Swapping\\nInput 1: " << input1 << ", Input 2: " << input2;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Main
{
  public static void main(String[] args)
  {
    String input1, input2, temp;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter First Input: ");
    input1 = scanner.nextLine();
    System.out.println("Enter Second Input: ");
    input2 = scanner.nextLine();

    System.out.println("Before Swapping\\nInput 1: " + input1 + ", Input 2: "+ input2);
    temp = input1;
    input1 = input2;
    input2 = temp;
    System.out.println("After Swapping\\nInput 1: " + input1 + ", Input 2: "+ input2);

    scanner.close();
  }
}`
},


"rectangle":
{
'js':
`let length = Number(prompt("Enter Length"));
let width = Number(prompt("Enter Width"));

console.log("Area: " + length * width);
console.log("Perimeter: " + 2 * (length + width));`,

'py':
`length = float(input("Enter Length: "))
width = float(input("Enter Width: "))

print("Area: ", length * width)
print("Perimeter: ", 2 * (length + width))`,

'c':
`#include<stdio.h>
void main()
{
  float length, width;

  printf("Enter Length: ");
  scanf("%f", &length);
  printf("Enter Width: ");
  scanf("%f", &width);

  printf("Area: %f", length * width);
  printf("\\nPerimeter: %f", 2 * (length + width));
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  float length, width;

  cout << "Enter Length: ";
  cin >> length;
  cout << "Enter Width: ";
  cin >> width;

  cout << "Area: " << length * width;
  cout << "\\nPerimeter: "<< 2 * (length + width);
  return 0;
}`,

'java':
`import java.util.Scanner;

class Main
{
  public static void main(String[] args)
  {
    float length, width;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Length: ");
    length = scanner.nextFloat();
    System.out.println("Enter Width: ");
    width = scanner.nextFloat();

    System.out.println("Area: " + length * width);
    System.out.println("Perimeter: " + 2 * (length + width));

    scanner.close();
  }
}`
},


"circle":
{
'js':
`let radius = Number(prompt("Enter Radius"));

console.log("Area: " + 3.14 * radius ** 2);
console.log("Circumference: " + 6.28 * radius);`,

'py':
`radius = float(input("Enter Radius: "))

print("Area:", 3.14 * radius ** 2)
print("Circumference:", 6.28 * radius)`,

'c':
`#include<stdio.h>
void main()
{
  float radius;

  printf("Enter Radius: ");
  scanf("%f", &radius);

  printf("Area: %f", 3.14 * radius * radius);
  printf("\\nCircumference : %f", 6.28 * radius);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  float radius;

  cout << "Enter radius: ";
  cin >> radius;

  cout << "Area: " << 3.14 * radius * radius;
  cout << "\\nCircumference: "<< 6.28 * radius;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Main
{
  public static void main(String[] args)
  {
    float radius;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Radius: ");
    radius = scanner.nextFloat();

    System.out.println("Area: " + 3.14 * radius * radius);
    System.out.println("Circumference: " + 6.28 * radius);

    scanner.close();
  }
}`
},


"cube":
{
'js':
`let edge = Number(prompt("Enter Edge"));

console.log("Volume: " + edge ** 3);
console.log("Surface Area: " + 6 * edge ** 2);`,

'py':
`edge = float(input("Enter edge: "))

print("Volume:", edge ** 3)
print("Surface Area:", 6 * edge ** 2)`,

'c':
`#include<stdio.h>
void main()
{
  float edge;

  printf("Enter Edge: ");
  scanf("%f", &edge);

  printf("Volume: %f", pow(edge, 3));
  printf("\\nSurface Area: %f", 6 * pow(edge, 2));
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  float edge;

  cout << "Enter Edge: ";
  cin >> edge;

  cout << "Volume: " << pow(edge, 3);
  cout << "\\nSurface Area: " << 6 * pow(edge, 2);
  return 0;
}`,

'java':
`import java.util.Scanner;

class Main
{
  public static void main(String[] args)
  {
    float edge;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Edge: ");
    edge = scanner.nextFloat();

    System.out.println("Volume: " + Math.pow(edge, 3));
    System.out.println("Surface Area: " + 6 * Math.pow(edge, 2));

    scanner.close();
  }
}`
},


// "programName":
// {
// 'js':
// ``,

// 'py':
// ``,

// 'c':
// ``,

// 'cpp':
// ``,

// 'java':
// ``
// }

}

function changeCode(lang)
{terminal.innerText = mainObj[programName][lang];}

changeCode('c');