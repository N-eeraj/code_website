num1 = int(input("Enter First Number: "))
num2 = int(input("Enter Second Number: "))
gcd = 1

num = num1 if num1 < num2 else num2
for i in range(2, num + 1):
    if num1 % i == 0 and num2 % i == 0:
        gcd = i
print(gcd)