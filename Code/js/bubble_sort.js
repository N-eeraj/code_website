arr = [];
length = prompt("Enter Length");

for (i = 0; i < length; i++)
  arr.push(Number(prompt("Enter Number")));

length = arr.length

for (i = length - 1; i > 0; i--)
{
  for (j = 0; j < i; j++)
    {
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
}
console.log(arr);