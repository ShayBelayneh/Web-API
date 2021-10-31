const basicAPI = "https://api.jikan.moe/v3/search/anime?q=dragon ball"
async function getApi(api) {
    try {
        showLoading()
        return await fetch(api)
            .then(response => response.json())
    } catch (error) {
        return error
    }
    finally {
        hideLoading()
    }
}
search_input.onclick = () => {
    if (search_input.value.length > 2) {
        getApi(`${basicAPI}search/anime?q=${search_input.value}`)
            .then(res => showingResults(res.results))
    }
}

search_by_id_btn.onclick = () => {

    getApi(`${basicAPI}anime/${search_input.value}`)
        .then(res => console.log(res.results))

}


function showingResults(results) {
    results.forEach(element => {
        main_div.innerHTML += `<div class="card" id="resDiv_> ${element.title}">
        <div class ="card">
        <img src="${element.image_url}" style="width:100%">
        <div class = "container">
        <h4> <b> ${element.title}</b> </h4>
        <p>${element.synopsis}</p>
        </div>
        </div>
        </div>`
    });

}


function showLoading() {

    main_div.innerHTML = `<img id="load" src="./">`

}

function hideLoading() {

    load.style.display = "none"

}