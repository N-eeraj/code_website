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
`class HelloWorld
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

class Input
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

class Addition
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

class Multiplication
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

class Division
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

class Rectangle
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

class Circle
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

class Cube
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


"odd_even":
{
'js':
`if(prompt("Enter Numebr") % 2 == 0)
  console.log("Even");
else
  console.log("Odd");`,

'py':
`if int(input("Enter Number: ")) %2 == 0:
  print("Even")
else:
  print("Odd")`,

'c':
`#include<stdio.h>
void main()
{
  int num;

  printf("Enter Number: ");
  scanf("%d", &num);

  if (num % 2 == 0)
    printf("Even");
  else
    printf("Odd");
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num;

  cout << "Enter Number: ";
  cin >> num;

  if (num % 2 == 0)
    cout << "Even";
  else
    cout << "Odd";
  return 0;
}`,

'java':
`import java.util.Scanner;

class OddEven
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    if (scanner.nextInt() % 2 == 0)
      System.out.println("Even");
    else
      System.out.println("Odd");

    scanner.close();
  }
}`
},


"ascii":
{
'js':
`console.log(prompt("Enter Character").charCodeAt());`,

'py':
`print(ord(input("Enter Character: ")))`,

'c':
`#include<stdio.h>
void main()
{
    char character;

    printf("Enter Character: ");
    scanf("%c", &character);

    printf("%d", character);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  char character;

  cout << "Enter Character: ";
  cin >> character;

  cout << int(character);
  return 0;
}`,

'java':
`import java.util.Scanner;

class Ascii
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Character: ");
    System.out.println((int) scanner.next().charAt(0));

    scanner.close();
  }
}`
},


"vowel":
{
'js':
`let alphabet = prompt("Enter Alphabet").toUpperCase();

if ("AEIOU".search(alphabet) == -1)
  console.log(alphabet + " is a Consonant");
else
  console.log(alphabet + " is a Vowel");`,

'py':
`alphabet = input("Enter Alphabet: ").upper()

if alphabet in 'AEIOU':
  print(alphabet, "is a Vowel")
else:
  print(alphabet, "is a Consonant")`,

'c':
`#include<stdio.h>
void main()
{
  char alphabet, vowels[5] = {'A', 'E', 'I', 'O', 'U'}, result[9] = "Consonant";
  int i;

  printf("Enter Alphabet: ");
  scanf("%c", &alphabet);

  alphabet = toupper(alphabet);
  for (i = 0; i < 5; i++)
  {
    if (alphabet == vowels[i])
    {
      strcpy(result, "Vowel");
      break;
    }
  }
  printf("%c is a %s", alphabet , result);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  char alphabet, vowels[5] = {'A', 'E', 'I', 'O', 'U'};
  string result = "Consonant";
  int i;

  cout << "Enter Alphabet: ";
  cin >> alphabet;

  alphabet = toupper(alphabet);
  for (i = 0; i < 5; i++)
  {
    if (alphabet == vowels[i])
    {
      result.replace(0, 10,"Vowel");
      break;
    }
  }
  cout << alphabet << " is a " << result;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Vowel
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Alphabet: ");
    String alphabet =  scanner.next().toUpperCase();
    if ("AEIOU".contains(alphabet))
      System.out.println(alphabet + " is a Vowel");
    else
      System.out.println(alphabet + " is a Consonant");

    scanner.close();
  }
}`
},


"largest":
{
'js':
`let limit = Number(prompt("Enter Limit"));

for(i = 0; i < limit; i++)
{
  let  input = prompt("Enter Input");
  if (i == 0 || largest < input)
    largest = input;
}

console.log(largest)`,

'py':
`for i in range(int(input("Enter Limit: "))):
num = float(input("Enter Input: "))
if i == 0 or largest < num:
    largest = num

print(largest)`,

'c':
`#include<stdio.h>
void main()
{
  int limit, i;
  float input, largest;

  printf("Enter Limit: ");
  scanf("%d", &limit);
  for(i = 0; i < limit; i++)
  {
    printf("Enter Input: ");
    scanf("%f", &input);
    if (i == 0 || largest < input)
      largest = input;
  }

  printf("%f", largest);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, i;
  float input, largest;

  cout << "Enter Limit: ";
  cin >> limit;
  for(i = 0; i < limit; i++)
  {
    cout << "Enter Input: ";
    cin >> input;
    if (i == 0 || largest < input)
      largest = input;
  }
    
  cout << largest;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Largest
{
  public static void main(String[] args)
  {
    int limit, i;
    float input, largest = -999999999;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();
    for (i = 0; i < limit; i++)
    {
      System.out.println("Enter Input: ");
      input = scanner.nextFloat();
      if (i == 0 || largest < input)
        largest = input;
    }

    System.out.println(largest);

    scanner.close();
    }
}`
},


"sign":
{
'js':
`num = Number(prompt("Enter Number"));

if (num < 0)
  console.log("Negative");
else if (num > 0)
  console.log("Positive")
else
  console.log("Zero")`,

'py':
`num = float(input("Enter Number: "))

if num < 0:
    print("Negative")
elif num > 0:
    print("Positive")
else:
    print("Zero")`,

'c':
`#include<stdio.h>
void main()
{
  float num;

  printf("Enter Number: ");
  scanf("%f", &num);

  if (num < 0)
    printf("Negative");
  else if (num > 0)
    printf("Positive");
  else
    printf("Zero");
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  float num;

  cout << "Enter Number: ";
  cin >> num;

  if (num < 0)
    cout << "Negative";
  else if (num > 0)
    cout << "Positive";
  else
    cout << "Zero";
  return 0;
}`,

'java':
`import java.util.Scanner;

class Sign
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    float num = scanner.nextFloat();

    if (num < 0)
      System.out.println("Negative");
    else if (num > 0)
      System.out.println("Positive");
    else
      System.out.println("Zero");

    scanner.close();
  }
}`
},


"is_digit":
{
'js':
`if (isNaN(prompt("Enter Input")))
console.log("Is not Digit");
else
console.log("Is Digit");`,

'py':
`if input("Enter Input: ").isdigit():
print("Is Digit")
else:
print("Is not Digit")
`,

'c':
`#include<stdio.h>
void main()
{
  char input;

  printf("Enter Input: ");
  input = getchar();

  if (isdigit(input))
    printf("Is Digit");
  else
    printf("Is not Digit");
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  char input;

  cout << "Enter Input: ";
  cin >> input;

  if (isdigit(input) != 0)
    cout << "Is Digit";
  else
    cout << "Is not Digit";
  return 0;
}`,

'java':
`import java.util.Scanner;

class Digit
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Input: ");
    try
    {
      Float.parseFloat(scanner.next());
      System.out.println("Is Digit");
    }
    catch(NumberFormatException e)
      {System.out.println("Is not Digit");}

    scanner.close();
  }
}`
},


"leap_year":
{
'js':
`let year = prompt("Enter Year");

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
  console.log("Leap Year");
else
  console.log("Not Leap Year");`,

'py':
`year = int(input("Enter Year: "))

if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
  print("Leap Year")
