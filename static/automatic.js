
function enableAutomatic(){
    var change = $(".elemAuto");
    var elem = document.getElementById("pushAuto");
    console.log("Let's go body");
    change.prop('disabled',false);
    elem.classList.remove("is-outlined");
    elem.classList.remove("is-info");
    elem.classList.add("is-success");
}
