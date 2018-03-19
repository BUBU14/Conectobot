from flask import Flask, render_template, request, make_response
from automatic import mainAuto, stopAuto
import RPi.GPIO as GPIO
import time
#App BACK-END
# 10.30.0.199


lightPIN = 18

brushPIN = 23
waterPIN = 24

motIN1G = 16
motIN2G = 19
motIN3D = 26
motIN4D = 20



GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(18, GPIO.OUT)

GPIO.setup(23, GPIO.OUT)
GPIO.setup(24, GPIO.OUT)

GPIO.setup(16, GPIO.OUT)
GPIO.setup(19, GPIO.OUT)

GPIO.setup(20, GPIO.OUT)
GPIO.setup(26, GPIO.OUT)


app = Flask(__name__)

# Route pour l'index.html
@app.route('/')
def hello_world():
    return render_template('index.html')

# Route mode manuel
@app.route('/brush/', methods=['POST'])
def brush():
    post = request.get_json(force=True)
    print(post['state'])
    if post['state'] == 1:
        print("enable brush")
        GPIO.output(brushPIN,1)
    elif post['state'] == 0:
        print("disable brush")
        GPIO.output(brushPIN,0)
    else:
        print("error")
        return make_response('400')
    return make_response('200')


@app.route('/water/', methods=['POST'])
def water():
    post = request.get_json(force=True)
    print(post['state'])
    if post['state'] == 1:
        print("enable water")
        GPIO.output(waterPIN, 1)
    elif post['state'] == 0:
        print("disable water")
        GPIO.output(waterPIN, 0)
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
        GPIO.output(lightPIN, 1)
    elif post['state'] == 0:
        print("disable light")
        GPIO.output(lightPIN, 0)
    else:
        print("error")
        return make_response('400')
    return make_response('200')


@app.route('/back/', methods=['POST'])
def back():
    post = request.get_json(force=True)

    print(post)
    GPIO.output(motIN1G, 1)
    GPIO.output(motIN2G, 0)
    GPIO.output(motIN3D, 0)
    GPIO.output(motIN4D, 1)
    time.sleep(10)
    GPIO.output(motIN1G,0)
    GPIO.output(motIN4D,0)
    return make_response('200')

@app.route('/up/', methods=['POST'])
def up():
    post = request.get_json(force=True)
    if post['up'] == 1:
        print("go up")
        GPIO.output(motIN1G, 1)
        GPIO.output(motIN2G, 0)
        GPIO.output(motIN3D, 1)
        GPIO.output(motIN4D, 0)
        return make_response('200')
    elif post['up'] == 0:
        print("stop up")
        GPIO.output(motIN1G, 0)
        GPIO.output(motIN3D, 0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/down/', methods=['POST'])
def down():
    post = request.get_json(force=True)
    if post['down'] == 1:
        print("go down")
        GPIO.output(motIN1G, 0)
        GPIO.output(motIN2G, 1)
        GPIO.output(motIN3D, 0)
        GPIO.output(motIN4D, 1)
        return make_response('200')
    elif post['down'] == 0:
        print("stop down")
        GPIO.output(motIN2G, 0)
        GPIO.output(motIN4D, 0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/left/', methods=['POST'])
def left():
    post = request.get_json(force=True)
    if post['left'] == 1:
        print("go left")
        GPIO.output(motIN3D, 1)
        GPIO.output(motIN4D, 0)
        return make_response('200')
    elif post['left'] == 0:
        print("stop left")
        GPIO.output(motIN3D, 0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/right/', methods=['POST'])
def right():
    post = request.get_json(force=True)

    if post['right'] == 1:
        print("go right")
        GPIO.output(motIN1G, 1)
        GPIO.output(motIN2G, 0)
        return make_response('200')
    elif post['right'] == 0:
        print("stop right")
        GPIO.output(motIN1G, 0)
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

    status = mainAuto(post['width'] ,post['height'], post['speed'])
    if status ==1:
        return make_response('200')
    else :
        return make_response('201')

@app.route('/autoS/', methods=['POST'])
def autoS():
    post = request.get_json(force=True)
    print( "j'ai recu la requete de stop")
    print(post)
    stopAuto()
    return make_response('200')


if __name__ == '__main__':
    app.run(host="0.0.0.0")
