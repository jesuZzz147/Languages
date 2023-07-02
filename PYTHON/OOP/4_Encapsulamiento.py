class Usuario:
    __edad = 0
    def __init__(self,nombre):
        #metodo contructor
        self._nombre = nombre

    def saludar(self,saludo):
        print(saludo + self._nombre)

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self,valor):
        if(valor < 0):
            raise ValueError('Edad no puede ser menor a 0')
        self.__edad = valor

class Empleado(Usuario):
    __salario = 0

    def modificar_salario(self,salario): #setter
        self.__salario = salario

    def ver_salario(self):  #getter
        print(self.__salario)

    def saludar(self):
        super().saludar("Hola! ")
        print("Mi nombre es: " + self._nombre + " y gano: " + str(self.__salario))

empleado = Empleado("Uriel")
empleado.saludar()
empleado.edad = -1
print(empleado.edad)
