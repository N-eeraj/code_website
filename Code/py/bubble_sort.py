arr = []
length = int(input("Enter Length: "))

for i in range(length):
    arr.append(int(input("Enter Number: ")))

for i in range(length - 1, 0, -1):
    for j in range(0, i):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
print(arr)