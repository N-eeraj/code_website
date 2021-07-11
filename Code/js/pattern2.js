let limit = prompt("Enter Limit");
for (i = limit; i > 0; i--)
{
  let star = "";
  for (j = i; j > 0; j--)
    star += "* ";
  console.log(star);
}