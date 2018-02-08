from flask import Flask, render_template, request, make_response
import json

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

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

if __name__ == '__main__':
    app.run(host="0.0.0.0")
