class User:
    nombre = "Jesus"
    email = ""
    def saludar(self):
        print("Hola, mi nombre es " + self.nombre)

jesus = User()
cody = User()

cody.nombre = "Cody"
jesus.email = "Jesus.oisjf.12@gmail.com"
jesus.contraseña = "lkasdjfkla"

print(jesus.nombre)
print(jesus.email)
print(jesus.contraseña)
print(cody.nombre)

jesus.saludar()