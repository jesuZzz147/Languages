import sys
import pygame

pygame.init()

width = 600
height = 600

surface = pygame.display.set_mode( (width, height) ) #surface
pygame.display.set_caption('Sonido')

#RGB
orange = pygame.Color(255, 125, 0) #0 - 255
white = (255, 255, 255)
blue = (0, 0, 205)
green = (45, 125, 45)

pygame.mixer.music.load('media\TES-IV-Audio.mp3')
pygame.mixer.music.set_volume(1.0) #Float 0.0 - 1.0
pygame.mixer.music.play(-1, 0.0)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    surface.fill(white)

    pygame.display.update()