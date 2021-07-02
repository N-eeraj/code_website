num = int(input("Enter Number: "))

length = len(str(num))
sum = 0
for i in str(num):
    sum += int(i) ** length
if sum == num:
    print("Armstrong")
else:
    print("Not Armstrong")