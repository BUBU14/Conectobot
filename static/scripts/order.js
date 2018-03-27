var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        socket.emit('event', {data: 'Connected!'});
    });

function statusBack() {
    var elem = document.getElementById("back");

    elem.classList.remove("is-warning");
    elem.classList.add("is-success");
    elem.classList.add("is-loading");
    elem.classList.add("is-disabled");
    console.log("i'm turn back");

    var jsonString = JSON.stringify(1, null, '\t');
    $.ajax({
        url: '/back/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                elem.classList.remove("is-success");
                elem.classList.remove("is-loading");
                elem.classList.remove("is-disabled");
                elem.classList.add("is-warning");
                console.log("Success !");
            },
            400: function () {
                console.log("Couldn't change state of back")
                elem.removeClass("is-success").addClass("is-danger");
            }
        }
    });
}

var mousedownID = -1 ;
function moveUp()
{
    if(mousedownID==-1)
        mousedownID = setInterval(sendUp, 100);
}

function mouseMoveUp() {
    if(mousedownID!=-1) {
        var elem = document.getElementById("up");
        elem.classList.remove("is-success");
        clearInterval(mousedownID);
        mousedownID=-1;
        sendEndUp();
    }
}

function sendUp() {
    var elem = document.getElementById("up");
    elem.classList.add("is-success");
    var jsonToSend = new Object();
    jsonToSend.up = 1;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/up/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i move up !");
            },
            400: function () {
                console.log("Couldn't move up");
            }
        }
    });
}

function sendEndUp() {

    var jsonToSend = new Object();
    jsonToSend.up = 0;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/up/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i stop up!");
            },
            400: function () {
                console.log("Couldn't stop up");
            }
        }
    });
}

function moveDown()
{
    if(mousedownID==-1)
        mousedownID = setInterval(sendDown, 100);
}

function mouseMoveDown() {
    if(mousedownID!=-1) {
        var elem = document.getElementById("down");
        elem.classList.remove("is-success");
        clearInterval(mousedownID);
        mousedownID=-1;
        sendEndDown();
    }
}

function sendDown() {
    var elem = document.getElementById("down");
    elem.classList.add("is-success");
    var jsonToSend = new Object();
    jsonToSend.down = 1;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/down/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i move down !");
            },
            400: function () {
                console.log("Couldn't move down");
            }
        }
    });
}


function sendEndDown() {

    var jsonToSend = new Object();
    jsonToSend.down = 0;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/down/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i stop down!");
            },
            400: function () {
                console.log("Couldn't stop down");
            }
        }
    });
}


function moveLeft()
{
    if(mousedownID==-1)
        mousedownID = setInterval(sendLeft, 100);
}

function mouseMoveLeft() {
    if(mousedownID!=-1) {
        var elem = document.getElementById("left");
        elem.classList.remove("is-success");
        clearInterval(mousedownID);
        mousedownID=-1;
        sendEndLeft();
    }
}

function sendLeft() {
    var elem = document.getElementById("left");
    elem.classList.add("is-success");
    var jsonToSend = new Object();
    jsonToSend.left = 1;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/left/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i move left !");
            },
            400: function () {
                console.log("Couldn't move left");
            }
        }
    });
}


function sendEndLeft() {

    var jsonToSend = new Object();
    jsonToSend.left = 0;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/left/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i stop left!");
            },
            400: function () {
                console.log("Couldn't stop left");
            }
        }
    });
}


function moveRight()
{
    if(mousedownID==-1)
        mousedownID = setInterval(sendRight, 100);
}

function mouseMoveRight() {
    if(mousedownID!=-1) {
        var elem = document.getElementById("right");
        elem.classList.remove("is-success");
        clearInterval(mousedownID);
        mousedownID=-1;
        sendEndRight();
    }
}

function sendRight() {
    var elem = document.getElementById("right");
    elem.classList.add("is-success");
    var jsonToSend = new Object();
    jsonToSend.right = 1;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/right/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i move right !");
            },
            400: function () {
                console.log("Couldn't move right");
            }
        }
    });
}


function sendEndRight() {

    var jsonToSend = new Object();
    jsonToSend.right = 0;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/right/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i stop right!");
            },
            400: function () {
                console.log("Couldn't stop right");
            }
        }
    });
}
