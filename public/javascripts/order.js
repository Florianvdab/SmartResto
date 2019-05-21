document.addEventListener("DOMContentLoaded", init);


function init() {
    document.getElementById("savechanges").onclick = storedata;
    document.getElementById("datepicker").addEventListener("change", date);
}


function storedata() {
    let e = document.getElementById("exampleSelect1");
    let personen = e.options[e.selectedIndex].value;
    localStorage.setItem("personen", personen);

    let radio = document.forms[0];
    let txt = "";
    let i;
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            txt = radio[i].value;
        }
        localStorage.setItem("tijd", txt);
    }

    window.location.href = "/meals"
}

function date() {
    let input = this.value;
    localStorage.setItem("datum", input);
    console.log(input);
}
