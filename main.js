const countriesCollection = [
    {
        name: 'Argentina',
        capital: 'Buenos-Aires',
        population: '46 million',
        languages: ['Spanish'],
        picture: 'messi.jpg',
        funFact: 'Argentina’s name is derived from “Argentum,”. It has this name due to the large quantities of the precious metal discovered.'
    },
    {
        name: 'Belgium',
        capital: 'Brussels',
        population: '11 million',
        languages: ['Dutch','French','German'],
        picture: 'bxl.jpg',
        funFact: 'New York City was founded by a Belgian.'
    },
    {
        name: 'France',
        capital: 'Paris',
        population: '67 million',
        languages: ['French'],
        picture: 'france.jpg',
        funFact: 'French was the official language of England for about 300 years'
    },
    {
        name: 'Brazil',
        capital: 'Brasilia',
        population: '213 million',
        languages: ['Portuguese'],
        picture: 'Brazil.jpg',
        funFact: 'Rio de Janeiro was once the capital of Portugal which meant it was the only European capital to be located outside Europe'
    },
    {
        name: 'Italy',
        capital: 'Rome',
        population: '60 million',
        languages: ['Italian'],
        picture: 'ital.avif',
        funFact: 'The Italian Police Force use Lamborghinis'
    },
    {
        name: 'Spain',
        capital: 'Madrid',
        population: '47 million',
        languages: ['Spanish'],
        picture: 'Spain.jpg',
        funFact: 'Madrid has the oldest restaurant in the world (opened in 1725)'
    },
    {
        name: 'Croatia',
        capital: 'Zagreb',
        population: '4 million',
        languages: ['Croatian'],
        picture: 'croatia.jpg',
        funFact: 'The White House was built from the stones originated from the island of Brač in Croatia'
    },
    {
        name: 'Paraguay',
        capital: 'Asuncion',
        population: '7 million',
        languages: ['Spanish', 'Guarani'],
        picture: 'Paraguay.jpg',
        funFact: 'Largest Landlocked Navy in the World'
    },
    {
        name: 'Thailand',
        capital: 'Bangkok',
        population: '69 million',
        languages: ['Thai'],
        picture: 'thailand.jpg',
        funFact: 'Thailand is the only Southeast Asian country that has never been colonized by a European power.'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        population: '126 million',
        languages: ['Japanese'],
        picture: 'japan.jpg',
        funFact: 'The country has more vending machines per capita than any other nation in the world.'
    }
];

const countryContainer = document.getElementById('country-container');

countriesCollection.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = 'images/' + country.picture;
    card.appendChild(image);

    const name = document.createElement('h2');
    name.textContent = country.name;
    card.appendChild(name);

    const capital = document.createElement('p');
    capital.innerHTML = `<span class="label">Capital:</span> ${country.capital}`;
    card.appendChild(capital);

    const population = document.createElement('p');
    capital.innerHTML = `<span class="label">Population:</span> ${country.population}`;
    card.appendChild(capital);

    const languages = document.createElement('p');
    languages.innerHTML = `<span class="label">Languages:</span> ${country.languages.join(', ')}`;
    card.appendChild(languages);

    const funFact = document.createElement('p');
    funFact.innerHTML = `<span class="label">Fun Fact:</span> ${country.funFact}`;
    card.appendChild(funFact);

    countryContainer.appendChild(card);
})

const searchInput = document.getElementById('search-input');

const filterCards = () => {
    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const title = card.querySelector('.card h2').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};

searchInput.addEventListener('input', filterCards);







