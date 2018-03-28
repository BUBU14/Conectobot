var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        console.log("lets go socket programm");
        socket.emit('event', {data: 'Connected!'});
    });

function runAuto()
{
    var elemW = $("#Width");
    var elemH = $("#Height");
    var elemS = $("#Speed");
    var dataOk = 0;

    console.log("Witdh  = "+elemW.val());
    console.log("Height = "+elemH.val());
    console.log("Speed  = "+elemS.val());

    if (elemW.val() == "")
    {
        $("#Width").removeClass("is-warning is-success").addClass("is-danger");
        dataOk -= 1
    }
    else
    {
        $("#Width").removeClass("is-warning is-danger").addClass("is-success");
        dataOk += 1
    }
    if (elemH.val() == "")
    {
        $("#Height").removeClass("is-warning is-success").addClass("is-danger");
        dataOk -= 1
    }
    else
    {
        $("#Height").removeClass("is-warning is-danger").addClass("is-success");
        dataOk += 1
    }
    if (elemS.val() == "")
    {
        $("#Speed").removeClass("is-warning is-success").addClass("is-danger");
        dataOk -= 1
    }
    else
    {
        $("#Speed").removeClass("is-warning is-danger").addClass("is-success");
        dataOk += 1
    }


    console.log(dataOk);

    if (dataOk == 3)
    {
        socket.emit('auto', {width : elemW , height : elemH , speed : elemS})
    }
}

function stopAuto()
{
    socket.emit('autoS', {data : 0});
    console.log("i stop auto");

}
