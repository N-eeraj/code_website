let alphabet = prompt("Enter Alphabet").toUpperCase();

if ("AEIOU".search(alphabet) == -1)
  console.log(alphabet + " is a Consonant");
else
  console.log(alphabet + " is a Vowel");