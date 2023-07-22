type User = {
  name: string;
  email: string;
  isActive: boolean;
};

//!! 1 passing user should be in form of type User
function createUser(user: User) {}

createUser({ name: "Rahul", email: "rahulps995@gmail.com", isActive: true });

//!! 2  can make return type also type aliases
function createUser2(user: User): User {
  return {
    name: "",
    email: "",
    isActive: true,
  };
}

//??Read Only

//! optional data (using "?")
/**use case eg: mongodb, object Id we need to read only this ,never modify this
 * can write this as
 *  readonly +id: string;
 *
 *
 * so it cant change
 */
type User1 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;

  creditCard?: number; // ca be optional, not everyone have it
};

const myUser: User1 = {
  _id: "1234",
  name: "R",
  email: "r@gmail.com",
  isActive: false,
};

(myUser.email = "rahul@gmail.com"), // acceptable
  (myUser.isActive = true); // acceptable
//myUser._id = 123131; //!! not acceptable  because its read only

//**Mix and matching objects */
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type CardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
/** new type base on combination of previous two type
 && and additional properties */
export {};
