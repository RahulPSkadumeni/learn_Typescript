let greetings: string = "Hello Rahul";
console.log(greetings);
let myNumber: number = 6;
//myNumber.toUppercase();
// cant write because its not available for numbers

let userId: number = 33.4567;
userId.toFixed(2);
console.log(userId.toFixed(2));

let userId1 = 33456.33;
userId1.toFixed();
//** no need to say its a number in this case

//** its the good practice

//?? boolean
let isLoggedIn: boolean = false;
isLoggedIn = true; //assigning true to the variable
if (isLoggedIn) {
  console.log("User logged in");
} else {
  console.log("Please login first.");
}

//!! ANY

// any

let hero: string; // not sure

function getHero() {
  return "thor";
}

hero = getHero();

export {};
