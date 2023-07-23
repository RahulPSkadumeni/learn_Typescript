//!! abstract class
//difference between interfaces and abstract classes
//interface implement
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  //method definition in abstract class ,add abstract keyword in the begining
  //   abstract getSepia(): void;

  // its a abstract method ,not providing definition , who ever is going to implement is need to implements this, other ways they are not following abstract class
}

//const R = new TakePhoto("Test", "Test"); //making object from class only when its normal class but if its abstract class its not possible in :>readme file

// its blue print , you cant create objects from it;
// its the Responsibility of class who is extending it

class Insta extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); //use keyword super , in which pass all the required valuse
  }

  getSepia(): void {
    // implementing getSepia()  from abstract class
    console.log("sepia");
  }
  //difference between interface>>
  getReelTime(): number {
    //doing complex calculation
    return 8;
  }
}
const hc = new Insta("test", "test", 5);
hc.getReelTime();
console.log("reeltime", hc.getReelTime());
