def fact(num):
    factorial = 1

    if num == 1:
        return 1
    factorial = num * fact(num - 1)

    return factorial

print(fact(int(input("Enter Input: "))))