else:
  print("Not Leap Year")`,

'c':
`#include<stdio.h>
void main()
{
  int year;

  printf("Enter Year: ");
  scanf("%d", &year);

  if (year % 4 == 0  && year % 100 != 0 || year % 400 == 0)
    printf("Leap Year");
  else
    printf("Not Leap Year");
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int year;

  cout << "Enter Year: ";
  cin >> year;

  if (year % 4 == 0  && year % 100 != 0 || year % 400 == 0)
    cout << "Leap Year";
  else
    cout << "Not Leap Year";
}`,

'java':
`import java.util.Scanner;

class LeapYear
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Year: ");
    int year = scanner.nextInt();

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
      System.out.println("Leap Year");
    else
      System.out.println("Not Leap Year");

    scanner.close();
  }
}`
},


"sum_average":
{
'js':
`let limit = prompt("Enter Limit");
let sum = 0;

for (i = 1; i <= limit; i++)
  sum += i;

console.log("Sum: ", sum);
console.log("Average: ", sum / limit);`,

'py':
`limit = int(input("Enter Limit: "))
sum = 0

for i in range(1, limit+1):
  sum += i

print("Sum:", sum)
print("Average:", sum / limit)`,

'c':
`#include<stdio.h>
void main()
{
  int limit, sum = 0, i;

  printf("Enter Limit: ");
  scanf("%d", &limit);

  for (i = 1; i <= limit; i++)
    sum += i;

  printf("Sum: %d\\n", sum);
  printf("Average: %f", sum * 1.0 / limit);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, sum = 0, i;

  cout << "Enter Limit: ";
  cin >> limit;

  for (i = 1; i <= limit; i++)
    sum += i;

  cout << "Sum: " << sum;
  cout << "\\nAverage: " << sum * 1.0 / limit;
  return 0;
}`,

'java':
`import java.util.Scanner;

class SumAverage
{
  public static void main(String[] args)
  {
    int limit, sum = 0, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();

    for (i = 0; i <= limit; i++)
      sum += i;

    System.out.println("Sum: " + sum);
    System.out.println("Average: " + sum * 1.0 / limit);

    scanner.close();
  }
}`
},


"factorial":
{
'js':
`function fact(num)
{
  let factorial = 1;

  if (num == 1)
    return 1;
   factorial = num * fact(num - 1);

  return factorial;
}

console.log(fact(prompt("Enter Input")));`,

'py':
`def fact(num):
factorial = 1

if num == 1:
  return 1
factorial = num * fact(num - 1)

return factorial

print(fact(int(input("Enter Input: "))))`,

'c':
`#include<stdio.h>
void main()
{
  int input;

  printf("Enter Input: ");
  scanf("%d", &input);

  printf("%d", fact(input));
}

int fact(num)
{
  int factorial = 1;

  if (num == 1)
    return 1;
  factorial = num * fact(num - 1);

  return factorial;
}`,

'cpp':
`#include<iostream>
using namespace std;

int fact(int num)
{
  int factorial = 1;

  if (num == 1)
    return 1;
  factorial = num * fact(num - 1);

  return factorial;
}

int main()
{
  int input;

  cout << "Enter Input: ";
  cin >> input;

  cout << fact(input);
  return 0;
}`,

'java':
`import java.util.Scanner;

class Factorial
{
  public static int fact(int num)
  {
    int factorial = 1;

    if (num == 1)
      return 1;
    factorial = num * fact(num - 1);

    return factorial;
  }
    
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Input: ");
    int input = scanner.nextInt();

    System.out.println(fact(input));

    scanner.close();
  }
}`
},


"multiplication_table":
{
'js':
`num = prompt("Enter Number: ");

for (i = 1; i < 11; i++)
  console.log(num + " x " + i + " = " + num * i);`,

'py':
`num = int(input("Enter Number: "))

for i in range(1, 11):
  print(num, 'x', i, '=', num * i)`,

'c':
`#include<stdio.h>
void main()
{
  int num, i;

  printf("Enter Number: ");
  scanf("%d", &num);

  for (i = 1; i < 11; i++)
    printf("%d x %d = %d\\n", num, i, num * i);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num, i;

  cout << "Enter Number: ";
  cin >> num;

  for (i = 1; i < 11; i++)
      cout << num << " x " << i << " = " << num * i <<"\\n";
  return 0;
}`,

'java':
`import java.util.Scanner;

class MultiplicationTable
{
  public static void main(String[] args)
  {
    int num, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    num = scanner.nextInt();

    for (i = 1; i < 11; i++)
      System.out.println(num + " x " + i + " = " + num * i);

    scanner.close();
  }
}`
},


"fibonacci":
{
'js':
`first = 0;
second = 1;

limit = prompt("Enter Limit: ")

console.log(first, second);
for (i = 2; i < limit; i++)
{
  next = first + second;
  console.log(next);
  [first, second] = [second, next];
}`,

'py':
`first = 0
second = 1

limit = int(input("Enter Limit: "))

print(first)
print(second)
for i in range(2, limit):
  next = first + second
  print(next)
  first, second = second, next`,

'c':
`#include<stdio.h>
void main()
{
  int limit, first = 0, second = 1, next, i;

  printf("Enter Limit: ");
  scanf("%d", &limit);

  printf("%d\\n%d\\n", first, second);
  for (i = 2; i < limit; i++)
  {
    next = first + second;
    printf("%d\\n", next);
    first = second;
    second = next;
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, first = 0, second = 1, next, i;

  cout << "Enter Limit: ";
  cin >> limit;

  cout << first << "\\n" << second;
  for (i = 2; i < limit; i++)
  {
    next = first + second;
    cout << next << "\\n";
    first = second;
    second = next;
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class Fibonacci
{
  public static void main(String[] args)
  {
    int limit, first = 0, second = 1, next, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();

    System.out.println(first + "\\n" + second);
    for (i = 2; i < limit; i++)
    {
      next = first + second;
      System.out.println(next);
      first = second;
      second = next;
    }

    scanner.close();
  }
}`
},


"string_length":
{
'js':
`console.log(prompt("Enter Input").length);`,

'py':
`print(len(input("Enter Input: ")))`,

'c':
`#include<stdio.h>
void main()
{
  char input[25];

  printf("Enter Input: ");
  gets(input);

  printf("%d", strlen(input));
}`,

'cpp':
`#include<iostream>
#include<cstring>
using namespace std;
int main()
{
  char input[25];

  cout << "Enter Input: ";
  cin.getline(input, 25);

  cout << strlen(input);
  return 0;
}`,

'java':
`import java.util.Scanner;

class StringLength
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Input: ");
    System.out.println(scanner.nextLine().length());

    scanner.close();
  }
}`
},


"number_length":
{
'js':
`console.log(Number(prompt("Enter Number")).toString().length);`,

'py':
`print(len(str(int(input("Enter Number: ")))))`,

'c':
`#include<stdio.h>
void main()
{
  int num, length = 1;

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num / 10 != 0)
  {
    num /= 10;
    length++;
  }
  printf("%d", length);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num, length = 1;

  cout << "Enter Number: ";
  cin >> num;

  while (num / 10 != 0)
  {
    num /= 10;
    length++;
  }
  cout << length;
  return 0;
}`,

'java':
`import java.util.Scanner;

