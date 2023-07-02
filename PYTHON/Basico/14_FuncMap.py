numbers = [1,2,3,4,5]
update = []
for i in numbers:
    update.append(i*2)
print(update)

def operation(value):
    return value*2
print(list(map(operation,numbers)))

print(list(map((lambda value: value*2),numbers)))