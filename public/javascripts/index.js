document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("reservaties").onclick = nextpagereservations;

    function nextpagereservations() {
        ordernr = document.getElementById("ordernr").value;
        localStorage.setItem("ordernr", ordernr);
        window.location.href = "/reservations"
    }

    document.getElementById("datepicker").onload = function test() {
        document.getElementById("datepicker").minDate = 0;
    }
}
