import sys
import pygame

pygame.init()

width = 400
height = 500

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Superficies')

#RGB
orange = pygame.Color(255, 125, 0) #0 - 255
white = (255, 255, 255)
blue = (0, 0, 205)
green = (45, 125, 45)

surface2 = pygame.Surface((200, 200))
surface2.fill(green)

rect2 = surface2.get_rect()
rect2.center = ( width // 2, height // 2)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    surface.fill(white)

    surface.blit(surface2, rect2)

    pygame.draw.rect(surface2, orange, (100, 50, 80, 40))

    pygame.display.update()