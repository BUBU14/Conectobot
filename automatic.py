import time
import raspi as pinmode
import RPi.GPIO as GPIO

pinmode.setup()

def mainAuto(width,height,speed):
    print("i'm start auto")
    print("clean restriction:\n \t width\t:"+width+"\n \t height\t:"+height+"\n \t speed\t:"+speed)
    calculDuration(width,height,speed)
    pinmode.finish = 0
    endProg = 0
    pinmode.moveInfo = "LR"
    while( endProg != 1):
        endProg = start(float(speed),pinmode.moveInfo, endProg)


def start(speed,moveInfo,endProg):
    if endProg ==0:
        pinmode.enableComponent()
        pinmode.straightAhead()
        pinmode.ena.start(speed)
        pinmode.enb.start(speed)
        time.sleep(2)
        return 2
    if pinmode.finish == 1 :
        pinmode.disableComponent()
        print("end programm")
        return 1
    if endProg ==2:
        pinmode.moveInfo = changeDirection(moveInfo)
        return 0


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
    pinmode.straightAhead()
    time.sleep(5)
    pinmode.stopRun()

def rotation(direction):
    print("turn " + str(direction) )
    if direction == "R":
        pinmode.turnRight()
        time.sleep(2)
    if direction == "L":
        pinmode.turnLeft()
        time.sleep(2)
    time.sleep(2)

def calculDuration(width, height,speed):
    duration =(int(width) * int(height))/int(speed)
    print("Duration of clean: " + str(duration) + "minutes")

def stopAuto():
    pinmode.finish = 1
    pinmode.disableComponent()
    pinmode.stopRun()
    pinmode.setup()

