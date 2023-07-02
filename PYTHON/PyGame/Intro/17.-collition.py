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

rect1 = pygame.Rect(0, 0, 100, 80)
rect1.center = (width // 2, height // 2)

rect2 = pygame.Rect(0, 0, 100, 80)
rect2.center = (width // 2, height // 2)

font = pygame.font.Font('freesansbold.ttf', 36)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    surface.fill(white)

    rect2.center = pygame.mouse.get_pos()

    pygame.draw.rect(surface, green, rect1)
    pygame.draw.rect(surface, orange, rect2)

    message = ''

    if rect1.colliderect(rect2):
        sound = pygame.mixer.Sound('media/TES-IV-Audio.mp3')
        sound.play()
        message = 'Existe una colision'

    text = font.render(message, True, blue)
    rect3 = text.get_rect()
    rect3.midtop = (width // 2, 50)

    surface.blit(text, rect3)

    pygame.display.update()