limit = int(input("Enter Limit: "))

if limit % 2 == 1:
    for i in range(1, limit // 2 + 1):
        print("   " * (limit // 2 - i + 1) + " * " * (2 * i - 1))
    for i in range(limit // 2 + 1, 0, -1):
        print("   " * (limit // 2 - i + 1) + " * " * (2 * i - 1))
else:
    print("Enter Odd Number")