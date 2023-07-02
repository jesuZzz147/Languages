class Usuario:
    def __init__(self,nombre):
        #metodo contructor
        self.nombre = nombre

    def saludar(self,saludo):
        print(saludo + self.nombre)

class Empleado(Usuario):
    salario = 0

    def modificar_salario(self,salario):
        self.salario = salario

    def ver_salario(self):
        print(self.salario)

    def saludar(self):
        print("Mi nombre es: " + self.nombre + " y gano: " + str(self.salario))

empleado = Empleado("Uriel")

empleado.modificar_salario(1000)
empleado.ver_salario()

empleado.saludar()