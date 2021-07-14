limit = int(input("Enter Limit: "))

for i in range(limit):
    print("  " * (limit - i - 1) + " *" * (2 * i + 1))