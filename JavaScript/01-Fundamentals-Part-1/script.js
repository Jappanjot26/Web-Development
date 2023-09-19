/* //Sample code
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10); //to show in console

console.log("Jonas");
console.log(23);

let firstName = "Jappanjot";
console.log(firstName);
console.log(firstName);
console.log(firstName); */

/* Rules for names
1.Camelcase(standard)
2.only start for alpha , $ or _
3.Rest we can use num , alpha , _ or $
4.No reserved keyword as var
5.not start name with uppercase(standard)
6.write real constant in uppercase
7.descriptive names */

/* Datatypes: Js can determine the type automatically(dynamic typing)
1. Number(1,1.0,-1,-1.0)
2. Strings('' or "")
3. Boolean(true or false)
4. Undefined(emptyValue --> let sampleVar)
5. Null
6. Symbol--> value is unique and can't change
7. BigInt
*/

/*
let javaScriptIsFun = true;
if (javaScriptIsFun) console.log("yes");
console.log(typeof javaScriptIsFun);

console.log(typeof true);
console.log(typeof 32);
console.log(typeof "jappanjot");
javaScriptIsFun = "YES!"; //Dynamically changed type
console.log(typeof javaScriptIsFun);

let year;
console.log(year); //Undefined
console.log(typeof year);

year = 1091;
console.log(year); //defined
console.log(typeof year);

console.log(typeof null); //Bug --> shows object instead of null.
*/

/**/
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990; // error as const. can't change

// const job; //error as we need to iniatilise const with its value

// var job = "programmer";
// job = "tracker";
// console.log(job);

// lastName = "Kalra";
// console.log(lastName);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1

// console.log(x);

// //comparison operators
// console.log(ageJonas > ageSarah); // > , < , >= , <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5; //x=y=10 is implemented right-to-left
// console.log(x, y);
// const avgAge = (ageJonas + ageSarah) / 2;
// console.log(ageSarah, ageJonas);
// const year = 2037;
// const firstName = "John";
// const job = "teacher";
// const birthYear = 1991;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log("string with \n multiple \n lines");
// console.log(`string with
// multiple
// lines`);

// const age = 15;
// if (age >= 18) {
//   console.log("Sarah can start driving");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too Young. Wait another ${yearsLeft} years`);
// }

/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18); //original str doesn't change

console.log(Number("Jonas")); //NaN -- Not a Number (or Invalid Number)

console.log(typeof NaN);
console.log(String(23), 23);

//type coersion (+ --> converts number to string)
console.log("I am " + 18 + " years old");
// -,*,/ --> converts str in num
console.log("23" - "10" - 3);
console.log(("20" / "10") * 3);

//Guess the output
let n = "1" + 1;
n = n - 1;
console.log(n); //10
*/

/*
//5 falsy values : 0,'',undefined,null,NaN
//other all are truthy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("Jonas"));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean(NaN));
*/
/*
//type coersion by if-else
const money = 1000;
if (money) {
  console.log("Don't spend it at all ;)");
} else {
  console.log("You should get a job!");
}
//truthy and falsy to check if var is defined or not
let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
//equlaity operators
//strict - === (no type-coersion)
//loose - == (does type-coersion)
const age = 18;
if (age === 18) console.log("You just became an adult :D");
if (20 == "20") console.log("You just became an adult :D(loose)");
if (20 === "20") console.log("You just became an adult :D(strict)");//doesn't log this string

//promt is used to take input from user
const fav = prompt("Whats your fav number ?");
console.log(fav); //store in string
console.log(typeof fav);
if (fav === 23) {
  //strict equality
  console.log("Cool! 23 is an amazing number!");
} else if (fav === 7) {
  console.log("7 is also a Cool number!");
} else {
  console.log("Number is not 23 or 7");
}
//!=  -> loose
//!== -> strict
if(fav !== 23)console.log("Not equal to 23");
*/

//-------------------------------------------------------//
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sarah should drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah should drive");
} else {
  console.log("Someone else should drive");
}*/
//-------------------------------------------------------
/*
const day = "monday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory vedios");
    break;
  case "wednesday":
  case "thrusday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record vedios");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
*/
//-------------------------------------------------------

const age = 15;
//ternary operator
age >= 18
  ? console.log("i like to drink wine🍷")
  : console.log("I like to drink water 🫗");

// let drink;
// if(age>=18){
//   drink = 'wine'
// } else {
//   drink = 'water';
// }

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//-------------------------------------------------------
//
//
//
/*
//  Assignment - Value and variables
// let country = "India";
// let continent = "Asia";
let population = 1300;
console.log(country, continent, population);

// Assignment: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland); //bo0l
console.log(typeof population); //number
// console.log(typeof country); //str
console.log(typeof language); //undefined

// Assignment : let,const,and var
language = "punjabi";
const country = "India";
const continent = "Asia";
// country = "America"; //error cant change value of constant
*/
