const API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=xbox'

const xhr = new XMLHttpRequest();


function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector(this.#app)

        const tpl = data.map((title) => `<li>${title.name}<li>`)
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();
