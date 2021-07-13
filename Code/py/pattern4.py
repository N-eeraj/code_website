limit = int(input("Enter Limit: "))

for i in range(1, limit + 1):
    print("  " * (limit - i), " *" * i)