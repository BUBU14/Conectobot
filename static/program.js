function runAuto()
{
    var elemH = $("#Width");
    var elemW = $("#Height");
    var elemS = $("#Speed");

    console.log("Witdh = "+elemW.val());
    console.log("Height = "+elemH.val());
    console.log("Speed = "+elemS.val());
    console.log(elemS);
    console.log(elemW);

    var jsonToSend = new Object();
    jsonToSend.width = elemW.val();
    jsonToSend.height = elemH.val();
    jsonToSend.speed = elemS.val();

    var jsonString = JSON.stringify(jsonToSend, null, '\t');

    $.ajax({
        url: '/auto/',
        type: 'POST',
        dataType: 'application/json;charset=UTF-8',
        data: jsonString,
        statusCode: {
            200: function () {
                console.log("info auto send !");
            },
            400: function () {
                console.log("info auto couldn't send");
            }
        }
    });

}