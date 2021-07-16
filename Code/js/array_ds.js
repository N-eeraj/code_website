arr = [];

while (1)
{
  console.log("Array: " + arr);
  length = arr.length;

  option = prompt("Select Array Operation\n1. Traverse\n2. Insertion\n3. Deletion\n4. Updation\n5. Exit\nEnter Option Number");

  if (option == 1)
  {
    for (i of arr)
      console.log(i);
  }
  else if (1 < option && option < 5)
  {
    index = prompt("Enter Index");
    if (option == 2)
    {
      if (index > length)
      {
        console.log("Invalid Index\n");
        continue;
      }
      arr.splice(index, 0, prompt("Enter Element"));
    }
    else
    {
      if (index >= length)
      {
        console.log("Invalid Index\n");
        continue;
      }
      if (option == 3)
        arr.splice(index, 1);
      else
        arr[index] = prompt("Enter Element");
    }
  }
  else if (option == 5)
    break;
  else
  {
    console.log("Enter a number between 1 & 4");
    continue;
  }
}
console.log("Array: " + arr);
