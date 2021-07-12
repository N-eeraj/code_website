limit = int(input("Enter Limit: "))

for i in range(1, limit):
    print("* " * i)
for i in range(limit, 0, -1):
    print("* " * i)