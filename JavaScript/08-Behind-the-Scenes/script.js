'use strict';

// //TDZ

// //Hoisting with varibles
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //Functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// }; // var declares addExpr as undefined so it gives error that this is not a function

// const addArrow = (a, b) => a + b; // creates error of undefined function

// //Example
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted.');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

const calcAge = function (year) {
  console.log(2024 - year);
  console.log(this);
};
const calAgeArrow = year => {
  console.log(2024 - year);
  console.log(this);
};
// calAgeArrow(1991);
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();
