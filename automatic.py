import time
import raspi as pinmode
import RPi.GPIO as GPIO

pinmode.setup()

def mainAuto(width,height,speed):
    print("i'm start auto")
    print("clean restriction:\n \t width\t:"+width+"\n \t height\t:"+height+"\n \t speed\t:"+speed)
    calculDuration(width,height,speed)
    pinmode.finish = 0
    start(float(speed))

def start(speed):
    moveInfo = "LR"
    while(pinmode.finish != 1):
        while(pinmode.captGO == 0):
            GPIO.output(pinmode.lightPIN, 1)
            GPIO.output(pinmode.waterPIN, 1)
            GPIO.output(pinmode.brushAPIN, 1)
            GPIO.output(pinmode.brushBPIN, 1)
            GPIO.output(pinmode.motIN1G, 1)
            GPIO.output(pinmode.motIN2G, 0)
            GPIO.output(pinmode.motIN3D, 1)
            GPIO.output(pinmode.motIN4D, 0)
            pinmode.ena.start(speed)
            pinmode.enb.start(speed)
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
    pinmode.finish = 1

