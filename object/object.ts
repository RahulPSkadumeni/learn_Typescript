//OBJECT bad character in TS
const User = {
  name: "Rahul",
  email: "rahulps995@gmail.com",
  ispaid: true,
};

//?? passing to function
function createUser({ userName: string, isPaid: boolean }) {}

createUser({ userName: "Rahul", isPaid: false });

//?? return from a function
//!!function createCourse(): {return type} { function definition}
function createCourse(): {} {
  return { course: "typeScript", price: 3999 };
}
console.log(createCourse());

//?? odd behavour

function createUser({ userName: string, isPaid: boolean }) {}

createUser({ userName: "Rahul", isPaid: false, email: "rahul@gmail.com" });
// this will not throw any error but it's weird
//# it will work if it write like this

function createUser({ userName: string, isPaid: boolean }) {}
let newUser = { userName: "Rahul", isPaid: false, email: "rahul@gmail.com" };
createUser(newUser);

export {};
