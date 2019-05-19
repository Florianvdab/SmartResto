document.addEventListener("DOMContentLoaded", init);


function init() {
    getMaaltijden().then(function (result) {
        displayMaaltijden(result);
    })
    getBestellingen().then(function (result) {
        displayBestellingen(result);
    })
}

function getMaaltijden() {
    return repos.getMaaltijden();
}

function getBestellingen() {
    return repos.getBestellingen();
}

function displayMaaltijden(maaltijden) {
    let list = document.getElementById("maaltijden");
    list.innerHTML = "";

    maaltijden.foreach(function (item) {
        list.innerHTML += generateMaaltijdListItem(item);
    });
}

function displayBestellingen(bestellingen) {
    let list = document.getElementById("bestellingen");
    list.innerHTML = "";

    bestellingen.foreach(function (item) {
        list.innerHTML += generateBestellingListItem(item);
    });
}

function generateMaaltijdListItem({ naam, ingredienten, keuken, kok }) {
    return `<p> ${naam} </p> \n<p> ${ingredienten} </p>\n<p> ${keuken} </p> \n<p> ${kok} </p>`
}

function generateBestellingListItem({ ordernummer, datum, personen }) {
    return `<p> ${ordernummer} </p> \n<p> ${datum} </p>\n<p> ${personen} </p>`
}