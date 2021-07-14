limit = prompt("Enter Limit");

for (let i = limit; i > 0; i--)
  console.log("  ".repeat(limit - i) + " *".repeat(i * 2 - 1));