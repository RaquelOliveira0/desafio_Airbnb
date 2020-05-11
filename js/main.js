
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
    div.className = "card"
    div.innerHTML = `
     <img src="${data.photo}" class="card-img-top" />
     <ul class="list-group list-group-flush">
     <li class="list-group-item">${data.property_type}</li>
     <li class="list-group-item card-title">${data.name}</li>
     <li class="list-group-item"> R$ ${data.price}</li>
     </ul>
     `
    items.appendChild(div)
}



