def isEmpty():
    return True if end == 0 else False

def isFull():
    return True if end == size else False

queue = []

size = int(input("Enter Queue Size: "))

while True:
    print("Queue:", queue)
    end = len(queue)

    option = input("\nSelect Queue Operation\n1. Is Empty?\n2. Is Full?\n3. Enqueue\n4. Dequeue\n5. Exit\nEnter Option Number: ")
    print()

    if option == '1':
        print("Empty" if isEmpty() else "Not Empty")
    elif option == '2':
        print("Full" if isFull() else "Not Full")
    elif option == '3':
        if isFull():
            print("Can't Enqueue: Queue Full")
        else:
            queue.append(int(input("Enter Element: ")))
    elif option == '4':
        if isEmpty():
            print("Can't Dequeue: Queue Empty")
        else:
            del queue[0]
    elif option == '5':
        break
    else:
        print("Enter a number between 1 & 5")
print("Queue:", queue)