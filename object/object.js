"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//OBJECT bad character in TS
var User = {
    name: "Rahul",
    email: "rahulps995@gmail.com",
    ispaid: true,
};
//?? passing to function
function createUser(_a) {
    var string = _a.userName, boolean = _a.isPaid;
}
createUser({ userName: "Rahul", isPaid: false });
//?? return from a function
//!!function createCourse(): {return type} { function definition}
function createCourse() {
    return { course: "typeScript", price: 3999 };
}
console.log(createCourse());
