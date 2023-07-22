/**
 * Union
 Use when you re not sure about what type data is comming.

 is a combo on 2 or more type,
 instead of use any can use union

 let score = 33;
//not sure ita number or it might be string as well
//in that case 
 */
// let score: number | string | boolean = 33;
// score = "55"; //string
// score = false; //boolean

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let Rahul: User | Admin = {
  name: "Rahul",
  id: 11223,
};
Rahul = { userName: "R", id: 11223 }; // now rahul is a admin

//In Functions

// function getDbId(id: number | string) {
//   console.log(`id is =${id}`);
// }
getDbId(2);

getDbId("3");

// problems occur when do something inside function
function getDbId(id: number | string) {
  id.toLowerCase(); //its not available for number
}

// can writtern like this
function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id = id + 2;
  }
}

//?? In Array
// const data: number[] = [1, 2, 3, 4, "5"];cant string in this array
// const data: string[] = ["1", "2", "3", "4", 5]  ; 5 cant be number

const data: number[] | string[] = [1, 2, 3, 4];
const data1: number[] | string[] = ["1", "2", "3", "4"]; // either all numbers or all the <string></string>

//* numbers and string mixed can be like to be given below*/
const data3: (number | string)[] = [1, 2, 3, 4, "5"]; // have both two ore more types

//* give a strict value to some thing always, cant change that; like pi value is always 3.14*/

let pie: 3.14 = 3.14;
//* pie = 3.145; // cant assign because its strict

// another use case; seat allocation airplane

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";

// seatAllotment = "Crew"; // cant allocate,only allocate these 3 types
