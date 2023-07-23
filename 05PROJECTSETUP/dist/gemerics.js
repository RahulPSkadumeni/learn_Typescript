"use strict";
const score = [];
const Name = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val; //no idea what the value, and the definition og=f type gone. can take  any type of value return any type of value like num input ,string return,not a good idea
}
function identityThree(val) {
    return val; /*
    here its also like any , can accept any value a, return any type of value  but
    if you pass a value once ,its type logged ; and return type automatically becomes that
    if input is number, return type is also a number */
}
// short cut way
function identityFour(val) {
    return val;
}
identityThree(3); //return number
identityThree("3"); // return string
identityFour(true);
identityFour({ brand: "brandName", type: 2 });
//*  but if you want to get length ofa property(.length)
//* its not possible,cause some type don't have length(number,boolean) */
