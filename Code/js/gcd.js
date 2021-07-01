num1 = prompt("Enter First Number");
num2 = prompt("Enter Second Number");
gcd = 1;

num = (num1 < num2)? num1 : num2;
for (i = 2; i <= num; i++)
{
  if (num1 % i == 0 && num2 % i == 0)
    gcd = i;
}
console.log(gcd)