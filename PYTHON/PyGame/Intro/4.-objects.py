import sys
import pygame

pygame.init()

width = 400
height = 500

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Objetos')

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

    pygame.draw.rect(surface, orange, (100, 100, 80, 40))
    pygame.draw.circle(surface, blue, (200, 300), 100)
    pygame.draw.line(surface, green, (100, 100), (200, 300), 3)

    pygame.display.update()