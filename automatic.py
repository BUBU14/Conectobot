import time
import asyncio
import raspi

finish = 0

def mainAuto(width,height,speed):
    print("i'm start auto")
    print("clean restriction:\n \t width\t:"+width+"\n \t height\t:"+height+"\n \t speed\t:"+speed)
    calculDuration(width,height,speed)
    status = start(float(speed))
    return status

def start(speed):
    moveInfo = "LR"
    capteurH = 0
    while(finish != 1):
        while (capteurH ==0) :
            print("lets'go boy")
            GPIO.output(motIN1G, 1)
            GPIO.output(motIN2G, 0)
            GPIO.output(motIN3D, 1)
            GPIO.output(motIN4D, 0)
            ena.start(speed)
            enb.start(speed)
        if capteurH:
            moveInfo = changeDirection(moveInfo)
    return 1

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