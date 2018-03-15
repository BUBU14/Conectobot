from flask import Flask, render_template, request, make_response
from automatic import mainAuto, stopAuto
import RPi.GPIO as GPIO
import time
#App BACK-END
# 10.30.0.199

orderDownPIN = 16
orderUpPIN = 17
brushPIN = 18
waterPIN = 19
orderLeftPIN = 20
orderRightPIN =	22
turnLeftCamPIN = 23
turnRightCamPIN	= 24
turnBackPIN = 25



GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(17, GPIO.OUT)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(19, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
GPIO.setup(22, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)
GPIO.setup(24, GPIO.OUT)
GPIO.setup(25, GPIO.OUT)

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

@app.route('/back/', methods=['POST'])
def back():
    post = request.get_json(force=True)

    print(post)
    GPIO.output(turnBackPIN, 1)
    time.sleep(10)
    GPIO.output(turnBackPIN,0)
    return make_response('200')

@app.route('/up/', methods=['POST'])
def up():
    post = request.get_json(force=True)
    if post['up'] == 1:
        print("go up")
        GPIO.output(orderUpPIN,1)
        return make_response('200')
    elif post['up'] == 0:
        print("stop up")
        GPIO.output(orderUpPIN,0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/down/', methods=['POST'])
def down():
    post = request.get_json(force=True)
    if post['down'] == 1:
        print("go down")
        GPIO.output(orderDownPIN, 1)
    elif post['down'] == 1:
        print("stop down")
        GPIO.output(orderDownPIN, 0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/left/', methods=['POST'])
def left():
    post = request.get_json(force=True)
    if post['left'] == 1:
        print("go left")
        GPIO.output(orderLeftPIN, 1)
        return make_response('200')
    elif post['left'] == 0:
        print("stop left")
        GPIO.output(orderLeftPIN, 0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/right/', methods=['POST'])
def right():
    post = request.get_json(force=True)

    if post['right'] == 1:
        print("go right")
        GPIO.output(orderRightPIN, 1)
        return make_response('200')
    elif post['right'] == 0:
        print("stop right")
        GPIO.output(orderRightPIN, 0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/joys/', methods=['POST'])
def joys():
    post = request.get_json(force=True)
    print("\n reception: \n\t X :" , post['x'] , "\n\t Y :" ,post['y'])
    ##### FUNCTION
    return make_response('200')


@app.route('/rightCam/', methods=['POST'])
def rightCam():
    post = request.get_json(force=True)
    if post['rightCam'] == 1:
        print("go right pi cam")
        GPIO.output(turnRightCamPIN, 1)
        return make_response('200')
    elif post['rightCam'] == 0:
        print("go right pi cam")
        GPIO.output(turnRightCamPIN, 0)
        return make_response('200')
    else:
        return make_response('400')

@app.route('/leftCam/', methods=['POST'])
def leftCam():
    post = request.get_json(force=True)
    if post['leftCam'] == 1:
        print(post['leftCam'])
        GPIO.output(turnLeftCamPIN, 1)
        return make_response('200')
    if post['leftCam'] == 0:
        print(post['leftCam'])
        GPIO.output(turnLeftCamPIN, 1)
        return make_response('200')
    else:
        return make_response('400')





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


if __name__ == '__main__':
    app.run(host="0.0.0.0")
