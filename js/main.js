
const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72/"
const items = document.getElementById('items')
fetch(url)
    .then(response =>
        response.json()
    )
    .then(data => {
        cardData(data)

    })
    .catch(err => console.log(err))

function cardData(data) {
    items.innerHTML = "";
    data.map(renderCard)
}
function renderCard(data) {
    const div = document.createElement("div");
    div.style.width = "20rem"
    div.className = "card-body"
    div.innerHTML = `
     <img src="${data.photo}" class="card-img-top" />
     <p class="card-text">${data.property_type}</p>
     <h5 class="card-title">${data.name}</h5>
     <p class="card-text"> R$ ${data.price}</p>
     `
    items.appendChild(div)
}



