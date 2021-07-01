num1 = Number(prompt("Enter First Number"));
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
console.log(num1M);