<h2>* String Methods in Javascript:</h2><br/>

let greetings: string = "Hello Rahul";

console.log(greetings);

-
-

export { }; ----------remove error temporally, (error: cant redeclare let)

![Alt text](image.png)
↑ string methods

![Alt text](image-1.png)

  <h1></h1>

Javascript doesn't have any type for float,int.
Everything is simply numbers

  <h3>* Number</h3>
let userId:number=33456;
also when try to access method tis show methods only related to numbers
 
 let userId=33456.33
userId.toFixed()  <br>
// no need to say its a number in this case
<br>
its the good practice

![Alt text](image-2.png)

userId="abc" //this will give an error as number cannot be assigned to a non numeric value

<h3>* Boolean</h3>
let isLoggedIn: boolean = false;

<h3>* Any ; where to use , and not</h3>
any can take all types of data but it should used carefully because if we assign wrong datatype then
our code may fail or behave unexpectedly.<|im_sep|>

![Alt text](image-3.png)

use when you don't want a particular value, typechecking
