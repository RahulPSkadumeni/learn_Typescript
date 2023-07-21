function addTwo(num: number): number {
  return num + 2;
}
function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  if (name != "Rahul") {
    console.error(
      `Sorry ${email}, you are not allowed to login as a paid user.`
    );
  } else {
    if (email == "rahulps995@gmail.com" && isPaid) {
      let message: string = `Welcome  Rahul`;
      return message;
    } else {
      let message: string = `check credentials & payment`;
      return message;
    }
  }
}

function logInUser(name: string, email: string, isPaid: boolean = false) {
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

const greetings = (s: string): string => {
  return "";
};
//!! or

const greeting = (s: string): string => {
  return s + "Good morning";
};
console.log(greeting("hello"));

//Array

const heros = ["superMan", "spiderMan", "ironMan", "batMan"];

//1
heros.map((hero) => {
  return `hero is ${hero}`;
});

const heros2 = [1, 22, 88, 62];

//2
heros2.map((hero) => {
  return `hero is ${hero}`;
});

//3
let a = heros.map((hero): string => {
  return `hero is ${hero}`;
});

console.log(a);

function logErrorMessage(error: string): void {
  console.log(`Error message:${error}`);
}
logErrorMessage("404 not found");

function handleError(erroMsg: string): never {
  throw new Error(erroMsg);
}

handleError("404 not found");

//OBJECT bad character in TS
const User = {
  name: "Rahul",
  email: "rahulps995@gmail.com",
  isActive: true,
};

//?? passing to function
function createUser({ userName: string, isPaid: boolean }) {}

createUser({ userName: "Rahul", isPaid: false });
//?? return from a function

export {};
