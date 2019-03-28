$(document).ready(function(){

$(document).on("click", "#portLink", showPort);
$(document).on("click", "#bioLink", showBio);
$(document).on("click", "#contactLink", showContact);

function showPort() {
    $("#bioBox").hide();
    $("#portBox").show();
    $("#contactBox").hide();

    $("#portLink").addClass("active");
    $("#bioLink").removeClass("active");
    $("#contactLink").removeClass("active");
}

function showBio() {
    $("#bioBox").show();
    $("#portBox").hide();
    $("#contactBox").hide();

    $("#portLink").removeClass("active");
    $("#bioLink").addClass("active");
    $("#contactLink").removeClass("active");
}

function showContact() {
    $("#bioBox").hide();
    $("#portBox").hide();
    $("#contactBox").show();

    $("#portLink").removeClass("active");
    $("#bioLink").removeClass("active");
    $("#contactLink").addClass("active");
}



$(document).on("click", "#hangmanLink", openHangman);
$(document).on("click", "#giphyLink", openGiphy);
$(document).on("click", "#awesomeLink", openAwesome);
$(document).on("click", "#crystalLink", openCrystal);


function openHangman() {
    window.open("https://moraveca.github.io/Word-Guess-Game/");
}

function openGiphy() {
    window.open("https://moraveca.github.io/giphy_app/");
}

function openAwesome() {
    window.open("https://danpatcia.github.io/Group_Project_Awesome/")
}

function openCrystal() {
    window.open("https://moraveca.github.io/unit-4-game/")
}





















})