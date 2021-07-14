limit = int(input("Enter Limit: "))

for i in range(limit, 0, -1):
    print("  " * (limit - i) + " *" * (2 * i - 1))