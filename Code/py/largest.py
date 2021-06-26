for i in range(int(input("Enter Limit: "))):
    num = float(input("Enter Input: "))
    if i == 0 or largest < num:
        largest = num

print(largest)