const repos = function () {
    const domain = "https://192.168.10.10/"

    const header = {
    }


    function getJson(url) {
        return fetch(url, header)
            .then(res => res.json())
    }

    let orderid = localStorage.getItem("ordernr");

    return {
        getMaaltijden: (id = "") =>
            getJson(`${domain}maaltijden`),
        getBestellingen: (id = "") =>
            getJson(`${domain}bestellingen`),
        getBestelling: (id = orderid) =>
            getJson(`${domain}bestellingen/${id}`),
        getMaaltijdBestelling: (id = orderid) =>
            getJson(`${domain}bestellingmaaltijd/${id}`),
        getMaaltijdenbyID: (id = localStorage.getItem("maaltijdid")) =>
            getJson(`${domain}maaltijden/${id}`),

    }
}()