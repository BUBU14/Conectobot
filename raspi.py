import RPi.GPIO as GPIO

finish = 0

def setup():
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(18, GPIO.OUT)
    GPIO.setup(23, GPIO.OUT)
    GPIO.setup(24, GPIO.OUT)
    GPIO.setup(22, GPIO.OUT)
    GPIO.setup(16, GPIO.OUT)
    GPIO.setup(19, GPIO.OUT)
    GPIO.setup(20, GPIO.OUT)
    GPIO.setup(26, GPIO.OUT)
    GPIO.setup(12, GPIO.OUT)
    GPIO.setup(13, GPIO.OUT)
    ena = GPIO.PWM(12, 100)
    enb = GPIO.PWM(13, 100)

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(12, GPIO.OUT)
GPIO.setup(13, GPIO.OUT)
ena = GPIO.PWM(12, 100)
enb = GPIO.PWM(13, 100)

lightPIN = 18

brushAPIN = 23
brushBPIN = 24

waterPIN = 22

motIN1G = 16
motIN2G = 19

motIN3D = 26
motIN4D = 20

motENA = 12
motENB = 13

maxSpeed = 100
turnSpeed = 70

def stopRun():
    GPIO.output(motIN1G, 0)
    GPIO.output(motIN2G, 0)
    GPIO.output(motIN3D, 0)
    GPIO.output(motIN4D, 0)
    ena.stop()
    enb.stop()

def straightAhead():
    GPIO.output(motIN1G, 1)
    GPIO.output(motIN2G, 0)
    GPIO.output(motIN3D, 1)
    GPIO.output(motIN4D, 0)
    ena.start(maxSpeed)
    enb.start(maxSpeed)

def retreat():
    GPIO.output(motIN1G, 0)
    GPIO.output(motIN2G, 1)
    GPIO.output(motIN3D, 0)
    GPIO.output(motIN4D, 1)
    ena.start(maxSpeed)
    enb.start(maxSpeed)

def goLeft():
    GPIO.output(motIN1G, 1)
    GPIO.output(motIN2G, 0)
    GPIO.output(motIN3D, 1)
    GPIO.output(motIN4D, 0)
    ena.start(turnSpeed)
    enb.start(maxSpeed)

def goRight():
    GPIO.output(motIN1G, 1)
    GPIO.output(motIN2G, 0)
    GPIO.output(motIN3D, 1)
    GPIO.output(motIN4D, 0)
    ena.start(maxSpeed)
    enb.start(turnSpeed)

def turnBack():
    GPIO.output(motIN1G, 1)
    GPIO.output(motIN2G, 0)
    GPIO.output(motIN3D, 0)
    GPIO.output(motIN4D, 1)
    ena.start(maxSpeed)
    enb.start(maxSpeed)
