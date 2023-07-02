numbers = [1,2,3,4,5]
#         [0,1,2,3,4]

print(numbers[4])
numbers.reverse()

for value in numbers:
    print(value)


person = {"Name":"Jesus", "LastName":"Izaguirre", "Age":21}

print(person.get("LastName"))
print(len(person))
person.update({"LastName":"Silva"})
person.update({"Number":"1153697769"})

for key, value in person.items():
    print(key,"",value)

numbers.reverse()

for position in range(0,len(numbers)):
    print("° Posicion ",position,"",numbers[position])

for position, value in enumerate(numbers):
    print("- Posicion ",position,"",value)