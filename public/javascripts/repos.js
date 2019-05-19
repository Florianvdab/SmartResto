const repos = function() {
    const domain = "https://192.168.10.10/"

    const header = {
    }
    
    function getJson(url) {
        return fetch(url, header)
            .then(res => res.json())
    }

    return {
        getMaaltijden: (id = "") =>
            getJson(`${domain}maaltijden`),
        getBestellingen: (id = "") =>
            getJson(`${domain}bestellingen`)
    }
}()