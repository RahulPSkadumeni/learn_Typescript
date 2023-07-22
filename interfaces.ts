interface user {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
}
const rahul: user = { dbId: 31, email: "rahulps@gmail.com", userId: 4242 };

//adding definition off functions to interfaces

interface user1 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial: () => string;
  startTrial(): string; // need a method  startTrial ,and return a string , no matter what logic is
  getCoupon(couponName: string, off: number): number;
}

const Rahul: user1 = {
  dbId: 31,
  email: "rahulps@gmail.com",
  userId: 4242,
  startTrial: () => {
    return "trial started at 13/06/23";
  },
  getCoupon: (Name: "offer10", off: 10) => {
    console.log(off);
    return 10;
  },
};

// you dont even need to match name==couponName
