# def fibonacci(n):
#     if n == 0:
#         return 0
#     if n == 1 or n == 2:
#         return 1
#     else:
#         return fibonacci(n - 1) + fibonacci(n - 2)

# print(fibonacci(10))


limit = 4000000
suma = 0
a = 1
b = 1
c = a + b

while c < limit:
    suma += c
    a = b + c
    b = c + a
    c = a + b
print (suma)



