'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// AJAX CALLS

// old school way
// CORS - cross origin resource sharing

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[`${Object.keys(data.languages)[0]}`]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
          </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = country => {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     renderCountry(data);
//   });
// };

// const getCountryAndNeighbour = country => {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     renderCountry(data);
//     const neighbour = data.borders?.[0];
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', () => {
//       const [data] = JSON.parse(request2.responseText);
//       console.log(data);

//       renderCountry(data, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('india');

// CALLBACK HELL - when a async function has another async function and so on .. , to make it behave like synchoronous.
// Makes code messy, so to overcome it use PROMISES

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(([data]) => renderCountry(data));
// };

const getCountryAndNeighbour = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

      // most programmers mistake
      // fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(
      //   response => response.json()
      // );
      // if call back is done inside , then again we trapped in callback hell
      // then whats the benefit of using promises.
    })
    .then(response => response.json())
    .then(([data]) => renderCountry(data, 'neighbour'));
};

getCountryAndNeighbour('india');
