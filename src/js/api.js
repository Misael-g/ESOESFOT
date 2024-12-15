const cardTemplate = document.querySelector('.ocio__card');
const cardContainer = document.querySelector('.ocio__card-container');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        cardContainer.innerHTML = ''

        data.results.forEach(character => {
            const newCard = cardTemplate.cloneNode(true)
            newCard.querySelector('.ocio__card-image').src = character.image
            newCard.querySelector('.ocio__card-image').alt = character.name
            newCard.querySelector('.ocio__card-title').textContent = character.name
            newCard.querySelector('.ocio__card-description').textContent = `Especie: ${character.species}`
            cardContainer.appendChild(newCard)
        })
    })
    .catch(error => console.error('Error:', error))
