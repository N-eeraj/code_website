arr = []

while 1:
    print("Array:", arr)
    length = len(arr)
    
    option = int(input("\nSelect Array Operation\n1. Traverse\n2. Insertion\n3. Deletion\n4. Updation\n5. Exit\nEnter Option Number: "))
    print()

    if option == 1:
        for i in arr:
            print(i)
    elif 1 < option < 5:
        index = int(input("Enter Index: "))
        if option == 2:
            if index > length:
                print("Invalid Index\n")
                continue
            arr.insert(index, int(input("Enter Element: ")))
        else:
            if index >= length:
                print("Invalid Index\n")
                continue
            if option == 3:
                arr.pop(index)
            else:
                arr[index] = int(input("Enter Element: "))
    elif option == 5:
        break
    else:
        print("Enter a number between 1 & 4")
print("Array:", arr)