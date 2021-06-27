function fact(num)
{
  let factorial = 1;

  if (num == 1)
    return 1;
   factorial = num * fact(num - 1);

  return factorial;
}

console.log(fact(prompt("Enter Input")));