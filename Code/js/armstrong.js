num = prompt("Enter Number");

length = num.length;
sum = 0
for (i in num)
  sum += num[i] ** length;
if (sum == num)
  console.log("Armstrong")
else
  console.log("Not Armstrong ")