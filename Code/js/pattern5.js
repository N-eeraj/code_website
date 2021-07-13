let limit = prompt("Enter Limit");

for (i = limit; i > 0; i--)
  console.log("  ".repeat(limit - i) + " *".repeat(i));