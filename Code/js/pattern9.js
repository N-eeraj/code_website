limit = prompt("Enter Limit");

if (limit % 2 == 1)
{
  for (i = 0; i * 2 + 1 <= limit; i++)
    console.log("   ".repeat(Math.floor(limit / 2) - i) + " * ".repeat(i * 2 + 1));
  for (i = Math.floor(limit / 2); i > 0; i--)
    console.log("   ".repeat(Math.ceil(limit / 2) - i) + " * ".repeat(i * 2 - 1));
}
else
  console.log("Enter Odd Number");
