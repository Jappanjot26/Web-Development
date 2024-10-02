const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring

const book = getBook(3);

const { title, author, genres, ...others } = book;

console.log(title, author, genres);

// Rest (always in end) - takes values
const [priGen, secGen, ...othersGen] = genres;
console.log(priGen, secGen, othersGen);

// Spread (place values)
const newGenres = [...genres, "epic fantasy"];
newGenres;

// can overwrite values too
const updateBook = {
  ...book,
  // Adding new property
  moviePublicationDate: "2021-09-26",
  // overwriting property (keep afterwards)
  pages: 700,
};
updateBook;

// template literals
const summary = `${title} is a book`;
summary;

// ternary operator
const { pages } = book;
const res = pages > 100 ? "over 100" : "under 100";
res;

// Arrow functions
const getYear = (date) => date.split("-")[0];
console.log(getYear("2023-04-21"));

//short-circuiting & logical Operators (&&, ||, ??)
console.log(true && "some string");
// in this, && operator short circuits and doesn't look second value
console.log(false && "some string");

// Falsy Values
console.log(0, "", null, undefined);

// here it short circuit
console.log(true || null);

// use case
const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

// nulish colesing operator
// return second value for only null and undefined
// else same as || operator
const count = book.reviews.librarything?.reviewsCount ?? "no data";

// optional chaining
// as we access from a property which doesn't even exist
// we use ?. for getting if only data is present
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

/*

// Array map method

const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 5);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

// Array filter method

const longBooks = books
  .filter((book) => book.pages > 500)
  .map((book) => book.title);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// Array reduce method
// most veratile, any method can be made by this
// accumator could be anything, num, string, array, object
const pagesAllBooks = books.reduce((_, book) => _ + book.pages, 0);
pagesAllBooks;

// Array sort method
const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
// const sorted = arr.sort((a,b)=>b-a); -> descending order
sorted;
arr;

// sort will change original array
// for not changing
const arr2 = [3, 7, 0, 5, 1, 2];
const sorted2 = arr.slice().sort((a, b) => a - b);
sorted2;
arr2;

// sorting by no. of pages
const sortNoOfPages = books.slice().sort((a, b) => a.pages - b.pages);
sortNoOfPages;

// Working with immutable arrays

// 1) Add object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the chambers of secret",
  author: "JK Rowling",
};

const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// 2) delete book object from array
const booksAfterDel = bookAfterAdd.filter((book) => book.id !== 3);
booksAfterDel;

// 3) Update book object in array
const bookAfterUpdate = booksAfterDel.map((book) =>
  book.id == 1 ? { ...book, pages: 1210 } : book
);
bookAfterUpdate;

*/

// Asynchronous JavaScript

// Promises

// fetching data
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Easily handling the same
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log("Logging");
