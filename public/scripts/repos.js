const repos = function() {
    const domain = "https://192.168.10.10/maaltijden"

    const header = {
    }
    
    function getJson(url) {
        return fetch(url, header)
            .then(res => res.json())
    }

    return {
        getMeals: (id = "") =>
            getJson(`${domain}meals`)
    }
}()