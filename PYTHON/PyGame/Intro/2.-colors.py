import sys
import pygame

pygame.init()

width = 400
height = 500

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Colores')

#RGB
red = pygame.Color(255, 125, 0) #0 - 255

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    surface.fill(red)
    pygame.display.update()