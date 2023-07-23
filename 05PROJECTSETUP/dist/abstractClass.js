"use strict";
//!! abstract class
//difference between interfaces and abstract classes
//interface implement
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
//const R = new TakePhoto("Test", "Test"); //making object from class only when its normal class but if its abstract class its not possible in :>readme file
// its blue print , you cant create objects from it;
// its the Responsibility of class who is extending it
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); //use keyword super , in which pass all the required valuse
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        // implementing getSepia()  from abstract class
        console.log("sepia");
    }
    //difference between interface>>
    getReelTime() {
        //doing complex calculation
        return 8;
    }
}
const hc = new Insta("test", "test", 5);
hc.getReelTime();
console.log("reeltime", hc.getReelTime());
