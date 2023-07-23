const score: Array<number> = [];
const Name: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val; //no idea what the value, and the definition og=f type gone. can take  any type of value return any type of value like num input ,string return,not a good idea
}
function identityThree<Type>(val: Type): Type {
  return val; /*
  here its also like any , can accept any value a, return any type of value  but 
  if you pass a value once ,its type logged ; and return type automatically becomes that
  if input is number, return type is also a number */
}

// short cut way
function identityFour<T>(val: T): T {
  return val;
}
identityThree(3); //return number
identityThree("3"); // return string

identityFour(true);
//can create own type nad pass it as belows

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "brandName", type: 2 });

//*  but if you want to get length ofa property(.length)
//* its not possible,cause some type don't have length(number,boolean) */

//in case of array
function getSearchProduct<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];

  //input value is array of T[],
  // return is on of the value in  T[] array
}

//* in arrow function

const getMoreSearchProduct = <T>(products: T[]): T => {
  //do some database operation
  return products[3];
};

const getMoreSearchProducts = (products: number[]): number => {
  //do some database operation
  const myIndex = 4;
  return products[myIndex];
};

//!! info  <T,> - is used to show it a genetic tag not a normal tag like h1,p,or other tags
const getMoreSearch = <T>(products: T[]): T => {
  //do some database operation
  return products[3];
};
