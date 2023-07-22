/* using const */

const aisle = 0;
const middle = 1;
const WINDOW = 2;

/*  there is 3 restricted options; it can be done with Enums */

enum seatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const userSeatChoice = seatChoice.MIDDLE;
// can use design navigation bar
// also can provide  specific values to it;
// default it start from 0 ,it can change as given below,
//  also can provide separate value fo reach if you needed

enum seatChoice2 {
  AISLE = 14,
  MIDDLE = 33,
  WINDOW,
  fourth = "fourth",
}

//adding const to prevent lot of code in javascript;
//if not it will generate insane amount of code

const enum seatChoice3 {
  AISLE = 14,
  MIDDLE = 33,
  WINDOW,
  fourth = "fourth",
}

const hcSeatChoice = seatChoice3.AISLE;
