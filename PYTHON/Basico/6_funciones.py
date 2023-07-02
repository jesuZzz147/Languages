def saludar(nombre):
    return "Hola {} bienvenido al juego de Cody".format(nombre)

print("Ingresa tu nombre")
nombre = input()

print(saludar(nombre))

def salaryWeek(hrs, salaryHrs, days, job):
    salary = hrs * salaryHrs
    salary = salary * days
    print("El sueeldo de un", job, "es", salary)

salaryWeek(10, 750, 6, "Delivery")