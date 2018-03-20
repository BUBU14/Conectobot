function runAuto()
{
    var elemW = $("#Width");
    var elemH = $("#Height");
    var elemS = $("#Speed");
    var dataOk = 0;

    console.log("Witdh  = "+elemW.val());
    console.log("Height = "+elemH.val());
    console.log("Speed  = "+elemS.val());

    var jsonToSend = new Object();

    jsonToSend.width = elemW.val();
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
    jsonToSend.height = elemH.val();
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
    jsonToSend.speed = elemS.val();
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

    var jsonString = JSON.stringify(jsonToSend, null, '\t');

    console.log(dataOk);

    if (dataOk == 3)
    {
        $.ajax({
            async: true,
            url: '/auto/',
            type: 'POST',
            dataType: 'application/json;charset=UTF-8',
            data: jsonString,
            timeout: 10,
            statusCode: {
                200: function () {
                    console.log("program start !");
                }
            }
        });
    }
}

function stopAuto()
{
    var jsonToSend = new Object() ;

    jsonToSend.stopval = 400 ;

    var jsonString = JSON.stringify(jsonToSend, null, '\t');
    console.log("i stop auto");
    $.ajax({
            url: '/autoS/',
            type: 'POST',
            dataType: 'application/json;charset=UTF-8',
            data: jsonString,
            statusCode: {
                200: function () {
                    console.log("program finish with no error !");
                }
            }
        });
}
