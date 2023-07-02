import sys
import pygame

pygame.init()

width = 400
height = 600

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Tiempo_Texto')

#RGB
orange = pygame.Color(255, 125, 0) #0 - 255
white = (255, 255, 255)
blue = (0, 0, 205)
green = (45, 125, 45)

font = pygame.font.Font('freesansbold.ttf', 48)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    surface.fill(white)

    seconds = pygame.time.get_ticks() // 1000 #Milisegundos
    text = font.render(str(seconds), True, green)
    rect = text.get_rect()
    rect.center = ( width // 2, height // 2)

    surface.blit(text, rect)

    pygame.display.update()