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
$(document).on("click", "#sportsChatLink", openSports);
$(document).on("click", "#burgerLink", openBurger);


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

function openSports() {
    window.open("https://sleepy-dusk-14317.herokuapp.com/")
}

function openBurger() {
    window.open("https://vast-bastion-19663.herokuapp.com/")
}

$(document).on("click", "#hangCode", hangCode);
$(document).on("click", "#gifCode", gifCode);
$(document).on("click", "#crystalCode", crystalCode);
$(document).on("click", "#journalCode", journalCode);
$(document).on("click", "#sportsCode", sportsCode);
$(document).on("click", "#burgerCode", burgerCode);


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

function sportsCode() {
    window.open("https://github.com/moraveca/sports_chat.git")
}

function burgerCode() {
    window.open("https://github.com/moraveca/burger.git")
}


$(document).on("click", "#contactSubmit", sendEmail);

function sendEmail() {
    alert("Email functionality is currently in progress... Feel free to send an email to moraveca@gmail.com")
}

$(document).on("click", "#gitPortLink", openGit);
$(document).on("click", "#linkedLink", openLinked);

function openGit() {
    window.open("https://github.com/moraveca");
}

function openLinked() {
    window.open("https://www.linkedin.com/in/adrian-moravec-96012024")
}




















})