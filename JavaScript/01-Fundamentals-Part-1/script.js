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

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
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
const year = 2037;
const firstName = "John";
const job = "teacher";
const birthYear = 1991;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm $(firstName), a $(year - birthYear) year old $(job)!`;
console.log(jonasNew);

console.log("string with \n multiple \n lines");
console.log(`string with
multiple
lines`);
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
