import sys
import pygame

pygame.init()

width = 400
height = 500

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Poligonos')

#RGB
orange = pygame.Color(255, 125, 0) #0 - 255
white = (255, 255, 255)
blue = (0, 0, 205)
green = (45, 125, 45)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    surface.fill(white)

    #draw
    #1.- Donde se pintara la figura
    #2.- El color de la pintura

    #Triangulo
    pygame.draw.polygon(surface, green, ((0, 400), (100, 300), (200, 400)))

    #Pentagono
    pygame.draw.polygon(surface, orange,(
        (146, 0),
        (291, 106),
        (236, 277),
        (56, 277),
        (0, 106)
    ))
    pygame.display.update()