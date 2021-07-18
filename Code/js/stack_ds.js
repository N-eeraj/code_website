function isEmpty()
{return stackTop == 0? true: false;}

let stack = [];

size = prompt("Enter Stack Size")

while (true)
{
  console.log("Stack: " + stack);
  stackTop = stack.length

  option = prompt("Select Stack Operation\n1. Is Empty?\n2. Push\n3. Pop\n4. Top\n5. Exit\nEnter Option Number");

  if (option == 1)
    console.log(isEmpty()? "Empty": "Not Empty");
  else if (option == 2)
    stackTop == size? console.log("Stack will Overflow"): stack.push(prompt("Enter Element"));
  else if (option == 3)
    isEmpty()? console.log("Stack is Empty"): stack.pop();
  else if (option == 4)
    console.log(isEmpty()? "Stack is Empty": stack[stackTop - 1]);
  else if (option == 5)
    break;
  else
    console.log("Enter a number between 1 & 5");
}
console.log("Stack: " + stack);