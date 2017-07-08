// get the cities
const API_URL = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let cities = [];
fetch(API_URL)
  .then(data => data.json())
  .then(apiCities => {
    cities = apiCities;
  });

function findPlaces(toSearch, places) {
  const regex = new RegExp(toSearch, 'gi'),
    matchedPlaces = places.filter(place => {
      return place.city.match(regex) || place.state.match(regex)
    });

  return matchedPlaces;
}

const searchInput = document.querySelector('.search-input'),
  results = document.querySelector('#results');
searchInput.addEventListener('change', filterResults);
searchInput.addEventListener('keyup', filterResults);

function filterResults() {
  const searchedPlace = this.value,
    foundPlaces = findPlaces(searchedPlace, cities),
    html = foundPlaces.map(place => {
      return `
      <li>
        <span>${place.city}, ${place.state}</span>
        <span>${place.population}</span>
      </li>`;
    }).join('');

  results.innerHTML = html;
}
