/* using const */
var aisle = 0;
var middle = 1;
var WINDOW = 2;
/*  there is 3 restricted options; it can be done with Enums */
var seatChoice;
(function (seatChoice) {
  seatChoice[(seatChoice["AISLE"] = 0)] = "AISLE";
  seatChoice[(seatChoice["MIDDLE"] = 1)] = "MIDDLE";
  seatChoice[(seatChoice["WINDOW"] = 2)] = "WINDOW";
})(seatChoice || (seatChoice = {}));
var userSeatChoice = seatChoice.MIDDLE;
// can use design navigation bar
// also can provide  specific values to it;
// default it start from 0 ,it can change as given below,
//  also can provide separate value fo reach if you needed
var seatChoice2;
(function (seatChoice2) {
  seatChoice2[(seatChoice2["AISLE"] = 14)] = "AISLE";
  seatChoice2[(seatChoice2["MIDDLE"] = 33)] = "MIDDLE";
  seatChoice2[(seatChoice2["WINDOW"] = 34)] = "WINDOW";
  seatChoice2["fourth"] = "fourth";
})(seatChoice2 || (seatChoice2 = {}));

var hcSeatChoice = 14; /* seatChoice3.AISLE */
