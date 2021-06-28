let input = prompt("Enter Input");

if (input == input.split('').reverse().join(''))
  console.log("Palindrome");
else
  console.log("Not Palindrome");