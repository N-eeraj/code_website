let limit = Number(prompt("Enter Limit"));

for(i = 0; i < limit; i++)
{
  let  input = prompt("Enter Input");
  if (i == 0 || largest < input)
    largest = input;
}

console.log(largest)