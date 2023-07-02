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

font = pygame.font.Font('freesansbold.ttf', 48)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    pos_x, pos_y = pygame.mouse.get_pos() # Tupla (x, y)
    message = 'pos x : {} pos y : {}'.format(pos_x, pos_y)

    text = font.render(message, True, green)
    rect = text.get_rect()
    rect.center = (width // 2, height // 2)

    surface.fill(white)
    surface.blit(text, rect)
    pygame.display.update()