class NumberLength
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toString(scanner.nextInt()).length());

    scanner.close();
  }
}`
},


"reverse":
{
'js':
`console.log(Number(prompt("Enter Number: ")).toString().split('').reverse().join(''))`,

'py':
`print(str(int(input("Enter Number: ")))[::-1])`,

'c':
`#include<stdio.h>
void main()
{
  int num, reverse = 0;

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    reverse = reverse * 10 + num % 10;
    num /= 10;
  }
  printf("%d", reverse);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num, reverse = 0;

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    reverse = reverse * 10 + num % 10;
    num /= 10;
  }
  cout << reverse;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Reverse
{
  public static void main(String[] args)
  {
    int num, reverse = 0;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    num = scanner.nextInt();

    while (num != 0)
    {
      reverse = reverse * 10 + num % 10;
      num /= 10;
    }
    System.out.println(reverse);

    scanner.close();
  }
}`
},


"palindrome":
{
'js':
`let input = prompt("Enter Input");

if (input == input.split('').reverse().join(''))
  console.log("Palindrome");
else
  console.log("Not Palindrome");`,

'py':
`input = input("Enter Input: ")

if input == input[::-1]:
  print("Palindrome") 
else:
  print("Not Palindrome")`,

'c':
`#include<stdio.h>
#include<string.h>
void main()
{
  char input[25], result[15] = "Palindrome";
  int length, i;

  printf("Enter Input: ");
  gets(input);

  length = strlen(input);
  for (i = 0; i < length / 2; i++)
  {
    if (input[i] != input[length - i - 1])
    {
      strcpy(result, "Not Palindrome");
      break;
    }
  }

  printf("%s", result);
}`,

'cpp':
`#include<iostream>
#include<string.h>
using namespace std;
int main()
{
  char input[25];
  string result = "Palindrome";
  int length, i;
  
  cout << "Enter Input: ";
  cin >> input;

  length = strlen(input);
  for (i = 0; i < length / 2; i++)
  {
    if (input[i] != input[length - i - 1])
    {
      result.replace(0, 14, "Not Palindrome");
      break;
    }
  }
  cout << result;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Palindrome
{
  public static void main(String[] args)
  {
    String input, result = "Palindrome";
    int length, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Input: ");
    input = scanner.nextLine();

    length = input.length();
    for (i = 0; i < length / 2; i++)
    {
      if (input.charAt(i) != input.charAt(length - i - 1))
      {
        result = "Not Palindrome";
        break;
      }
    }
    System.out.println(result);

    scanner.close();
  }
}`
},


"power":
{
'js':
`console.log(prompt("Enter Base") ** prompt("Enter Exponent"));`,

'py':
`print(int(input("Enter Base: ")) ** int(input("Enter Exponent: ")))`,

'c':
`#include<stdio.h>
void main()
{
  int base, exponent, answer;

  printf("Enter Base: ");
  scanf("%d", &base);
  printf("Enter Exponent: ");
  scanf("%d", &exponent);

  answer = pow(base, exponent);
  printf("%d", answer);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int base, exponent;

  cout << "Enter Base: ";
  cin >> base;
  cout << "Enter Exponent: ";
  cin >> exponent;

  cout << pow(base, exponent);
  return 0;
}`,

'java':
`import java.util.Scanner;

class Power
{
  public static void main(String[] args)
  {
    int base, exponent;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Base: ");
    base = scanner.nextInt();
    System.out.println("Enter Exponent: ");
    exponent = scanner.nextInt();

    System.out.println(Math.pow(base, exponent));

    scanner.close();
  }
}`
},


"prime":
{
'js':
`prime = "Prime";

num = prompt("Enter Number");

for (i = 2; i < num; i++)
{
  if (num % i == 0)
  {
    prime = "Not Prime";
    break;
  }
}
console.log(prime);`,

'py':
`prime = "Prime"

num = int(input("Enter Number: "))

for i in range(2, num):
  if num % i == 0:
    prime = "Not Prime"
    break
print(prime)`,

'c':
`#include<stdio.h>
void main()
{
  int num, i;
  char prime[10] = "Prime";

  printf("Enter Number: ");
  scanf("%d", &num);

  for (i = 2; i < num; i++)
  {
    if (num % i == 0)
    {
      strcpy(prime, "Not Prime");
      break;
    }
  }
  printf("%s", prime);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num, i;
  string prime = "Prime";

  cout << "Enter Number: ";
  cin >> num;

  for (i = 2; i < num; i++)
  {
    if (num % i == 0)
    {
      prime.replace(0, 10, "Not Prime");
      break;
    }
  }
  cout << prime;
  return 0;
}`,

'java':
`import java.util.Scanner;

class Prime
{
  public static void main(String[] args)
  {
    int num, i;
    String prime = "Prime";
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    num = scanner.nextInt();

    for (i = 2; i < num; i++)
    {
      if (num % i == 0)
      {
        prime = "Not Prime";
        break;
      }
    }
    System.out.println(prime);

    scanner.close();
  }
}`
},


"prime_range":
{
'js':
`let range = prompt("Enter Range");

for (i = 2; i <= range; i++)
{
  let prime = true;
  for (j = 2; j < i; j++)
  {
    if (i % j == 0)
    {
      prime = false;
      break;
    }
  }
  if (prime)
    console.log(i)
}`,

'py':
`limit = int(input("Enter Range: "))

for i in range(2, limit + 1):
  prime = True
  for j in range(2, i):
    if i % j == 0:
      prime = False
      break
  if prime:
    print(i)`,

'c':
`#include<stdio.h>
#include<stdbool.h>
void main()
{
  int range, i, j;
  bool prime;

  printf("Enter Range: ");
  scanf("%d", &range);

  for (i = 2; i <= range; i++)
  {
    prime = true;
    for (j = 2; j < i; j++)
    {
      if (i % j == 0)
      {
        prime = false;
        break;
      }
    }
    if (prime)
      printf("%d\\n", i);
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int range, i, j;
  bool prime;

  cout << "Enter Range: ";
  cin >> range;

  for (i = 2; i <= range; i++)
  {
    prime = true;
    for (j = 2; j < i; j++)
    {
      if (i % j == 0)
      {
        prime = false;
        break;
      }
    }
    if (prime)
      cout << i << "\\n";
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class PrimeRange
{
  public static void main(String[] args)
  {
    int range, i, j;
    boolean prime;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Range: ");
    range = scanner.nextInt();

    for (i = 2; i <= range; i++)
    {
      prime = true;
      for (j = 2; j < i; j++)
      {
        if (i % j == 0)
        {
          prime = false;
          break;
        }
      }
      if (prime)
        System.out.println(i);
    }

    scanner.close();
  }
}`
},


"quadratic_roots":
{
'js':
`a = prompt("Enter Coefficient a");
b = prompt("Enter Coefficient b");
c = prompt("Enter Coefficient c");

let d = b ** 2 - (4 * a * c);
if (d > 0)
{
  console.log((-b + Math.sqrt(d)) / (2 * a));
  console.log((-b - Math.sqrt(d)) / (2 * a));
}
else if (d == 0)
  console.log(-b / (2 * a));
else
  console.log("Complex Roots");`,

'py':
`from math import sqrt

a = float(input("Enter Coefficient a: "))
b = float(input("Enter Coefficient b: "))
c = float(input("Enter Coefficient c: "))

d = b ** 2 - (4 * a * c)
if d > 0:
  print((-b + sqrt(d)) / (2 * a))
  print((-b - sqrt(d)) / (2 * a))
elif d == 0:
  print(-b / (2 * a))
else:
  print("Complex Roots")`,

'c':
`#include<stdio.h>
#include<math.h>
void main()
{
  float a, b, c, d;

  printf("Enter Coefficient a: ");
  scanf("%f", &a);
  printf("Enter Coefficient b: ");
  scanf("%f", &b);
  printf("Enter Coefficient c: ");
  scanf("%f", &c);

  d = pow(b, 2) - (4 * a * c);
  if (d > 0)
  {
    printf("%f\\n", (-b + sqrt(d)) / (2 * a));
    printf("%f", (-b - sqrt(d)) / (2 * a));
  }
  else if (d == 0)
    printf("%f", -b / (2 * a));
  else
    printf("Complex Roots");
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  float a, b, c, d;

  cout << "Enter Coefficient a: ";
  cin >> a;
  cout << "Enter Coefficient b: ";
  cin >> b;
  cout << "Enter Coefficient c: ";
  cin >> c;

  d = pow(b,2) - (4 * a * c);
  if (d > 0)
  {
    cout << (-b + sqrt(d)) / (2 * a) << "\\n";
    cout << (-b - sqrt(d)) / (2 * a);
  }
  else if(d == 0)
    cout << -b / (2 * a);
  else
    cout << "Complex Roots";
  return 0;
}`,

'java':
`import java.util.Scanner;

class Roots
{
  public static void main(String[] args)
  {
    double a, b, c, d;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Coefficient a: ");
    a = scanner.nextFloat();
    System.out.println("Enter Coefficient b: ");
    b = scanner.nextFloat();
    System.out.println("Enter Coefficient c: ");
    c = scanner.nextFloat();

    d = Math.pow(b, 2) - (4 * a * c);
    if (d > 0)
    {
      System.out.println((-b + Math.sqrt(d) )/ (2 * a));
      System.out.println((-b - Math.sqrt(d)) / (2 * a));
    }
    else if (d == 0)
      System.out.println(-b / (2 * a));
    else
      System.out.println("Complex Roots");

    scanner.close();
  }
}`
},


"gcd":
{
'js':
`num1 = prompt("Enter First Number");
num2 = prompt("Enter Second Number");
gcd = 1;

num = (num1 < num2)? num1 : num2;
for (i = 2; i <= num; i++)
{
  if (num1 % i == 0 && num2 % i == 0)
    gcd = i;
}
console.log(gcd)`,

'py':
`num1 = int(input("Enter First Number: "))
num2 = int(input("Enter Second Number: "))
gcd = 1

num = num1 if num1 < num2 else num2
for i in range(2, num + 1):
  if num1 % i == 0 and num2 % i == 0:
    gcd = i
print(gcd)`,

'c':
`#include<stdio.h>
void main()
{
  int num1, num2, num, gcd = 1, i;

  printf("Enter First Number: ");
  scanf("%d", &num1);
  printf("Enter Second Number: ");
  scanf("%d", &num2);

  num = num1 < num2 ? num1: num2;
  for (i = 2; i <= num; i++)
  {
    if (num1 % i == 0 && num2 % i == 0)
      gcd = i;
  }
  printf("%d", gcd);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num1, num2, num, gcd = 1, i;

  cout << "Enter First Number: ";
  cin >> num1;
  cout << "Enter Second Number: ";
  cin >> num2;

  num = num1 < num2 ? num1: num2;
  for (i = 2; i <= num; i++)
  {
    if (num1 % i == 0 && num2 % i == 0)
      gcd = i;
  }
  cout << gcd;
  return 0;
}`,

'java':
`import java.util.Scanner;

class GCD
{
  public static void main(String[] args)
  {
    int num1, num2, num, gcd = 1, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter First Number: ");
    num1 = scanner.nextInt();
    System.out.println("Enter Second Number: ");
    num2 = scanner.nextInt();

    num = num1 < num2 ? num1: num2;
    for (i = 2; i<= num; i++)
    {
      if (num1 % i == 0 && num2 % i == 0)
        gcd = i;
    }
    System.out.println(gcd);

    scanner.close();
  }
}`
},


"lcm":
{
'js':
`num1 = Number(prompt("Enter First Number"));
num2 = Number(prompt("Enter Second Number"));

let num1M = num1;
let num2M = num2;
while (num1M != num2M)
{
  if (num1M < num2M)
    num1M += num1;
  else
    num2M += num2;
}
console.log(num1M);`,

'py':
`num1 = int(input("Enter First Number: "))
num2 = int(input("Enter Second Number: "))

num1M = num1;
num2M = num2;
while (num1M != num2M):
  if num1M < num2M:
    num1M += num1
  else:
    num2M += num2
print(num1M)`,

'c':
`#include<stdio.h>
void main()
{
  int num1, num2, num1M, num2M;

  printf("Enter First Number: ");
  scanf("%d", &num1);
  printf("Enter Second Number: ");
  scanf("%d", &num2);

  num1M = num1;
  num2M = num2;
  while (num1M != num2M)
  {
    if (num1M < num2M)
      num1M += num1;
    else
      num2M += num2;
  }
  printf("%d", num1M);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num1, num2, num1M, num2M;

  cout << "Enter First Number: ";
  cin >> num1;
  cout << "Enter Second Number: ";
  cin >> num2;

  num1M = num1;
  num2M = num2;
  while (num1M != num2M)
  {
    if (num1M < num2M)
      num1M += num1;
    else
      num2M += num2;
  }
  cout << num1M;
  return 0;
}`,

'java':
`import java.util.Scanner;

class LCM
{
  public static void main(String[] args)
  {
    int num1, num2, num1M, num2M;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter First Number: ");
    num1 = scanner.nextInt();
    System.out.println("Enter Second Number: ");
    num2 = scanner.nextInt();

    num1M = num1;
    num2M = num2;
    while (num1M != num2M)
    {
      if (num1M < num2M)
        num1M += num1;
      else
        num2M += num2;
    }
    System.out.println(num1M);

    scanner.close();
  }
}`
},


"armstrong":
{
'js':
`num = prompt("Enter Number");

length = num.length;
sum = 0
for (i in num)
  sum += num[i] ** length;
if (sum == num)
  console.log("Armstrong")
else
  console.log("Not Armstrong ")`,

'py':
`num = int(input("Enter Number: "))

length = len(str(num))
sum = 0
for i in str(num):
  sum += int(i) ** length
if sum == num:
  print("Armstrong")
else:
  print("Not Armstrong")`,

'c':
`#include<stdio.h>
void main()
{
  int num, numCopy, length = 1, sum = 0, i;

  printf("Enter Number: ");
  scanf("%d", &num);

  numCopy = num;
  while (numCopy / 10 != 0)
  {
    numCopy /= 10;
    length++;
  }
  numCopy = num;
  for (i = 0; i < length; i++)
  {
    sum += pow(numCopy % 10, length);
    numCopy /= 10;
  }
  if (num == sum)
    printf("Armstrong");
  else
    printf("Not Armstrong");
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, numCopy, length = 1, sum = 0, i;

  cout << "Enter Number: ";
  cin >> num;

  numCopy = num;
  while (numCopy / 10 != 0)
  {
    numCopy /= 10;
    length++;
  }
  numCopy = num;
  for (i = 0; i < length; i++)
  {
    sum += pow(numCopy % 10, length);
    numCopy /= 10;
  }
  if (num == sum)
    cout << "Armstrong";
  else
    cout << "Not Armstrong";
  return 0;
}`,

'java':
`import java.util.Scanner;

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
}`
},


"factor":
{
'js':
`num = prompt("Enter Number");

for (i = 1; i <= num; i++)
{
  if (num % i == 0)
    console.log(i);
}`,

'py':
`num = int(input("Enter Number: "))

for i in range(1, num + 1):
  if num % i == 0:
    print(i)`,

'c':
`#include<stdio.h>
void main()
{
  int num, i;

  printf("Enter Number: ");
  scanf("%d", &num);

  for (i = 1; i <= num; i++)
  {
    if (num % i == 0)
      printf("%d\\n", i);
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num, i;

  cout << "Enter Number: ";
  cin >> num;

  for (i = 1; i <= num; i++)
  {
    if (num % i == 0)
      cout << i << "\\n";
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class Factor
{
  public static void main(String[] args)
  {
    int num, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    num = scanner.nextInt();

    for (i = 1; i <= num; i++)
    {
      if (num % i == 0)
        System.out.println(i);
    }

    scanner.close();
  }
}`
},


"menu_calculator":
{
'js':
`num1 = Number(prompt("Enter First Number"));
num2 = Number(prompt("Enter Second Number"));
operation = prompt("1. Addition\\n2. Subtraction\\n3. Multiplication\\n4. Division\\nEnter Operation Number");

switch (operation)
{
  case '1':
      console.log(num1 + num2);
      break;
  case '2':
      console.log(num1 - num2);
      break;
  case '3':
      console.log(num1 * num2);
      break;
  case '4':
      console.log(num1 / num2);
      break;
  default:
    console.log("Invalid Option");
}`,

'py':
`num1 = float(input("Enter First Number: "))
num2 = float(input("Enter Second Number: "))
operation = input("1. Addition\\n2. Subtraction\\n3. Multiplication\\n4. Division\\nEnter Operation Number: ")

if operation == '1':
  print(num1 + num2)
elif operation == '2':
  print(num1 - num2)
elif operation == '3':
  print(num1 * num2)
elif operation == '4':
  print(num1 / num2)
else:
  print("Invalid Option")`,

'c':
`#include<stdio.h>
void main()
{
  float num1, num2;
  int operation;

  printf("Enter First Number: ");
  scanf("%f", &num1);
  printf("Enter Second Number: ");
  scanf("%f", &num2);
  printf("1. Addition\\n2. Subtraction\\n3. Multiplication\\n4. Division\\nEnter Operation Number: ");
  scanf("%d", &operation);

  switch (operation)
  {
    case 1:
      printf("%f", num1 + num2);
      break;
    case 2:
      printf("%f", num1 - num2);
      break;
    case 3:
      printf("%f", num1 * num2);
      break;
    case 4:
      printf("%f", num1 / num2);
      break;
    default:
      printf("Invalid Option");
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  float num1, num2;
  int operation;

  cout << "Enter First Number: ";
  cin >> num1;
  cout << "Enter Second Number: ";
  cin >> num2;
  cout << "1. Addition\\n2. Subtraction\\n3. Multiplication\\n4. Division\\nEnter Operation Number: ";
  cin >> operation;

  switch (operation)
  {
    case 1:
      cout << num1 + num2;
      break;
    case 2:
      cout << num1 - num2;
      break;
    case 3:
      cout << num1 * num2;
      break;
    case 4:
      cout << num1 / num2;
      break;
    default:
      printf("Invalid Option");
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class MenuCalculator
{
  public static void main(String[] args)
  {
    float num1, num2;
    int operation;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter First Number: ");
    num1 = scanner.nextFloat();
    System.out.println("Enter Second Number: ");
    num2 = scanner.nextFloat();
    System.out.println("1. Addition\\n2. Subtraction\\n3. Multiplication\\n4. Division\\nEnter Operation Number: ");
    operation = scanner.nextInt();

    switch (operation)
    {
      case 1:
        System.out.println(num1 + num2);
        break;
      case 2:
        System.out.println(num1 - num2);
        break;
      case 3:
        System.out.println(num1 * num2);
        break;
      case 4:
        System.out.println(num1 / num2);
        break;
      default:
        System.out.println("Invalid Option");
    }

    scanner.close();
  }
}`
},


"decimal_binary":
{
'js':
`console.log(parseInt(prompt("Enter Number")).toString(2));`,

'py':
`print(str(bin(int(input("Enter Number: "))))[2:])`,

'c':
`#include<stdio.h>
void main()
{
  int num, binary = 0, i = 0;

  printf("Enter Number: ");
  scanf("%d", &num);

  do
  {
    binary += (num % 2) * pow(10, i);
    num /= 2;
    i++;
  } while (num != 0);
  printf("%d", binary);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, binary = 0, i = 0;

  cout << "Enter Number: ";
  cin >> num;

  do
  {
    binary += (num % 2) * pow(10, i);
    num /= 2;
    i++;
  } while (num != 0);
  cout << binary;
  return 0;
}`,

'java':
`import java.util.Scanner;

class DecimalBinary
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toBinaryString(scanner.nextInt()));

    scanner.close();
  }
}`
},


"decimal_octal":
{
'js':
`console.log(parseInt(prompt("Enter Number")).toString(8));`,

'py':
`print(str(oct(int(input("Enter Number: "))))[2:])`,

'c':
`#include<stdio.h>
void main()
{
  int num, oct = 0, i = 0;

  printf("Enter Number: ");
  scanf("%d", &num);

  do
  {
    oct += (num % 8) * pow(10, i);
    num /= 8;
    i++;
  } while (num != 0);
  printf("%d", oct);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, oct = 0, i = 0;

  cout << "Enter Number: ";
  cin >> num;

  do
  {
    oct += (num % 8) * pow(10, i);
    num /= 8;
    i++;
  } while (num != 0);
  cout << oct;
  return 0;
}`,

'java':
`import java.util.Scanner;

class DecimalOctal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toOctalString(scanner.nextInt()));

    scanner.close();
  }
}`
},


"decimal_hexadecimal":
{
'js':
`console.log(parseInt(prompt("Enter Number")).toString(16).toUpperCase());`,

'py':
`print(str(hex(int(input("Enter Number: ")))).upper()[2:])`,

'c':
`#include<stdio.h>
void main()
{
  int num, hex, i = 0, j;
  char hexD[25] = "";

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    hex = num % 16;
    if (hex > 9)
      hex += 55;
    else
      hex += 48;
    hexD[i++] = hex;
    num /= 16;
  };
  for (j = i - 1; j >= 0; j--)
    printf("%c", hexD[j]);
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int num, hex, i = 0, j;
  char hexD[25] = "";

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    hex = num % 16;
    if (hex > 9)
      hex += 55;
    else
      hex += 48;
    hexD[i++] = hex;
    num /= 16;
  };
  for (j = i - 1; j >= 0; j--)
    cout << hexD[j];
  return 0;
}`,

'java':
`import java.util.Scanner;

class DecimalHexadecimal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toHexString(scanner.nextInt()).toUpperCase());

    scanner.close();
  }
}`
},


"binary_decimal":
{
'js':
`console.log(parseInt(prompt("Enter Number"), 2));`,

'py':
`print(int(input("Enter Number: "), 2))`,

'c':
`#include<stdio.h>
void main()
{
  int num, dec = 0, temp, i = 0;

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    temp = num % 10;
    if (temp != 0 && temp!= 1)
    {
      printf("\\nInvalid Input\\n");
      break;
    }
    dec += temp * pow(2, i++);
    num /= 10;
  }
  printf("%d", dec);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, dec = 0, temp, i = 0;

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    temp = num % 10;
    if (temp != 0 && temp!= 1)
    {
      cout << "\\nInvalid Input\\n";
      break;
    }
    dec += temp * pow(2, i++);
    num /= 10;
  }
  cout << dec;
  return 0;
}`,

'java':
`import java.util.Scanner;

