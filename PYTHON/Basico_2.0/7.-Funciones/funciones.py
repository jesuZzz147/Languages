""" def suma(n1, n2):
    return  n1 + n2, 'La función retornar 2 valores'

numero_uno = int(input('Ingresa el primer número entero: ')) # str
numero_dos = int(input('Ingresa el segundo número entero: '))

resultado, _ = suma(numero_uno, numero_dos)

print('El resultado es:', resultado) """


def pares():
    for numero in range(0, 100, 2):
        yield numero

        print('Se reanuda la ejecucion')

for i in pares():
    print(i)
    print('Hola')