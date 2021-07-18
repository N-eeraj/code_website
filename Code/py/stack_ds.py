def isEmpty():
    return True if top == 0 else False

stack = []

size = int(input("Enter Stack Size: "))

while True:
    print("Stack:", stack)
    top = len(stack)

    option = input("\nSelect Stack Operation\n1. Is Empty?\n2. Push\n3. Pop\n4. Top\n5. Exit\nEnter Option Number: ")
    print()

    if option == '1':
        print("Stack Empty" if isEmpty() else "Not Empty")
    elif option == '2':
        print("Stack will Overflow") if top == size else stack.append(int(input("Enter Element: ")))
    elif option == '3':
        if isEmpty():
            print("Stack is Empty")
        else:
            del stack[-1]
    elif option == '4':
        print("Stack is Empty" if isEmpty() else stack[-1])
    elif option == '5':
        break
    else:
        print("Enter a number between 1 & 5")
print("Stack:", stack)