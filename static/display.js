
function enableAutomatic(){
    var changeA = $(".elemAuto");
    var elemA = document.getElementById("pushAuto");
    console.log("Let's go body");
    changeA.prop('disabled',false);
    elemA.classList.remove("is-outlined");
    elemA.classList.remove("is-info");
    elemA.classList.add("is-success");

    var changeB = $(".elemManual");
    var elemB = document.getElementById("pushTeach");
    console.log("Ok boy, control !");
    changeB.prop('disabled', true);
    elemB.classList.add("is-outlined");
    elemB.classList.add("is-info");
    elemB.classList.remove("is-success");
}

function enableManual(){
    var changeA = $(".elemAuto");
    var elemA = document.getElementById("pushAuto");
    console.log("Let's go body");
    changeA.prop('disabled',true);
    elemA.classList.add("is-outlined");
    elemA.classList.add("is-info");
    elemA.classList.remove("is-success");

    var changeB = $(".elemManual");
    var elemB = document.getElementById("pushTeach");
    console.log("Ok boy, control !");
    changeB.prop('disabled', false);
    elemB.classList.remove("is-outlined");
    elemB.classList.remove("is-info");
    elemB.classList.add("is-success");
}