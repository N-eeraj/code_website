num1 = float(input("Enter First Number: "))
num2 = float(input("Enter Second Number: "))
operation = input("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter Operation Number: ")

if operation == '1':
    print(num1 + num2)
elif operation == '2':
    print(num1 - num2)
elif operation == '3':
    print(num1 * num2)
elif operation == '4':
    print(num1 / num2)
else:
    print("Invalid Option")