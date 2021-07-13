let limit = prompt("Enter Limit");

for (i = 1; i < limit; i++)
  console.log("  ".repeat(limit - i) + " *".repeat(i));
for (i = limit; i > 0; i--)
  console.log("  ".repeat(limit - i) + " *".repeat(i));