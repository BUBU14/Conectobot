var socket = io.connect('http://' + document.domain + ':' + location.port);
socket.on('connect', function() {
    console.log("lets go socket action");
    socket.emit('event', {data: 'Connected!'});
});

function statusBrushA() {
    var elem = document.getElementById("brushA");
    var state ;

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

    socket.emit('brushA',{data : state});
}

function statusBrushB() {
    var elem = document.getElementById("brushB");
    var state ;

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

    socket.emit('brushB',{data : state});

}

function statusWater() {
    var elem = document.getElementById("water");
    var state;

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

    if (elem.value =="Stop")
    {
        state = 1 ;
        elem.value ="Start";
        elem.classList.remove("is-warning");
        elem.classList.add("is-success");
        console.log("I'm start light");
    }
    else
    {
        state = 0 ;
        elem.value ="Stop";
        elem.classList.remove("is-success");
        elem.classList.add("is-warning");
        console.log("I'm ending light");
    }

    socket.emit('light',{data : state});
}

function clean(){
    socket.emit('clean', {data : 1})
}