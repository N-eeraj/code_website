num1 = int(input("Enter First Number: "))
num2 = int(input("Enter Second Number: "))

num1M = num1;
num2M = num2;
while (num1M != num2M):
    if num1M < num2M:
        num1M += num1
    else:
        num2M += num2
print(num1M)