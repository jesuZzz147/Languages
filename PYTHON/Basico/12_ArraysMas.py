matriz1 = [[1,2,3],[7,8,9],[13,14,15]]
matriz2 = [[4,5,6],[10,11,12],[16,17,18]]
matriz3 = [[0,0,0],[0,0,0],[0,0,0]]

matriz3[0][0] = matriz1[0][0] + matriz2[0][0]
print(matriz3[0][0])

for rowPosition, value in enumerate(matriz1):
    for columnPosition, value2 in enumerate(value):
        matriz3[rowPosition][columnPosition] = value2 + matriz2[rowPosition][columnPosition]

print(matriz3)
