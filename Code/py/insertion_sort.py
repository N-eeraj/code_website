arr = []
length = int(input("Enter Length: "))

for i in range(length):
    arr.append(int(input("Enter Number: ")))

for i in range(1, length):
    for j in range(i - 1, -1, -1):
        if arr[i] < arr[j]:
            arr[i], arr[j] = arr[j], arr[i]
            i = j
print(arr)