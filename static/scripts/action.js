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
    $.ajax({
        url: '/brushA/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                if (elem.value == "Stop") {
                    elem.value = "Start";
                    elem.classList.remove("is-warning");
                    elem.classList.add("is-success");
                    console.log("I'm starting brushA");
                }
                else {
                    elem.value = "Stop";
                    elem.classList.remove("is-success");
                    elem.classList.add("is-warning");
                    console.log("I'm ending brushA");
                }
                console.log("Success !");
            },
            400: function () {
                console.log("Couldn't change state of BrushA");
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
    $.ajax({
        url: '/brushB/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                if (elem.value == "Stop") {
                    elem.value = "Start";
                    elem.classList.remove("is-warning");
                    elem.classList.add("is-success");
                    console.log("I'm starting brushB");
                }
                else {
                    elem.value = "Stop";
                    elem.classList.remove("is-success");
                    elem.classList.add("is-warning");
                    console.log("I'm ending brushB");
                }
                console.log("Success !");
            },
            400: function () {
                console.log("Couldn't change state of BrushB");
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
                    elem.classList.remove("is-success");
                    elem.classList.add("is-warning");
                    console.log("I'm starting water");
                }
                else {
                    elem.value = "Stop";
                    elem.classList.remove("is-warning");
                    elem.classList.add("is-success");
                    console.log("I'm ending water");
                }
                console.log("Success !");
            },
            400: function () {
                console.log("Couldn't change state of Water");
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