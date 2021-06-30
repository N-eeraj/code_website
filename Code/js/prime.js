prime = "Prime";

num = prompt("Enter Number");

for (i = 2; i < num; i++)
{
  if (num % i == 0)
  {
    prime = "Not Prime";
    break;
  }
}
console.log(prime);