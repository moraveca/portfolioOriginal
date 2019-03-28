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
    window.open("https://moraveca.github.io/movieJournal/")
}

function openCrystal() {
    window.open("https://moraveca.github.io/unit-4-game/")
}

$(document).on("click", "#hangCode", hangCode);
$(document).on("click", "#gifCode", gifCode);
$(document).on("click", "#crystalCode", crystalCode);
$(document).on("click", "#journalCode", journalCode);


function hangCode() {
    window.open("https://github.com/moraveca/Word-Guess-Game.git");
}

function gifCode() {
    window.open("https://github.com/moraveca/giphy_app.git");
}

function crystalCode() {
    window.open("https://github.com/moraveca/unit-4-game.git")
}

function journalCode() {
    window.open("https://github.com/moraveca/movieJournal.git")
}




















})