class BinaryDecimal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.parseInt(scanner.next(), 2));

    scanner.close();
  }
}`
},


"octal_decimal":
{
'js':
`console.log(parseInt(prompt("Enter Number"), 8));`,

'py':
`print(int(input("Enter Number: "), 8))`,

'c':
`#include<stdio.h>
void main()
{
  int num, dec = 0, temp, i = 0;

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    temp = num % 10;
    if (temp > 7 || temp < 0)
    {
      printf("\\nInvalid Input\\n");
      break;
    }
    dec += temp * pow(8, i++);
    num /= 10;
  }
  printf("%d", dec);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, dec = 0, temp, i = 0;

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    temp = num % 10;
    if (temp > 7 || temp < 0)
    {
      cout << "\\nInvalid Input\\n";
      break;
    }
    dec += temp * pow(8, i++);
    num /= 10;
  }
  cout << dec;
  return 0;
}`,

'java':
`import java.util.Scanner;

class OctalDecimal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.parseInt(scanner.next(), 8));

    scanner.close();
  }
}`
},


"hexadecimal_decimal":
{
'js':
`console.log(parseInt(prompt("Enter Number"), 16));`,

'py':
`print(int(input("Enter Number: "), 16))`,

'c':
`#include<stdio.h>
void main()
{
  char num[10];
  int dec = 0, temp, i, j = 0;

  printf("Enter Number: ");
  gets(num);

  for (i = strlen(num) - 1; i >= 0; i--)
  {
    temp = num[i];
    if (temp > 47 && temp < 58)
      temp -= 48;
    else if (temp > 64 && temp < 71)
      temp -= 55;
    else if (temp > 96 && temp < 103)
      temp -= 87;
    else
    {
      printf("\\nInvalid Input\\n");
      break;
    }
    dec += temp * pow(16, j++);
  }
  printf("%d", dec);
}`,

'cpp':
`#include<iostream>
#include<cmath>
#include<cstring>
using namespace std;
int main()
{
  char num[10];
  int dec = 0, temp, i, j = 0;

  cout << "Enter Number: ";
  cin >> num;

  for (i = strlen(num) - 1; i >= 0; i--)
  {
    temp = num[i];
    if (temp > 47 && temp < 58)
      temp -= 48;
    else if (temp > 64 && temp < 71)
      temp -= 55;
    else if (temp > 96 && temp < 103)
      temp -= 87;
    else
    {
      cout << "\\nInvalid Input\\n";
      break;
    }
    dec += temp * pow(16, j++);
  }
  cout << dec;
  return 0;
}`,

'java':
`import java.util.Scanner;

