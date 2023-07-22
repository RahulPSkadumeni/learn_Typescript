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
if we want to use same property over  multiple location, us type aliases
consider object user, that we use  multiple location, create it with a 
 <h4>"type keyword"</h4>

![Alt text](image-4.png)

<h2>Make property Read Only</h2>
 use case eg: mongodb, object Id we need to read only this ,never modify this

![Alt text](image-5.png)

![Alt text](image-6.png)

<h2>? for optional data</h2>

![Alt text](image-7.png)

  <h2>Using already made types two create another new type</h2>

  
  ![Alt text](image-8.png)
