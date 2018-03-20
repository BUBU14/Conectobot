from flask import Flask, render_template, request, make_response
from automatic import mainAuto, stopAuto
import RPi.GPIO as GPIO
import raspi as pinmode
import time
import asyncio
#App BACK-END
# 10.30.0.199


app = Flask(__name__)

# Route pour l'index.html
@app.route('/')
def hello_world():
    return render_template('index.html')

# Route mode manuel
@app.route('/water/', methods=['POST'])
def brush():
    post = request.get_json(force=True)
    print(post['state'])
    if post['state'] == 1:
        print("enable water")
        print(pinmode.waterPIN)
        GPIO.output(pinmode.waterPIN,1)
    elif post['state'] == 0:
        print("disable water")
        GPIO.output(pinmode.waterPIN,0)
    else:
        print("error")
        return make_response('400')
    return make_response('200')


@app.route('/brushA/', methods=['POST'])
def waterA():
    post = request.get_json(force=True)
    print(post['state'])
    if post['state'] == 1:
        print("enable brushA")
        GPIO.output(pinmode.brushAPIN, 1)
    elif post['state'] == 0:
        print("disable brushA")
        GPIO.output(pinmode.brushAPIN, 0)
    else:
        print("error")
        return make_response('400')
    return make_response('200')

@app.route('/brushB/', methods=['POST'])
def waterB():
    post = request.get_json(force=True)
    print(post['state'])
    if post['state'] == 1:
        print("enable brushB")
        GPIO.output(pinmode.brushBPIN, 1)
    elif post['state'] == 0:
        print("disable brushB")
        GPIO.output(pinmode.brushBPIN, 0)
    else:
        print("error")
        return make_response('400')
    return make_response('200')

@app.route('/light/', methods=['POST'])
def light():
    post = request.get_json(force=True)
    print(post['state'])
    if post['state'] == 1:
        print("enable light")
        GPIO.output(pinmode.lightPIN, 1)
    elif post['state'] == 0:
        print("disable light")
        GPIO.output(pinmode.lightPIN, 0)
    else:
        print("error")
        return make_response('400')
    return make_response('200')

@app.route('/clean/', methods=['POST'])
def clean():
    post = request.get_json(force=True)
    print("clean GPIO")
    GPIO.cleanup()
    return make_response('200')


@app.route('/back/', methods=['POST'])
def back():
    post = request.get_json(force=True)
    print("turn back")
    GPIO.output(pinmode.motIN1G, 1)
    GPIO.output(pinmode.motIN2G, 0)
    GPIO.output(pinmode.motIN3D, 0)
    GPIO.output(pinmode.motIN4D, 1)
    pinmode.ena.start(pinmode.maxSpeed)
    pinmode.enb.start(pinmode.maxSpeed)
    time.sleep(5)
    GPIO.output(pinmode.motIN1G,0)
    GPIO.output(pinmode.motIN4D,0)
    pinmode.ena.stop()
    pinmode.enb.stop()
    return make_response('200')


@app.route('/up/', methods=['POST'])
def up():
    post = request.get_json(force=True)
    if post['up'] == 1:
        print("go up")
        GPIO.output(pinmode.motIN1G, 1)
        GPIO.output(pinmode.motIN2G, 0)
        GPIO.output(pinmode.motIN3D, 1)
        GPIO.output(pinmode.motIN4D, 0)
        pinmode.ena.start(pinmode.maxSpeed)
        pinmode.enb.start(pinmode.maxSpeed)
        return make_response('200')
    elif post['up'] == 0:
        print("stop up")
        GPIO.output(pinmode.motIN1G, 0)
        GPIO.output(pinmode.motIN3D, 0)
        pinmode.ena.stop()
        pinmode.enb.stop()
        return make_response('200')
    else:
        return make_response('400')

@app.route('/down/', methods=['POST'])
def down():
    post = request.get_json(force=True)
    if post['down'] == 1:
        print("go down")
        GPIO.output(pinmode.motIN1G, 0)
        GPIO.output(pinmode.motIN2G, 1)
        GPIO.output(pinmode.motIN3D, 0)
        GPIO.output(pinmode.motIN4D, 1)
        pinmode.ena.start(pinmode.maxSpeed)
        pinmode.enb.start(pinmode.maxSpeed)
        return make_response('200')
    elif post['down'] == 0:
        print("stop down")
        GPIO.output(pinmode.motIN2G, 0)
        GPIO.output(pinmode.motIN4D, 0)
        pinmode.ena.stop()
        pinmode.enb.stop()
        return make_response('200')
    else:
        return make_response('400')

@app.route('/left/', methods=['POST'])
def left():
    post = request.get_json(force=True)
    if post['left'] == 1:
        print("go left")
        GPIO.output(pinmode.motIN1G, 1)
        GPIO.output(pinmode.motIN2G, 0)
        GPIO.output(pinmode.motIN3D, 1)
        GPIO.output(pinmode.motIN4D, 0)
        pinmode.ena.start(pinmode.turnSpeed)
        pinmode.enb.start(pinmode.maxSpeed)
        return make_response('200')
    elif post['left'] == 0:
        print("stop left")
        GPIO.output(pinmode.motIN1G, 0)
        GPIO.output(pinmode.motIN3D, 0)
        pinmode.ena.stop()
        pinmode.enb.stop()
        return make_response('200')
    else:
        return make_response('400')

@app.route('/right/', methods=['POST'])
def right():
    post = request.get_json(force=True)
    if post['right'] == 1:
        print("go right")
        GPIO.output(pinmode.motIN1G, 1)
        GPIO.output(pinmode.motIN2G, 0)
        GPIO.output(pinmode.motIN3D, 1)
        GPIO.output(pinmode.motIN4D, 0)
        pinmode.ena.start(pinmode.maxSpeed)
        pinmode.enb.start(pinmode.turnSpeed)
        return make_response('200')
    elif post['right'] == 0:
        print("stop right")
        GPIO.output(pinmode.motIN1G, 0)
        GPIO.output(pinmode.motIN3D, 0)
        pinmode.ena.stop()
        pinmode.enb.stop()
        return make_response('200')
    else:
        return make_response('400')

@app.route('/joys/', methods=['POST'])
def joys():
    post = request.get_json(force=True)
    print("\n reception: \n\t X :" , post['x'] , "\n\t Y :" ,post['y'])
    ##### FUNCTION
    return make_response('200')

# Route mode auto
@app.route('/auto/', methods=['POST'])
def auto():
    post = request.get_json(force=True)
    mainAuto(post['width'] ,post['height'], post['speed'])
    return make_response('200')


@app.route('/autoS/', methods=['POST'])
def autoS():
    post = request.get_json(force=True)
    print( "j'ai recu la requete de stop")
    print(post)
    pinmode.ena.stop()
    pinmode.enb.stop()
    GPIO.cleanup()
    stopAuto()
    return make_response('200')


if __name__ == '__main__':
    app.run(host="0.0.0.0")
