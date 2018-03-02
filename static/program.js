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
        $("#Width").removeClass("is-warning");
        $("#Width").removeClass("is-success");
        $("#Width").addClass("is-danger");
        dataOk -= 1
    }
    else
    {
        $("#Width").removeClass("is-warning");
        $("#Width").removeClass("is-danger");
        $("#Width").addClass("is-success");
        dataOk += 1
    }
    jsonToSend.height = elemH.val();
    if (elemH.val() == "")
    {
        $("#Height").removeClass("is-warning");
        $("#Height").removeClass("is-success");
        $("#Height").addClass("is-danger");
        dataOk -= 1
    }
    else
    {
        $("#Height").removeClass("is-warning");
        $("#Height").removeClass("is-danger");
        $("#Height").addClass("is-success");
        dataOk += 1
    }
    jsonToSend.speed = elemS.val();
    if (elemS.val() == "")
    {
        $("#Speed").removeClass("is-warning");
        $("#Speed").removeClass("is-success");
        $("#Speed").addClass("is-danger");
        dataOk -= 1
    }
    else
    {
        $("#Speed").removeClass("is-warning");
        $("#Speed").removeClass("is-danger");
        $("#Speed").addClass("is-success");
        dataOk += 1
    }

    var jsonString = JSON.stringify(jsonToSend, null, '\t');

    console.log(dataOk);

    if (dataOk == 3)
    {
        $.ajax({
            url: '/auto/',
            type: 'POST',
            dataType: 'application/json;charset=UTF-8',
            data: jsonString,
            statusCode: {
                200: function () {
                    console.log("program finish with no error !");
                },
                201: function () {
                    console.log("programme don't finish with error")
                },
                400: function () {
                    console.log("info auto couldn't send");
                }
            }
        });
    }
}