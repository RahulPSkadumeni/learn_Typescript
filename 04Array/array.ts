//**Array initialize */
const superHeros: string[] = []; // super hero is a string array
const heroPower: number[] = [];
superHeros.push("superman");
heroPower.push(5);
//* another way */

const heroPower2: Array<number> = [];

const heroDefine: Array<string> = [];

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};
const allUser: User[] = [];

/* if you want to push something to all user,
 add datatype follows User. */
allUser.push({
  _id: "1234",
  name: "R",
  email: "r@gmail.com",
  isActive: false,
});
/* another way  create array , 
  in some case like picture, picture is a all the row , 
  & columns of numbers */

const MLModel: number[][] = [[]];

//  there  is things like readOnly array
