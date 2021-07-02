num1 = Number(prompt("Enter First Number"));
num2 = Number(prompt("Enter Second Number"));
operation = prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter Operation Number");

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
}