'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// AJAX CALLS

// old school way
// CORS - cross origin resource sharing

/*

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
};


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
*/

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

/*

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

const getCountryAndNeighbour = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country Not Found!'
  )
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'No Neighbour'
      );

      // most programmers mistake
      // fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(
      //   response => response.json()
      // );
      // if call back is done inside , then again we trapped in callback hell
      // then whats the benefit of using promises.
    })
    .then(([data]) => renderCountry(data, 'neighbour'))
    // Error goes to end until caught
    .catch(err => renderError(err.message))
    .finally(() => {
      // no matter what, this is always called
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryAndNeighbour('india');
});

getCountryAndNeighbour('australia');

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} M</p>
//             <p class="country__row"><span>🗣️</span>${
//               data.languages[`${Object.keys(data.languages)[0]}`]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[Object.keys(data.currencies)[0]].name
//             }</p>
//           </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

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
/*
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
};
*/

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

const getCountryAndNeighbour = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country Not Found!'
  )
    .then(([data]) => {
      renderCountry(data);
      // const neighbour = data.borders?.[0];
      const neighbour = data.borders?.[0];

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'No Neighbour'
      );

      // most programmers mistake
      // fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(
      //   response => response.json()
      // );
      // if call back is done inside , then again we trapped in callback hell
      // then whats the benefit of using promises.
    })
    .then(([data]) => renderCountry(data, 'neighbour'))
    // Error goes to end until caught
    .catch(err => renderError(err.message))
    .finally(() => {
      // no matter what, this is always called
      countriesContainer.style.opacity = 1;
    });
};

const getURL = (lat, lng) =>
  `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=c6a002300b10464099b69a2b92f4eabe`;

/*
const whereAmI = function (lat, lng) {
  fetch(getURL(lat, lng))
    .then(res => res.json())
    .then(res => {
      const data = res.features[0]?.properties;
      const country = data?.country;
      const state = data?.state;
      getCountryAndNeighbour(country);
    });
};
*/

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/*
//
//
// Testing Event Loops

console.log('Test Start!');
// this test shows that we can't do high precision tasks with js timers
// as it could me more than time mentioned due to promises in microtasks 
// queue.
setTimeout(() => {
  console.log('0 sec timer');
}, 0);

Promise.resolve('Resolved Promise 1').then(res => console.log(res));
Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++);
  console.log(res);
});

console.log('Test End!');
*/

/*
// Creating a basic promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery Draw Happening ...');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WON!');
    } else {
      reject(new Error('Yoo Lost!'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(4).then(() => console.log('I waited for 4 seconds!'));

// making timer using wait() without entering in call back hell;

wait(1)
  .then(() => {
    console.log('1 second passed!');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed!');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed!');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed!');
    return wait(1);
  });

// for immediate access to resolved or rejected state of promise
Promise.resolve('DONE!').then(x => console.log(x));
Promise.reject('Problem!').catch(x => console.error(x));
*/

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// making it to a promise
const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => console.log(position),
    //   err => console.error(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// const whereAmIAuto = () => {
//   getPosition()
//     .then(res => {
//       const { latitude, longitude } = res.coords;
//       return Promise.resolve([latitude, longitude]);
//     })
//     .then(([lat, lng]) => whereAmI(lat, lng));
// };
// whereAmIAuto();

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const wait = function (sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found!'));
    });
  });
};

let currImg;

createImage('img/img-1.jpg')
  .then(img => {
    currImg = img;
    console.log('Image loaded!');
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currImg = img;
    console.log('Image loaded!');
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

/*
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
};

const whereAmI = async function () {
  try {
    // geo location
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(getURL(lat, lng));
    if (!resGeo.ok) throw new Error('Problem getting Location data');
    const dataGeo = await resGeo.json();
    const country = dataGeo.features[0].properties.country;

    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));

    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Problem getting Country data');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${country}`;
  } catch (err) {
    renderError(`Something went wrong! ${err.message}`);
    throw err;
  }
};

console.log('Loading...');
// whereAmI()
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => {
//     console.log('Finished...');
//   });

// using iffe

(async function () {
  try {
    const country = await whereAmI();
    console.log(country);
  } catch (err) {
    console.error(err);
  }
  console.log('Finished...');
})();
*/

const getCapitals = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const [[data1], [data2], [data3]] = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),

      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data1.capital[0], data2.capital[0], data3.capital[0]);
  } catch (err) {
    console.error(err);
  }
};

// getCapitals('india', 'australia', 'usa');

/*

///////////////////////////////////////
// OTHER COMBINATORS

// Promise.race - returns the promise that resolves first

(async function () {
  const [res] = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/india`),
    getJSON(`https://restcountries.com/v3.1/name/usa`),
  ]);
  console.log(res.name.common);
})();

// IRL use case
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/india`), timeout(1)])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.allSettled - returns all promises, no matter if they are resolved or rejected
// differnce between all and allSettled is that allSettled always returns an array of objects whereas all shortcurcuits if any promise is rejected.

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

// Promise.any [ES2021] - returns the first fulfilled promise, if all are rejected then it rejects
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector('.images');

const wait = function (sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found!'));
    });
  });
};

// createImage('img/img-1.jpg')
//   .then(img => {
//     currImg = img;
//     console.log('Image loaded!');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currImg = img;
//     console.log('Image loaded!');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded!');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded!');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
