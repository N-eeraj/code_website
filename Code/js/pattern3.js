let limit = prompt("Enter Number");

for (let i = 1; i < limit; i++)
{
  let star = "";
  for (let j = 1; j <= i; j++)
    star += "* ";
  console.log(star);
}
for (i = limit; i > 0; i--)
{
  star = "";
  for (j = i; j > 0; j--)
    star += "* ";
  console.log(star);
}