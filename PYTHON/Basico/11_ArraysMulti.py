shoes = {
    "Nike":["tenis1","tenis2","tenis3"],
    "Adidas":["tenis4","tenis5","tenis6"],
    "Converse":["tenis7","tenis8","tenis9"]
}

for key, list in shoes.items():
    for value in list:
        print("Estos son los tenis ", key, value)