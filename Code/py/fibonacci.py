first = 0
second = 1

limit = int(input("Enter Limit: "))

print(first)
print(second)
for i in range(2, limit):
    next = first + second
    print(next)
    first, second = second, next