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
    $.ajax({
        url: '/light/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                if (elem.value == "Stop") {
                    elem.value = "Start";
                    elem.classList.remove("is-warning");
                    elem.classList.add("is-success");
                    console.log("I'm starting light");
                }
                else {
                    elem.value = "Stop";
                    elem.classList.remove("is-success");
                    elem.classList.add("is-warning");
                    console.log("I'm ending light");
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
