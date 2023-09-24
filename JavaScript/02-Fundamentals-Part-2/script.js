//-------------------- Strict Mode ----------------------
//activating strict mode (avoid bugs),(visible errors);
"use strict"; //must be at first

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; 
//gives error only in strict mode , error = hasDriversLicense. 

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");

//Reserved keywords gives error in strict mode
const interface = "Audio";
const private = 534;
*/

/*

//--------------------- Functions ------------------------

function logger() {
  console.log("My name is Jonas");
}

// Invoking /Calling / Runnning the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//        OR
console.log(fruitProcessor(5, 0));

const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

*/

/*

//---------- Functions Declaration Vs Expression ----------

//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
//Above will work if we declare late and execute first

console.log(calcAge1(1991));

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
//Above will not work if declared lately

console.log(calcAge2(1991));

*/

/*

//---------------- Arrow Function --------------------

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
//        VS
//Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

*/

/*
//-------- Functions calling other functions  ----------

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//Coding Question
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// const checkWinner = function (scoreDolphins, scoreKoalas) {
//   if (scoreDolphins >= 2 * scoreKoalas) console.log("Dolphins team wins...");
//   else if (scoreKoalas >= 2 * scoreDolphins) console.log("Koalas team wins...");
//   else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
*/

/*
//---------------- Arrays ------------------

//Creating arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

//Accessing elements of array
console.log(friends[0]);
console.log(friends[2]);

//getting length of array
console.log(friends.length);
console.log(friends[friends.length - 1]); //last ele of arr

//Changing value of array
friends[2] = "Jay";
console.log(friends);
// friends = ['bob','Alice'] // not possible to change whole arr

//Array as a Array element
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
console.log(age1, age2, age3);

//            OR

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2])];
console.log(ages);

*/

/*

//--------------- Array Operations --------------

//ADD ELEMENTS
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); //Add element at last
console.log(friends);
console.log(newLength);

friends.unshift("John"); //Add at begining
console.log(friends);

//REMOVE ELEMENTS
friends.pop(); //Last ele remove and return ele
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first removed and return ele
console.log(friends);

//Knowing the index
console.log(friends.indexOf("Steven"));
console.log(friends.includes("Bob")); //false as not present

//inncludes --> checks if element in array
console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));

if (friends.includes("Peter")) {
  console.log("Peter is Present");
} else {
  console.log("Peter is not Present");
}

*/

/*
//--------------- Objects(dictionary) ------------------

//Declaration (Object Literal syntax)
//unordered
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Bob", "Alice"],
};

//Retreiving Value
console.log(jonas);

//Dot notation
console.log(jonas.lastName);
//Bracket Notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last'+namekey); //willnot work here


//Exercise 1

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName , lastName , age, job, and friends "
);
console.log(jonas.interestedIn); //Not works
console.log(jonas[interestedIn]); //bracket notation works

if (jonas[interestedIn]) {
  //if it exists
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName , lastName , age, job, and friends"
  );
}


//Add elements
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Exercise 2
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

*/

/*
//-------------- Exploring Objects --------------

//Functions in objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Bob", "Alice"],
  hasDriversLicense: true,
  //Any function attached to object is called method
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  //this --> uses value of same object
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  //challenge
  calcSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    return this.summary;
  },
};


//Calling of methods

//Method 1
console.log(jonas.calcAge(1991));
//Method 2
console.log(jonas["calcAge"](1991));

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.calcSummary());
console.log(jonas.summary);

*/

//Arrays are also objects but we uses inbuilt methods to matipulate it

/*

//---------------- lOOPS ----------------

//for loop keeps runnig while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Repetition ${rep}`);
}

// Array operations using loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Bob", "Alice"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  //filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//Break and continue statements
//continue --> exit current iteration and starts next
//break --> exits the loop

//Continue when not string
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] != "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

//Break when number found
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}



//Looping Backwards
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Bob", "Alice"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

//Loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
  }
}

*/

//While Loop
let rep = 1;
while (rep <= 10) {
  console.log(`repitition = ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
