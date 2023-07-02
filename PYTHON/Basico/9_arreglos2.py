colores = ["Verde", "Morado", "Amarillo"]

colores.insert(1,"Negro")

print(colores.pop(2))
print(colores.count("Verde"))

colores1 = ["Azul", "Rojo", "Blanco"]

colores1.append("Negro")
colores1.remove("Blanco")

colores1[1] = "Naranja"

colores.extend(colores1)

for value in colores:
    print(value)

print(colores.count("Negro"))

print(len(colores))