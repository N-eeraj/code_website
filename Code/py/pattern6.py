limit = int(input("Enter Limit: "))

for i in range(1, limit):
    print("  " * (limit - i), " *" * i)
for i in range(limit, 0, -1):
    print("  " * (limit - i), " *" * i)