import sys
import pygame

pygame.init()

width = 400
height = 500

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Rectangulos')

#RGB
red = pygame.Color(255, 125, 0) #0 - 255
white = (255, 255, 255)
blue = (0, 0, 205)

rect1 = pygame.Rect(100, 150, 120, 60)
rect1.center = (width // 2, height // 2)

rect2 = (width // 2, height // 2, 60, 30)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    surface.fill(white)

    pygame.draw.rect(surface, blue, rect1)
    pygame.draw.rect(surface, red, rect2)

    pygame.display.update()