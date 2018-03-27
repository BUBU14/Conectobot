var socket = io.connect('http://' + document.domain + ':' + location.port);
socket.on('connect', function() {
    console.log("lets go socket action");
    socket.emit('event', {data: 'Connected!'});
});

function statusBrushA() {
    var elem = document.getElementById("brushA");
    var state ;
    var jsonToSend = new Object();

    if (elem.value =="Stop")
    {
        state = 1 ;
        elem.value = "Start"
    }
    else
    {
        state = 0 ;
        elem.value = "Stop"
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
        elem.value ="Start";
        elem.classList.remove("is-warning");
        elem.classList.add("is-success");
        console.log("I'm starting water");
    }
    else
    {
        state = 0 ;
        elem.value ="Stop";
        elem.classList.remove("is-success");
        elem.classList.add("is-warning");
        console.log("I'm ending water");
    }

    socket.emit('water',{data : state});
}

function statusLight() {
    var elem = document.getElementById("light");
    var state ;
    var jsonToSend = new Object();

    if (elem.value =="Stop")
    {
        state = 1 ;
        elem.value ="Start"
        elem.classList.remove("is-warning");
        elem.classList.add("is-success");
        console.log("I'm ending water");
    }
    else
    {
        state = 0 ;
        elem.value ="Stop"
        elem.classList.remove("is-success");
        elem.classList.add("is-warning");
        console.log("I'm ending water");
    }

    socket.emit('light',{data : state});
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