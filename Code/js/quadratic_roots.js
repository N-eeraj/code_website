a = prompt("Enter Coefficient a");
b = prompt("Enter Coefficient b");
c = prompt("Enter Coefficient c");

let d = b ** 2 - (4 * a * c);
if (d > 0)
{
  console.log((-b + Math.sqrt(d)) / (2 * a));
  console.log((-b - Math.sqrt(d)) / (2 * a));
}
else if (d == 0)
  console.log(-b / (2 * a));
else
  console.log("Complex Roots");