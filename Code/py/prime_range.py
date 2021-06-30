limit = int(input("Enter Range: "))

for i in range(2, limit + 1):
    prime = True
    for j in range(2, i):
        if i % j == 0:
            prime = False
            break
    if prime:
        print(i)