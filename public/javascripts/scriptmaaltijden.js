document.addEventListener("DOMContentLoaded", init);
let prijs = 0;
let totaal = 0;

function init() {
    getMaaltijden().then(function (result) {
        displayMaaltijden(result);
    })

    document.getElementById("datum").innerText = localStorage.getItem("datum") + " - " + localStorage.getItem("tijd");
    document.getElementById("personen").innerText = localStorage.getItem("personen");
    document.getElementById("wdatum").innerText = localStorage.getItem("datum") + " - " + localStorage.getItem("tijd");
    document.getElementById("wpersonen").innerText = localStorage.getItem("personen");

    setTimeout(function () {
        let buttons = document.getElementsByClassName("winkelmand");
        let i = 0;
        for (i = 0; buttons.length; i++) {
            console.log(i);
            console.log(buttons[i].parentElement);
            buttons[i].addEventListener("click", winkelmand)
        }
    }, 1500);

}

function getMaaltijden() {
    console.log(repos.getMaaltijden());
    return repos.getMaaltijden();
}

function displayMaaltijden(maaltijden) {
    let list = document.getElementById("maaltijden");
    list.innerHTML = "";

    maaltijden.forEach(element => {
        list.innerHTML += generateMaaltijdListItem(element);
    });
}

function generateMaaltijdListItem({ id, naam, prijs, ingredienten, keuken, url }) {
    return `
        <div class="col-sm-3">
            <div class="card text-center mb-5" style="width: 18rem;">
                <img class="card-img-top" src="${url}" alt="Card image cap">
                <div class="card-body d-flex flex-column">
                    <h1 class="hidden hiddenids">${id}</h1>
                    <h5 class="card-title naam">${naam}</h5>
                    <p>${keuken}</p>
                    <p class="card-text">${ingredienten}</p>
                    <p class="card-text prijs">€${prijs}</p>
                    <a href="#" class="btn btn-primary mt-auto winkelmand">In winkelmandje!</a>
                </div>
            </div>
        </div>`
}

function winkelmand() {
    prijs = this.parentElement.getElementsByClassName("prijs")[0].innerText.replace(/\€/g, '');
    totaal = eval(totaal) + eval(prijs);
    document.getElementById("totaal").innerHTML ="€ " + totaal;
    document.getElementById("winkelmandtotaal").innerHTML ="Totaal: € " + totaal;
    document.getElementById("wtotaal").innerHTML ="Totaal: € " + totaal;
    let id = this.parentElement.getElementsByClassName("hiddenids")[0].innerText;
    let naam = this.parentElement.getElementsByClassName("naam")[0].innerText;
    let prijsmetteken = this.parentElement.getElementsByClassName("prijs")[0].innerText;
    let samenvatting = "<span class='idss'>"+id+ "</span> - " +naam + " - " + prijsmetteken;
    document.getElementById("winkelmand").innerHTML +="<p>"+ samenvatting + "</p>";
    document.getElementById("samenvatting").innerHTML +="<p>"+ samenvatting + "</p>";
    
}
