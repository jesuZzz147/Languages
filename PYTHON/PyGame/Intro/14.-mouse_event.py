import sys
import pygame

pygame.init()

width = 600
height = 600

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Eventos')

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

        if event.type == pygame.MOUSEBUTTONDOWN:

            print(event.pos)
            
            if event.button == 1:
                print('Clic Izquierdo')

            if event.button == 2:
                print('Clic de Rueda')

            if event.button == 3:
                print('Clic Derecho')

            if event.button == 4:
                print('Scroll Arriba')

            if event.button == 5:
                print('Scroll Abajo')

            if event.button == 6:
                print('Clic extra 1')

            if event.button == 7:
                print('Clic extra 2')

        if event.type == pygame.MOUSEBUTTONUP:
            #print('Presionaito')
            pass

    surface.fill(white)
    pygame.display.update()