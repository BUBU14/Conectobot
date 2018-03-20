import RPi.GPIO as GPIO
import time
import asyncio

motIN1G = 16
motIN2G = 19
motIN3D = 26
motIN4D = 20


GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(12, GPIO.OUT)
GPIO.setup(13, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(19, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
GPIO.setup(26, GPIO.OUT)


ena = GPIO.PWM(12, 100)
enb = GPIO.PWM(13, 100)

finish = 0

def mainAuto(width,height,speed):
    print("i'm start auto")
    print("clean restriction:\n \t width\t:"+width+"\n \t height\t:"+height+"\n \t speed\t:"+speed)
    calculDuration(width,height,speed)
    status = start(speed)
    return status

def start(speed):
    moveInfo = "LR"
    capteurH = 0
    while(finish != 1):
        while (capteurH ==0) :
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