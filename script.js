"use strict";

//? Default Parameters in functions

const bookings = [];

const createBooking = (
  flightNum = "Default",
  passengersNum = 1,
  price = 199 * passengersNum
) => {
  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
// createBooking("6E-923", 3);
// createBooking(undefined, 3, 90);
// createBooking("6E-923", undefined, 10);
// createBooking("6E-923", 3, undefined);

const flight = "6E-232";
const sam = {
  uname: "Samsul Alom",
  passport: "SA23823887DE",
};

const checkIn = (flightNo, passenger) => {
  //   console.log(passenger, "PAss");
  flightNo = "SG-234";
  passenger.uname = "Mr. " + passenger.uname;

  if (passenger.passport === "SA23823887DE") {
    console.log("Checked In");
  } else {
    console.log("Wrong Passport");
  }
};
checkIn(flight, sam);
// checkIn(flight);
// checkIn(sam);

const newPassport = (person) => {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(sam);
checkIn(flight, sam);
console.log(sam);

//* Passing by Value & Passing by reference

//? First Class function enables us to write higher order function
//* First class function is just a feature that a programming language either has or doesn't have, All it means that all the functions are values, there are no first class function in practice, it's just a concept. There are however the higher order functions in practice, that is possible because the language supports first class functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

//! Higher Order Function
transformer("Javascript is the best language", upperFirstWord);
transformer("Javascript is the best language", oneWord);

//? Why are callback functions used so much in js?
//* It makes it easy to split up our code into more re-useable & (interconnected) codes/parts

//* CB functions allows to create abstraction -- (which means ) we hide the details of the code implementations, because we don't really care about the details. & this allows us to think about the problems at higher more abstract level ++===
//?Refer TRANSFORMER FUNCTION

//! Function returning Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet("Hey");
greeter("Samsul");
greeter("Alom");
greet("Hello")("Samsul");

const grt = (greetings) => (name) => console.log(`${greetings} ${name}`);

grt("Hi")("Sam");

console.log(grt);