class HexadecimalDecimal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.parseInt(scanner.next(), 16));

    scanner.close();
  }
}`
},


"binary_octal":
{
'js':
`console.log(parseInt(prompt("Enter Number"), 2).toString(8));`,

'py':
`print(str(oct(int(input("Enter Number: "), 2)))[2:])`,

'c':
`#include<stdio.h>
#include<stdbool.h>
void main()
{
  int num, oct = 0, octTemp, temp, i = 0, j;
  bool invalid = false;

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    temp = num % 1000;
    octTemp = 0;
    j = 0;
    while (temp != 0)
    {
      if (temp % 10 != 0 && temp % 10 != 1)
      {
        invalid = true;
        printf("Invalid Input\\n");
        break;
      }
      if (invalid == true)
        break;
      octTemp += temp % 10 * pow(2, j++);
      temp /= 10;
    }
    oct += octTemp * pow(10, i++);
    num /= 1000;
  }
  printf("%d", oct);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, oct = 0, octTemp, temp, i = 0, j;
  bool invalid = false;

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    temp = num % 1000;
    octTemp = 0;
    j = 0;
    while (temp != 0)
    {
      if (temp % 10 != 0 && temp % 10 != 1)
      {
        invalid = true;
        cout << "Invalid Input\\n";
        break;
      }
      if (invalid == true)
        break;
      octTemp += temp % 10 * pow(2, j++);
      temp /= 10;
    }
    oct += octTemp * pow(10, i++);
    num /= 1000;
  }
  cout << oct;
}`,

'java':
`import java.util.Scanner;

