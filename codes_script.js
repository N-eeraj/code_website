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

  answer = pow(base, exponent);;
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