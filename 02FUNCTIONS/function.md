<h2>Function</h2>

![Alt text](image-3.png)

in correct way>>
![Alt text](image.png)

<p>It make sure value comes always number and , use ony that method for numbers</p>

![Alt text](image-1.png)

in case of function type annotation is compulsory <br>
getUpper(2) should be >>>> getUpper("2")

-
- fix one error at one time
  ![Alt text](image-2.png)

  after fixing one next
  ![Alt text](image-4.png)

  then next
  ![Alt text](image-5.png)

 <h2> passing values to function & setting default value</h2>
 some times you don't need to always change this, but  if you  need can
 <br>
  >>>>>

![Alt text](image-6.png)

<h3 >return specific<h3/>

![Alt text](image-7.png)
show error because it should return number only
correct>>>
![Alt text](image-8.png)

function addTwo(num: number): number=(shows return type=number) {

return num + 2;
}

<h2>return type with arrow function</h2>

const greetings=(s:string) :string =>{
return ""
}
<br>

![Alt text](image-9.png)

result

![Alt text](image-10.png)

<br>
<h2>//Array</h2>
 type script automatically identify data type in mapping array<br>
 * <br>
 *

1. hero is string

2. here hero is number

![Alt text](image-16.png)

can write like this also

heros.map((hero):string=>{
return `hero is ${hero}`
});

<h2>function Return Nothing "void type" </h2>

![Alt text](image-17.png) <br>
Its says return nothing

<h3> 🟠 never</h3>
<h2 >
 if you want to never return use " never " data type as return <br>

it means return never observed, this says function throw an exception or terminate the program

</h2>

![Alt text](image-18.png)
