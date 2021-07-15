arr = [];
length = prompt("Enter Length");

for (i = 0; i < length; i++)
  arr.push(Number(prompt("Enter Number")));

for (i = 1; i < length; i++)
{
  select = i;
  for (j = select - 1; j > -1; j--)
  {
    if (arr[select] < arr[j])
    {
      [arr[select], arr[j]] = [arr[j], arr[select]]
      select = j;
    }
  }
}
console.log(arr);