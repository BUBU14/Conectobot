# ROS

def mainAuto(width,height,speed):
    print("i'm start auto")
    print("clean restriction:\n \t width\t:"+width+"\n \t height\t:"+height+"\n \t speed\t:"+speed)
    calculDuration(width,height,speed)
    start()
    end()

def start():
    moveInfo = "LR"
    capteurL = 1
    capteurR = 1
    capteurH = 1


    while (capteurL != 0 or capteurR != 0 or capteurH != 0):
        move()
    if capteurH:
        if moveInfo =="LR":
            rotation(90,"R")
            moveInfo = "RL"

        else :
            rotation(90,"L")
            moveInfo = "LR"



def rotation(angle, direction):
    print("i'm turn")

def move():
    print("i'm move")
    # activation moteur

def calculDuration(width, height,speed):
    duration =(width * height)/speed

    print("Duration of clean: " +duration)

def end():
    print("Finish")