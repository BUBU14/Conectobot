
function moveRightCam()
{
    if(mousedownID==-1)
        mousedownID = setInterval(sendRightCam, 100);
}

function mouseMoveRightCam() {
    if(mousedownID!=-1) {
        var elem = document.getElementById("rightCam");
        elem.classList.remove("is-success");
        clearInterval(mousedownID);
        mousedownID=-1;
        sendEndRightCam();
    }
}

function sendRightCam() {
    var elem = document.getElementById("rightCam");
    elem.classList.add("is-success");
    var jsonToSend = new Object();
    jsonToSend.rightCam = 1;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/rightCam/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i move right cam !");
            },
            400: function () {
                console.log("Couldn't move cam right");
            }
        }
    });
}


function sendEndRightCam() {

    var jsonToSend = new Object();
    jsonToSend.rightCam = 0;
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


function moveLeftCam()
{
    if(mousedownID==-1)
        mousedownID = setInterval(sendLeftCam, 100);
}

function mouseMoveLeftCam() {
    if(mousedownID!=-1) {
        var elem = document.getElementById("leftCam");
        elem.classList.remove("is-success");
        clearInterval(mousedownID);
        mousedownID=-1;
        sendEndLeftCam();
    }
}

function sendLeftCam() {
    var elem = document.getElementById("leftCam");
    elem.classList.add("is-success");
    var jsonToSend = new Object();
    jsonToSend.leftCam = 1;
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/leftCam/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("i move left cam !");
            },
            400: function () {
                console.log("Couldn't move cam left");
            }
        }
    });
}


function sendEndLeftCam() {

    var jsonToSend = new Object();
    jsonToSend.leftCam = 0;
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


function startVideo()
{

}
