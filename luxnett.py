from flask import Flask, render_template, request, Response
from flask_socketio import SocketIO, send
from automatic import mainAuto, stopAuto
import RPi.GPIO as GPIO
import raspi as pinmode
import time
from camera_py import Camera

#App BACK-END
# 10.30.0.199

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)
pinmode.setup()


# Route pour l'index.html
@app.route('/')
def hello_world():
    return render_template('index.html')

def gen(camera):
    """Video streaming generator function."""
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@socketio.on('video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(Camera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@socketio.on('event')
def connect(post):
    print('received json: '+ str(post))

# Route mode manuel
@socketio.on('water')
def water(post):
    print(post)
    if post['data'] == 1:
        print("enable water")
        print(pinmode.waterPIN)
        GPIO.output(pinmode.waterPIN, 1)
    elif post['data'] == 0:
        print("disable water")
        GPIO.output(pinmode.waterPIN, 0)
    else:
        print("error")
        return send('400')

    return send('200')

@socketio.on('brushA')
def brushA(post):
    print(post['state'])
    if post['state'] == 1:
        print("enable brushA")
        GPIO.output(pinmode.brushAPIN, 1)
    elif post['state'] == 0:
        print("disable brushA")
        GPIO.output(pinmode.brushAPIN, 0)
    else:
        print("error")
        return send('400')
    return send('200')

@socketio.on('brushB')
def brushB(post):
    print(str(post))
    if post['state'] == 1:
        print("enable brushB")
        GPIO.output(pinmode.brushBPIN, 1)
    elif post['state'] == 0:
        print("disable brushB")
        GPIO.output(pinmode.brushBPIN, 0)
    else:
        print("error")
        return send('400')
    return send('200')

@socketio.on('light')
def light(post):

    print(post['data'])
    if post['data'] == 1:
        print("enable light")
        GPIO.output(pinmode.lightPIN, 1)
    elif post['data'] == 0:
        print("disable light")
        GPIO.output(pinmode.lightPIN, 0)
    else:
        print("error")
        return send('400')
    return send('200')

@socketio.on('clean')
def clean(post):

    print("clean GPIO")
    GPIO.cleanup()
    time.sleep(1)
    pinmode.setup()
    return send('200')


@socketio.on('back')
def back(post):

    print("turn back")
    pinmode.turnBack()
    time.sleep(5)
    pinmode.stopRun()
    return send('200')


@socketio.on('up')
def up(post):

    if post['up'] == 1:
        print("go up")
        pinmode.straightAhead()
        return send('200')
    elif post['up'] == 0:
        print("stop up")
        pinmode.stopRun()
        return send('200')
    else:
        return send('400')

@socketio.on('down')
def down(post):

    if post['down'] == 1:
        print("go down")
        pinmode.retreat()
        return send('200')
    elif post['down'] == 0:
        print("stop down")
        pinmode.stopRun()
        return send('200')
    else:
        return send('400')

@socketio.on('left')
def left(post):

    if post['left'] == 1:
        print("go left")
        pinmode.goLeft()
        return send('200')
    elif post['left'] == 0:
        print("stop left")
        pinmode.stopRun()
        return send('200')
    else:
        return send('400')

@socketio.on('right')
def right(post):

    if post['right'] == 1:
        print("go right")
        pinmode.goRight()
        return send('200')
    elif post['right'] == 0:
        print("stop right")
        pinmode.stopRun()
        return send('200')
    else:
        return send('400')

@socketio.on('joys')
def joys(post):

    print("\n reception: \n\t X :" , post['x'] , "\n\t Y :" ,post['y'])

    return send('200')

# Route mode auto
@socketio.on('auto')
def auto(post):

    mainAuto(post['width'] ,post['height'], post['speed'])
    return send('200')


@socketio.on('autoS')
def autoS(post):

    print( "j'ai recu la requete de stop")
    print(post)
    pinmode.ena.stop()
    pinmode.enb.stop()
    GPIO.cleanup()
    pinmode.setup()
    stopAuto()
    return send('200')


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
