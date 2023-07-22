//** Type of array in TS  with some restriction on it Tupile */

const user: (string | number)[] = []; //normal case can ush string or number  in any order

//* but if we need in specific order like first must be number
//*second must be string like that */

let tUser: [string, number, boolean];

tUser = ["hai", 345, true];

// tUser = [ 345, true,"hai"]; not possible , because of order

//**  another use, RGB*/

let rgb: [number, number, number];

rgb = [255, 245, 265];

//*
type User = [number, string];
const newUser: User = [25, "eg@gmail.com"];
newUser[1] = "r@gmail.com";

//* special case , breaking restrictions */
newUser.push(true); // it working not regrading the restriction of  tuples

export {};
