"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Rahul";
console.log(greetings);
var myNumber = 6;
//myNumber.toUppercase();
// cant write because its not available for numbers
var userId = 33.4567;
userId.toFixed(2);
console.log(userId.toFixed(2));
var userId1 = 33456.33;
userId1.toFixed();
//** no need to say its a number in this case
//** its the good practice
//?? boolean
var isLoggedIn = false;
isLoggedIn = true; //assigning true to the variable
if (isLoggedIn) {
  console.log("User logged in");
} else {
  console.log("Please login first.");
}
//!! ANY
// any
var hero; // not sure
function getHero() {
  return "thor";
}
hero = getHero();
