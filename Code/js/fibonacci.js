first = 0;
second = 1;

limit = prompt("Enter Limit: ")

console.log(first, second);
for (i = 2; i < limit; i++)
{
  next = first + second;
  console.log(next);
  [first, second] = [second, next];
}