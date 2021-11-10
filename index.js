const cardContainer = document.querySelector("#card-container")
const card = document.createElement("div");
const image = document.createElement("img");
const name = document.createElement("h2");
const likTxt = document.createElement("p");
const delBtn = document.createElement("button");
const likBtn = document.createElement("button");

function renderCards(cards) {
  console.log(cards);
  cards.forEach(wildCard => {
    // Set attributes
    image.src = wildCard.image;
    name.textContent = wildCard.name;
    likTxt.textContent = `Likes: ${wildCard.likes}`;
    likBtn.textContent = "Like <3";
    delBtn.textContent = "Destroy!!!";
    delBtn.className = "delete-bttn";
    likBtn.className = "like-bttn";
    card.className = "card";
    // Append to DOM
    card.append(image, name, likTxt, likBtn, delBtn);
    cardContainer.append(card);
  });
}





fetch("http://localhost:3000/zelda")
.then(r => r.json())
.then(json => {
  renderCards(json)
})
