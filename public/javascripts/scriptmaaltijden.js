document.addEventListener("DOMContentLoaded", init);
let prijs = 0;
let totaal = 0;
let nr = 0;
function init() {
    nr = 0;
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
                    <h1 class="hiddenids" style='display:none' >${id}</h1>
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
    nr++;
    prijs = this.parentElement.getElementsByClassName("prijs")[0].innerText.replace(/\€/g, '');
    totaal = eval(totaal) + eval(prijs);
    document.getElementById("totaal").innerHTML = "€ " + totaal;
    document.getElementById("winkelmandtotaal").innerHTML = "<span class='totalider' style='font-weight:bold'>Totaal: € " + totaal + "</span>";
    let id = this.parentElement.getElementsByClassName("hiddenids")[0].innerText;
    let naam = this.parentElement.getElementsByClassName("naam")[0].innerText;
    let prijsmetteken = this.parentElement.getElementsByClassName("prijs")[0].innerText;
    let samenvatting = "<span class='idss' style='display:none'>" + id + "</span>" + naam + " - " + "<span class='deleteprice'>" + prijsmetteken + "</span>";
    document.getElementById("navbarDropdown").innerHTML = "Winkelmandje <span class='ml-2' id='nr' style='color:blue'>" + nr + "</span>"
    document.getElementById("winkelmand").innerHTML += "<p class='deletethis'>" + samenvatting + "</p>";
    document.getElementById("samenvatting").innerHTML = document.getElementById("winkelmand").innerHTML;
    for (let i = 0; i < document.getElementById("samenvatting").getElementsByClassName("deletethis").length * 2; i++) {
        document.getElementById("samenvatting").getElementsByClassName("deletethis")[0].className = "";
    }
    for (let i = 0; i < document.getElementsByClassName("deletethis").length; i++) {
        document.getElementsByClassName("deletethis")[i].addEventListener("click", remove);
    }

}

function remove() {
    let newprice = this.getElementsByClassName("deleteprice")[0].innerText.replace(/\€/g, '');
    this.innerHTML = "";
    let old = document.getElementById("nr").innerText;
    nr = eval(old) - 1;
    document.getElementById("nr").innerText = nr;

    let oldtotal = document.getElementById("totaal").innerText.replace(/\€/g, '');
    let newtotal = parseInt(oldtotal) - parseInt(newprice);
    totaal = newtotal;
    console.log(oldtotal - newprice);
    document.getElementById("totaal").innerText = "€ " + newtotal;
    document.getElementById("winkelmandtotaal").innerHTML = "<span style='font-weight:bold'>Totaal: € " + newtotal + "</span>";
    document.getElementById("samenvatting").innerHTML = document.getElementById("winkelmand").innerHTML;
    console.log(document.getElementById("samenvatting").getElementsByClassName("deletethis"));





}
