let range = prompt("Enter Range");

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
}