<h2>🟢 Object in typeScript</h2>
<br>passing to function

![Alt text](image.png)

return from a function
function createCourse(): {return_type} { function_definition}

![Alt text](image-1.png)

//
also can write as
<br>
function createCourse(): {} {
return { course: "typeScript", price: 3999 };
}
console.log(createCourse());

<h2>💔 bad behavior of Object in typeScript</h2>
function createUser({ userName: string, isPaid: boolean }) {}
<br>

createUser({ userName: "Rahul", isPaid: false ,
email:"rahul@gmail.com"});

<p>this will not work because the object passed should have only two properties when object is defined and it has three</p>

![Alt text](image-2.png)

but
it will work like this
![Alt text](image-3.png)

<h1>typeAliases</h1>
