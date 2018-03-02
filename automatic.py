# ROS
import time

def mainAuto(width,height,speed):
    print("i'm start auto")
    print("clean restriction:\n \t width\t:"+width+"\n \t height\t:"+height+"\n \t speed\t:"+speed)
    calculDuration(width,height,speed)
    status = start()
    return status

def start():
    moveInfo = "LR"
    capteurL = 0
    capteurR = 0
    capteurH = 0
    finish = 0

    while(finish != 1):
        while (capteurH == 0):
            print("GPIO 1")
        if capteurH:
            if moveInfo =="LR":
                rotation("R")
                moveInfo = "RL"
            else :
                rotation("L")
                moveInfo = "LR"
            finish += 1
    return 1

def rotation(direction):
    print("turn " + str(direction) )
    if direction == "R":
        print("GPIO 2")
        time.sleep(10)
        print("GPIO 4")
        time.sleep(10)
        print("GPIO 2")
    if direction == "L":
        print("GPIO 3")
        time.sleep(10)
        print("GPIO 4")
        time.sleep(10)
        print("GPIO 3")
    time.sleep(10)

def calculDuration(width, height,speed):
    duration =(int(width) * int(height))/int(speed)
    print("Duration of clean: " + str(duration) + "minutes")

