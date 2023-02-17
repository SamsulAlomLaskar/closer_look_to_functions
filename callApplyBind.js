"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum = 100, name = "SRK") {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
// lufthansa.book(239, "Samsul Alom");
// lufthansa.book(483, "Ikbal Laskar");
lufthansa.book();
console.log(lufthansa.bookings);

const samAir = {
  airline: "Sam Airlines",
  iataCode: "SA",
  bookings: [],
};

const book = lufthansa.book;
// book(234, "Williams");
//? Call method --- points the "THIS" keyword to the object which is passed as a first argument while calling the function
// book.call(samAir, 234, "Sam Las");
// book.call(lufthansa, 234, "Laskar Rukonara");
// console.log(samAir);

//? Apply method -- doesn't recieve a list of arguments after the "THIS" keyword, but instead it takes an array of the arguments

const flightData = [550, "Goerge Cooper"];
book.apply(samAir, flightData);
book.call(samAir, ...flightData);

//? Bind method -- allows us to manually set the this keyword for any function call, but the bind doesn't immediately call the function instead it returns a new function where the THIS keyword is bound

const bookSam = book.bind(samAir);
const bookLH = book.bind(lufthansa);

bookSam(543, "Steven Williams");
bookLH(200, "Adam Esiw");

//* Partial application -- A part of the arguments of the original function are already applied

const bookSam543 = book.bind(samAir, 543);

bookSam543("Samsul Alom");
bookSam543("Rukonara Begum");
bookSam543("Ikbal Laskar");

console.log(samAir);
console.log(lufthansa);

//? Bind Method with Event Listeners
lufthansa.planes = 200;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//* In an event handler function THIS keywords always points to the elements on which the handler is attached to

//! document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); ===> here the lufthansa.buyPlane's THIS keyword will point to querySelector(".buy").addEventListener

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//* Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.4, 200));

//? Why we are not setting the default values? because the bind method will return a new function which we can use as per our requirement

const addGST = addTax.bind(null, 0.18);
// addGST = value + value * 18;
console.log(addGST(199));
console.log(addGST(58));
// console.log(addGST(300));

const addTaxCopy = function (rate) {
  return function (value) {
    return console.log(value + value * rate, "CBF");
  };
};

addTaxCopy(0.18)(300);
const addGST2 = addTaxCopy(0.28);
addGST2(149);
addGST2(99);
