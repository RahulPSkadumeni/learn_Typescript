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
var Rahul = {
    name: "Rahul",
    id: 11223,
};
Rahul = { userName: "R", id: 11223 }; // now rahul is a admin
//In Functions
function getDbId(id) {
    console.log(id);
}
getDbId(11223);
