arr = [];
length = prompt("Enter Length");

for (i = 0; i < length; i++)
  arr.push(Number(prompt("Enter Number")));

for (i = 0; i < length; i++)
{
  for (j = i + 1; j < length; j++)
  {
    if (arr[i] > arr[j])
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
console.log(arr);