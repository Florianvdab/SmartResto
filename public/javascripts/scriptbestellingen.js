document.addEventListener("DOMContentLoaded", init);

function init() {
    getBestelling().then(function (result) {
        displayBestelling(result);
    });
    getMaaltijdBestelling().then(function (result1) {
        console.log("IETS");
        displayMaaltijd(Object.values(result1));
    });
}

function getBestelling() {
    return repos.getBestelling();
}

function getMaaltijdBestelling() {
    return repos.getMaaltijdBestelling();
}



function displayMaaltijd(maaltijdbestelling) {
    for (let i = 0, len = maaltijdbestelling.length; i < len; i++) {
        console.log(maaltijdbestelling[i].maaltijdid);
        localStorage.setItem("maaltijdid", maaltijdbestelling[i].maaltijdid);
        generateMaaltijd();
    }
}

function generateMaaltijd() {
    let list = document.getElementById("maaltijden");
    repos.getMaaltijdenbyID().then(function (result) {
        list.innerHTML += generatehtml(result);
    })
}


function generatehtml({ url, naam, keuken, ingredienten, prijs }) {
    return `
        <div class="col-sm-3">
            <div class="card text-center mb-5" style="width: 18rem;">
                <img class="card-img-top" src="${url}" alt="Card image cap">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${naam}</h5>
                    <p>${keuken}</p>
                    <p class="card-text">${ingredienten}</p>
                    <p class="card-text prijs">€${prijs}</p>
                </div>
            </div>
        </div>`

}

function displayBestelling(bestelling) {
    // id's = ordernummer, datum, personen & (prijs)
    let ordernummer = document.getElementById("ordernummer");
    let datum = document.getElementById("datum");
    let personen = document.getElementById("personen");
    //let prijs = document.getElementById("prijs");

    ordernummer.innerText = bestelling.id;
    datum.innerText = bestelling.datum;
    personen.innerText = bestelling.personen;
    //prijs.innerText = bestelling.prijs;





}

