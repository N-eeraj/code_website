let limit = prompt("Enter Limit");
for (i = 1; i <= limit; i++)
{
  let star = "";
  for (j = 1; j <= i; j++)
    star += "* ";
  console.log(star);
}