var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        console.log("lets go socket order");
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
    socket.emit('up', {data: 1});
}

function sendEndUp() {

    socket.emit('up',{data : 0});

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
    socket.emit('down',{data : 1});
}


function sendEndDown() {

   socket.emit('down',{data : 0});
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
   socket.emit('left',{data : 1});
}


function sendEndLeft() {
socket.emit('left',{data : 0});
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
    socket.emit('right',{data : 1});
}


function sendEndRight() {
    socket.emit('right',{data : 0});
}