class BinaryOctal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toOctalString(Integer.parseInt(scanner.next(), 2)));

    scanner.close();
  }
}`
},


"octal_binary":
{
'js':
`console.log((parseInt(prompt("Enter Number"), 8)).toString(2))`,

'py':
`print(str(bin(int(input("Enter Number: "), 8)))[2:])`,

'c':
`#include<stdio.h>
void main()
{
  int num, bin = 0, temp, i = 0;

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    temp = num % 10;
    if (temp > 7 || temp < 0)
    {
      printf("\\nInvalid Input\\n");
      break;
    }
    while (temp != 0)
    {
      bin += temp % 2 * pow(10, i++);
      temp /= 2;
    }
    num /= 10;
  }
  printf("%d", bin);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, bin = 0, temp, i = 0;

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    temp = num % 10;
    if (temp > 7 || temp < 0)
    {
      cout << "\\nInvalid Input\\n";
      break;
    }
    while (temp != 0)
    {
      bin += (temp % 2) * pow(10, i++);
      temp /= 2;
    }
    num /= 10;
  }
  cout << bin;
}`,

'java':
`import java.util.Scanner;

class OctalBinary
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toBinaryString(Integer.parseInt(scanner.next(), 8)));

    scanner.close();
  }
}`
},


"octal_hexadecimal":
{
'js':
`console.log((parseInt(prompt("Enter Number"), 8)).toString(16).toUpperCase())`,

'py':
`print(str(hex(int(input("Enter Number: "), 8))).upper()[2:])`,

'c':
`#include<stdio.h>
#include<math.h>
void main()
{
  int num, dec = 0, hex, temp, i = 0, j;
  char hexD[25] = "";

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    temp = num % 10;
    if (temp > 7 || temp < 0)
    {
      printf("\\nInvalid Input\\n");
      break;
    }
    dec += temp * pow(8, i++);
    num /= 10;
  }
  i = 0;
  while (dec != 0)
  {
    hex = dec % 16;
    if (hex > 9)
      hex += 55;
    else
      hex += 48;
    hexD[i++] = hex;
    dec /= 16;
  };
  for (j = i - 1; j >= 0; j--)
    printf("%c", hexD[j]);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, dec = 0, hex, temp, i = 0, j;
  char hexD[25] = "";

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    temp = num % 10;
    if (temp > 7 || temp < 0)
    {
      cout << "\\nInvalid Input\\n";
      break;
    }
    dec += temp * pow(8, i++);
    num /= 10;
  }
  i = 0;
  while (dec != 0)
  {
    hex = dec % 16;
    if (hex > 9)
      hex += 55;
    else
      hex += 48;
    hexD[i++] = hex;
    dec /= 16;
  };
  for (j = i - 1; j >= 0; j--)
    cout << hexD[j];
  return 0;
}`,

'java':
`import java.util.Scanner;

