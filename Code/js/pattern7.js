limit = prompt("Enter Limit");

for (let i = 0; i < limit; i++)
  console.log("  ".repeat(limit - i - 1) + " *".repeat(i * 2 + 1));