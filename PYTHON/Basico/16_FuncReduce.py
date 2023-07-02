import functools

numbers = [1,2,3,4,5]
result = 0

for i in numbers:
    result = result + i
print(result)

print(str(functools.reduce((lambda x, y: x + y),numbers)))