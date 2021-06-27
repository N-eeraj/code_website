let limit = prompt("Enter Limit");
let sum = 0;

for (i = 1; i <= limit; i++)
  sum += i;

console.log("Sum: ", sum);
console.log("Average: ", sum / limit);