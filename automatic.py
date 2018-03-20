import time
import raspi as pinmode
import RPi.GPIO as GPIO
import asyncio

finish = 0

pinmode.setup()

@asyncio.coroutine
def mainAuto(width,height,speed):
    print("i'm start auto")
    print("clean restriction:\n \t width\t:"+width+"\n \t height\t:"+height+"\n \t speed\t:"+speed)
    calculDuration(width,height,speed)
    yield from asyncio.wait([start(float(speed))])

@asyncio.coroutine
def start(speed):
    moveInfo = "LR"
    capteurH = 0
    while(finish != 1):
        while (capteurH ==0):
            print("let's go body")
            GPIO.output(pinmode.motIN1G, 1)
            GPIO.output(pinmode.motIN2G, 0)
            GPIO.output(pinmode.motIN3D, 1)
            GPIO.output(pinmode.motIN4D, 0)
            pinmode.ena.start(speed)
            pinmode.enb.start(speed)
        if capteurH:
            moveInfo = changeDirection(moveInfo)
    print("end programm")


def changeDirection(moveInfo):
    if moveInfo == "LR":
        rotation("R")
        offset()
        rotation("R")
        return "RL"
    else:
        rotation("L")
        offset()
        rotation("L")
        return "LR"

def offset():
    print("GPIO 4")

def rotation(direction):
    print("turn " + str(direction) )
    if direction == "R":
        time.sleep(2)
    if direction == "L":
        time.sleep(2)
    time.sleep(2)

def calculDuration(width, height,speed):
    duration =(int(width) * int(height))/int(speed)
    print("Duration of clean: " + str(duration) + "minutes")

def stopAuto():
    print("i want to kill programm")
    finish = 1