import sys
import pygame

pygame.init()

width = 400
height = 500

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Texto')

#RGB
orange = pygame.Color(255, 125, 0) #0 - 255
white = (255, 255, 255)
blue = (0, 0, 205)
green = (45, 125, 45)

#1.-Obtener una fuente
font = pygame.font.Font('freesansbold.ttf', 48)
#2.-Crear el texto
text = font.render('Hola Putos!', True, green)
rect = text.get_rect()
rect.center = ( width // 2, height // 2)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    surface.fill(white)
    surface.blit(text, rect)

    pygame.display.update()