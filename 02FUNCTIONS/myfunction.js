"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
  return num + 2;
}
function getUpper(val) {
  return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
  if (name != "Rahul") {
    console.error(
      "Sorry ".concat(email, ", you are not allowed to login as a paid user.")
    );
  } else {
    if (email == "rahulps995@gmail.com" && isPaid) {
      var message = "Welcome  Rahul";
      return message;
    } else {
      var message = "check credentials & payment";
      return message;
    }
  }
}
function logInUser(name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
  //   if (name != "Rahul") {
  //     console.error(
  //       `Sorry ${email}, you are not allowed to login as a paid user.`
  //     );
  //   } else {
  //     if (email == "rahulps995@gmail.com" && isPaid) {
  //       let message: string = `Welcome  Rahul ; Logged In`;
  //       console.log(message);
  //     } else {
  //       let message: string = `check credentials & payment`;
  //       console.log(message);
  //     }
  //   }
}
console.log(signUpUser("Rahul", "rahulps995@gmail.com", true));
logInUser("Rahul", "rahulps995@gmail.com");
console.log(addTwo(2));
console.log(getUpper("2"));
// //!! add more than 1 return value types(in this case there will be 2 return types, will show later)
// function getValue(myValue: number) {
//   if (myValue > 5) {
//     return true;
//   }
//   return "200 OK";
// }
// getValue(10);
//??return type with arrow function
var greetings = function (s) {
  return "";
};
//!! or
var greeting = function (s) {
  return s + "Good morning";
};
console.log(greeting("hello"));
//Array
var heros = ["superMan", "spiderMan", "ironMan", "batMan"];
//1
heros.map(function (hero) {
  return "hero is ".concat(hero);
});
var heros2 = [1, 22, 88, 62];
//2
heros2.map(function (hero) {
  return "hero is ".concat(hero);
});
//3
var a = heros.map(function (hero) {
  return "hero is ".concat(hero);
});
console.log(a);
function logErrorMessage(error) {
  console.error("Error message:".concat(error));
}
logErrorMessage("404 not fount");
