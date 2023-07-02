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

image = pygame.image.load('images/cat.jpg')
rect = image.get_rect()
rect.center = (width // 2, height // 2)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    rect.center = pygame.mouse.get_pos()

    pressed = pygame.key.get_pressed()
    if pressed[pygame.K_w]:
        rect.y -= 5
    if pressed[pygame.K_a]:
        rect.x -= 5
    if pressed[pygame.K_s]:
        rect.y += 5
    if pressed[pygame.K_d]:
        rect.x += 5

    #Validaciones
    if rect.left < 0:
        rect.left = 0

    if rect.right > width:
        rect.right = width

    if rect.top < 0:
        rect.top = 0

    if rect.bottom > height:
        rect.bottom = height

    surface.fill(white)
    surface.blit(image, rect)
    pygame.display.update()