class OctalHexadecimal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toHexString(Integer.parseInt(scanner.next(), 8)).toUpperCase());

    scanner.close();
  }
}`
},


"binary_hexadecimal":
{
'js':
`console.log(parseInt(prompt("Enter Number"), 2).toString(16).toUpperCase())`,

'py':
`print(str(hex(int(input("Enter Number: "), 2)))[2:].upper())`,

'c':
`#include<stdio.h>
#include<stdbool.h>
void main()
{
  int num, hex, temp, i = 0, j;
  char hexD[25] = "";
  bool invalid = false;

  printf("Enter Number: ");
  scanf("%d", &num);

  while (num != 0)
  {
    hex = 0;
    j = 0;
    temp = num % 10000;
    while (temp != 0)
    {
      if (temp % 10 != 0 && temp % 10 != 1)
      {
        invalid = true;
        printf("Invalid Input\\n");
        break;
      }
      hex += temp % 10 * pow(2, j++);
        temp /= 10;
    }
    if (hex > 9)
      hex += 55;
    else
      hex += 48;
    hexD[i++] = hex;
    num /= 10000;
  }
  for (i--; i >= 0; i--)
    printf("%c", hexD[i]);
}`,

'cpp':
`#include<iostream>
#include<cmath>
using namespace std;
int main()
{
  int num, hex, temp, hexTemp, i = 0, j;
  char hexD[25] = "";
  bool invalid = false;

  cout << "Enter Number: ";
  cin >> num;

  while (num != 0)
  {
    hex = 0;
    j = 0;
    temp = num % 10000;
    while (temp != 0)
    {
      if (temp % 10 != 0 && temp % 10 != 1)
      {
        invalid = true;
        cout << "Invalid Input\\n";
        break;
      }
      hex += temp % 10 * pow(2, j++);
      temp /= 10;
    }
    if (hex > 9)
      hex += 55;
    else
      hex += 48;
    hexD[i++] = hex;
    num /= 10000;
  }
  for (i--; i >= 0; i--)
    cout << hexD[i];
}`,

'java':
`import java.util.Scanner;

class BinaryHexadecimal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toHexString(Integer.parseInt(scanner.next(), 2)).toUpperCase());

    scanner.close();
  }
}`
},


"hexadecimal_binary":
{
'js':
`console.log(parseInt(prompt("Enter Number"), 16).toString(2));`,

'py':
`print(str(bin(int(input("Enter Number: "), 16)))[2:])`,

'c':
`#include<stdio.h>
void main()
{
  char num[10];
  int binary = 0, temp, binaryTemp, i = 0, j, k = 0;

  printf("Enter Number: ");
  gets(num);

  for (i = strlen(num) - 1; i >= 0; i--)
  {
    temp = num[i];
    j = 0;
    binaryTemp = 0;
    if (temp > 47 && temp < 58)
      temp -= 48;
    else if (temp > 64 && temp < 71)
      temp -= 55;
    else if (temp > 96 && temp < 103)
      temp -= 87;
    else
    {
      printf("\\nInvalid Input\\n");
      break;
    }
    do
    {
      binaryTemp += (temp % 2) * pow(10, j++);
      temp /= 2;
    } while (temp != 0);
    binary += binaryTemp * pow(10, k);
    k += 4;
  }
  printf(" %d", binary);
}`,

'cpp':
`#include<iostream>
#include<cstring>
#include<cmath>
using namespace std;
int main()
{
  char num[10];
  int binary = 0, temp, binaryTemp, i = 0, j, k = 0;

  cout << "Enter Number: ";
  cin >> num;

  for (i = strlen(num) - 1; i >= 0; i--)
  {
    temp = num[i];
    j = 0;
    binaryTemp = 0;
    if (temp > 47 && temp < 58)
      temp -= 48;
    else if (temp > 64 && temp < 71)
      temp -= 55;
    else if (temp > 96 && temp < 103)
      temp -= 87;
    else
    {
      cout << "\\nInvalid Input\\n";
      break;
    }
    do
    {
      binaryTemp += (temp % 2) * pow(10, j++);
      temp /= 2;
    } while (temp != 0);
    binary += binaryTemp * pow(10, k);
    k += 4;
  }
  cout << binary;
  return 0;
}`,

'java':
`import java.util.Scanner;

class HexadecimalBinary
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Number: ");
    System.out.println(Integer.toBinaryString(Integer.parseInt(scanner.next(), 16)));

    scanner.close();
  }
}`
},


"hexadecimal_octal":
{
'js':
`console.log(parseInt(prompt("Enter Number"), 16).toString(8));`,

'py':
`print(str(oct(int(input("Enter Number: "), 16)))[2:])`,

'c':
`#include<stdio.h>
void main()
{
  char num[10];
  int dec = 0, oct = 0, temp, i, j = 0, k = 0;

  printf("Enter Number: ");
  gets(num);

  for (i = strlen(num) - 1; i >= 0; i--)
  {
    temp = num[i];
    if (temp > 47 && temp < 58)
      temp -= 48;
    else if (temp > 64 && temp < 71)
      temp -= 55;
    else if (temp > 96 && temp < 103)
      temp -= 87;
    else
    {
      printf("\\nInvalid Input\\n");
      break;
    }
    dec += temp * pow(16, j++);
  }
  do
  {
    oct += (dec % 8) * pow(10, k++);
    dec /= 8;
  } while (dec != 0);
  printf("%d", oct);
}`,

'cpp':
`#include<iostream>
#include<cmath>
#include<cstring>
using namespace std;
int main()
{
  char num[10];
  int dec = 0, oct = 0, temp, i, j = 0, k = 0;

  cout << "Enter Number: ";
  cin >> num;

  for (i = strlen(num) - 1; i >= 0; i--)
  {
    temp = num[i];
    if (temp > 47 && temp < 58)
      temp -= 48;
    else if (temp > 64 && temp < 71)
      temp -= 55;
    else if (temp > 96 && temp < 103)
      temp -= 87;
    else
    {
      cout << "\\nInvalid Input\\n";
      break;
    }
    dec += temp * pow(16, j++);
  }
  do
  {
    oct += (dec % 8) * pow(10, k++);
    dec /= 8;
  } while (dec != 0);
  cout << oct;
  return 0;
}`,

'java':
`import java.util.Scanner;

