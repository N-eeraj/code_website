function isEmpty()
{return end == 0? true: false;}

function isFull()
{return end == size? true: false;}

let queue = [];

size = prompt("Enter Queue Size")

while (true)
{
  console.log("Queue: " + queue);
  end = queue.length

  option = prompt("Select Queue Operation\n1. Is Empty?\n2. Is Full?\n3. Enqueue\n4. Dequeue\n5. Exit\nEnter Option Number");

  if (option == 1)
    console.log(isEmpty()? "Empty": "Not Empty");
  else if (option == 2)
    console.log(isFull()? "Full": "Not Full");
  else if (option == 3)
  {
    if (isFull())
      console.log("Can't Enqueue: Queue Full");
    else
      queue.push(prompt("Enter Element"));
  }
  else if (option == 4)
  {
    if (isEmpty())
      console.log("Can't Dequeue: Queue Empty");
    else
      queue.shift();
  }
  else if (option == 5)
    break;
  else
    console.log("Enter a number between 1 & 5");
}
console.log("Queue: " + queue);