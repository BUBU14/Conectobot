
function statusBrush() {
    var elem = document.getElementById("brush");
    var state ;
    var jsonToSend = new Object();

    if (elem.value =="Stop")
    {
        state = 1 ;
    }
    else
    {
        state = 0 ;
    }
    jsonToSend.state = state;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/brush/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                if (elem.value == "Stop") {
                    elem.value = "Start";
                    elem.classList.remove("is-warning");
                    elem.classList.add("is-success");
                    console.log("I'm starting brush");
                }
                else {
                    elem.value = "Stop";
                    elem.classList.remove("is-success");
                    elem.classList.add("is-warning");
                    console.log("I'm ending brush");
                }
                console.log("Success !");
            },
            400: function () {
                console.log("Couldn't change state of Brush")
                if (state == 0) {
                    state = 1;
                }
                else {
                    state = 0;
                }
            }
        }
    });
}

function statusWater() {
    var elem = document.getElementById("water");
    var state ;
    var jsonToSend = new Object();

    if (elem.value =="Stop")
    {
        state = 1 ;
    }
    else
    {
        state = 0 ;
    }
    jsonToSend.state = state;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/water/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                if (elem.value == "Stop") {
                    elem.value = "Start";
                    elem.classList.remove("is-warning");
                    elem.classList.add("is-success");
                    console.log("I'm starting water");
                }
                else {
                    elem.value = "Stop";
                    elem.classList.remove("is-success");
                    elem.classList.add("is-warning");
                    console.log("I'm ending water");
                }
                console.log("Success !");
            },
            400: function () {
                console.log("Couldn't change state of Water")
                if (state == 0) {
                    state = 1;
                }
                else {
                    state = 0;
                }
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

function SetGeneralMove() {
    var elem = document.getElementById("move")
    if(elem.classList.contains("is-danger")) {
        elem.classList.add("is-success");
        elem.classList.remove("is-danger");
    }
    else if (elem.classList.contains("is-success")) {
        elem.classList.add("is-danger");
        elem.classList.remove("is-success");
    }

}