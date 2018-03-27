var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        socket.emit('event', {data: 'Connected!'});
    });

function statusBrushA() {
    var elem = document.getElementById("brushA");
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
}

function statusBrushB() {
    var elem = document.getElementById("brushB");
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
    socket.emit('water',jsonString);
}

function statusLight() {
    var elem = document.getElementById("light");
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
    socket.emit('light',jsonString);
}

function clean(){
    var jsonToSend = new Object();
    jsonToSend.clean = 1
    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    $.ajax({
        url: '/clean/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {

                console.log("clean !");
            },
            400: function () {
                console.log("NO clean")
            }
        }
    });
}