from flask import Flask, render_template, request, make_response
from automatic import mainAuto

import time
#App BACK-END

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
    elif post['state'] == 0:
        print("disable brush")
    else:
        print("error")
        return make_response('400')
    print("GPIO 10")
    return make_response('200')

@app.route('/water/', methods=['POST'])
def water():
    post = request.get_json(force=True)
    print(post['state'])
    if post['state'] == 1:
        print("enable water")
    elif post['state'] == 0:
        print("disable water")
    else:
        print("error")
        return make_response('400')
    print("GPIO 11")
    return make_response('200')

@app.route('/back/', methods=['POST'])
def back():
    post = request.get_json(force=True)

    print(post)
    print("GPIO 15")
    time.sleep(10)
    return make_response('200')

@app.route('/up/', methods=['POST'])
def up():
    post = request.get_json(force=True)
    print(post['up'])
    if post['up'] == 1:
        return make_response('200')
    else:
        return make_response('400')

@app.route('/down/', methods=['POST'])
def down():
    post = request.get_json(force=True)
    print(post['down'])
    if post['down'] == 1:
        return make_response('200')
    else:
        return make_response('400')

@app.route('/left/', methods=['POST'])
def left():
    post = request.get_json(force=True)
    print(post['left'])
    if post['left'] == 1:
        return make_response('200')
    else:
        return make_response('400')

@app.route('/right/', methods=['POST'])
def right():
    post = request.get_json(force=True)
    print(post['right'])
    if post['right'] == 1:
        return make_response('200')
    else:
        return make_response('400')

@app.route('/joys/', methods=['POST'])
def joys():
    post = request.get_json(force=True)
    print("\n reception: \n\t X :" , post['x'] , "\n\t Y :" ,post['y'])
    return make_response('200')


@app.route('/rightCam/', methods=['POST'])
def rightCam():
    post = request.get_json(force=True)
    print(post['rightCam'])
    printf("GPIO 14")
    if post['rightCam'] == 1:
        return make_response('200')
    else:
        return make_response('400')

@app.route('/leftCam/', methods=['POST'])
def leftCam():
    post = request.get_json(force=True)
    print(post['leftCam'])
    print("GPIO 15")
    if post['leftCam'] == 1:
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



if __name__ == '__main__':
    app.run(host="0.0.0.0")
