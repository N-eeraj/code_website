limit = int(input("Enter Limit: "))

for i in range(limit, 0, -1):
    print("  " * (limit - i), " *" * i)