class HexadecimalOctal
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Numbrer: ");
    System.out.println(Integer.toOctalString(Integer.parseInt(scanner.next(), 16)));

    scanner.close();
  }
}`
},


"pattern1":
{
'js':
`let limit = prompt("Enter Limit");

for (i = 1; i <= limit; i++)
  console.log("* ".repeat(i).trim());`,

'py':
`for i in range(1, int(input("Enter Limit: ")) + 1):
  print("* " * i)`,

'c':
`#include<stdio.h>
void main()
{
  int limit, i, j;

  printf("Enter Limit: ");
  scanf("%d", &limit);

  for (i = 1; i <= limit; i++)
  {
    for (j = 1; j <= i; j++)
      printf("* ");
    printf("\\n");
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, i, j;

  cout << "Enter Limit: ";
  cin >> limit;

  for (i = 1; i <= limit; i++)
  {
    for (j = 1; j <= i; j++)
      cout << "* ";
    cout << "\\n";
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class Pattern1
{
  public static void main(String[] args)
  {
    int limit, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();

    for (i = 1; i <= limit; i++)
      System.out.println("* ".repeat(i));

    scanner.close();
  }
}`
},


"pattern2":
{
'js':
`let limit = prompt("Enter Limit");

for (i = limit; i > 0; i--)
  console.log("* ".repeat(i).trim());`,

'py':
`for i in range(int(input("Enter Limit: ")), 0, -1):
  print("* " * i)`,

'c':
`#include<stdio.h>
void main()
{
  int limit, i, j;

  printf("Enter Limit: ");
  scanf("%d", &limit);

  for (i = limit; i > 0; i--)
  {
    for (j = i; j > 0; j--)
      printf("* ");
    printf("\\n");
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, i, j;

  cout << "Enter Limit: ";
  cin >> limit;

  for (i = limit; i > 0; i--)
  {
    for (j = i; j > 0; j--)
      cout << "* ";
    cout << "\\n";
  }
    return 0;
}`,

'java':
`import java.util.Scanner;

class Pattern2
{
  public static void main(String[] args)
  {
    int limit, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();

    for (i = limit; i > 0; i--)
      System.out.println("* ".repeat(i));

    scanner.close();
  }
}`
},


"pattern3":
{
'js':
`let limit = prompt("Enter Limit");

for (i = 1; i < limit; i++)
  console.log("* ".repeat(i).trim());
for (i = limit; i > 0; i--)
  console.log("* ".repeat(i).trim());`,

'py':
`limit = int(input("Enter Limit: "))

for i in range(1, limit):
  print("* " * i)
for i in range(limit, 0, -1):
  print("* " * i)`,

'c':
`#include<stdio.h>
void main()
{
  int limit, i, j;

  printf("Enter Limit: ");
  scanf("%d", &limit);

  for (i = 1; i < limit; i++)
  {
    for (j = 0; j < i; j++)
      printf("* ");
    printf("\\n");
  }
  for (i = limit; i > 0; i--)
  {
    for (j = i; j > 0; j--)
      printf("* ");
    printf("\\n");
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, i, j;

  cout << "Enter Limit: ";
  cin >> limit;

  for (i = 1; i < limit; i++)
  {
    for (j = 0; j < i; j++)
      cout << "* ";
    cout << "\\n";
  }
  for (i = limit; i > 0; i--)
  {
    for (j = i; j > 0; j--)
      cout << "* ";
    cout << "\\n";
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class Pattern3
{
  public static void main(String[] args)
  {
    int limit, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();

    for (i = 1; i < limit; i++)
      System.out.println("* ".repeat(i));
    for (i = limit; i > 0; i--)
      System.out.println("* ".repeat(i));

      scanner.close();
  }
}`
},


"pattern4":
{
'js':
`let limit = prompt("Enter Limit");

for (i = 1; i <= limit; i++)
  console.log("  ".repeat(limit - i) + " *".repeat(i));`,

'py':
`limit = int(input("Enter Limit: "))

for i in range(1, limit + 1):
    print("  " * (limit - i), " *" * i)`,

'c':
`#include<stdio.h>
void main()
{
  int limit, i, j;

  printf("Enter Limit: ");
  scanf("%d", & limit);

  for (i = 1; i <= limit; i++)
  {
    for (j = 0; j < limit - i; j++)
      printf("  ");
    for (j = 0; j < i; j++)
      printf(" *");
    printf("\\n");
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, i, j;

  cout << "Enter Limit: ";
  cin >> limit;

  for (i = 1; i <= limit; i++)
  {
    for (j = 0; j < limit - i; j++)
      cout << "  ";
    for (j = 0; j < i; j++)
      cout << " *";
    cout << "\\n";
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class Pattern4
{
  public static void main(String[] args)
  {
    int limit, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();

    for (i = 1; i <= limit; i++)
      System.out.println("  ".repeat(limit - i) + " *".repeat(i));

    scanner.close();
  }
}`
},


"pattern5":
{
'js':
`let limit = prompt("Enter Limit");

for (i = limit; i > 0; i--)
  console.log("  ".repeat(limit - i) + " *".repeat(i));`,

'py':
`limit = int(input("Enter Limit: "))

for i in range(limit, 0, -1):
    print("  " * (limit - i), " *" * i)`,

'c':
`#include<stdio.h>
void main()
{
  int limit, i, j;

  printf("Enter Limit: ");
  scanf("%d", & limit);

  for (i = limit; i > 0; i--)
  {
    for (j = 0; j < limit - i; j++)
      printf("  ");
    for (j = 0; j < i; j++)
      printf(" *");
    printf("\\n");
  }
}`,

'cpp':
`#include<iostream>
using namespace std;
int main()
{
  int limit, i, j;

  cout << "Enter Limit: ";
  cin >> limit;

  for (i = limit; i > 0; i--)
  {
    for (j = 0; j < limit - i; j++)
      cout << "  ";
    for (j = 0; j < i; j++)
      cout << " *";
    cout << "\\n";
  }
  return 0;
}`,

'java':
`import java.util.Scanner;

class Pattern5
{
  public static void main(String[] args)
  {
    int limit, i;
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter Limit: ");
    limit = scanner.nextInt();

    for (i = limit; i > 0; i--)
      System.out.println("  ".repeat(limit - i) + " *".repeat(i));

    scanner.close();
  }
}`
},


// "pattern":
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