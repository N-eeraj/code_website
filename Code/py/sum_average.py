limit = int(input("Enter Limit: "))
sum = 0

for i in range(1, limit+1):
    sum += i

print("Sum:", sum)
print("Average:", sum / limit)