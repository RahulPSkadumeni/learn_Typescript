"use strict";
//protocol's , if you want to do some thing , u should do in this way
// scenario  in a mobile app camera
// anybody making an app, that take a photo always need to follows this interface
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class Youtube {
    constructor(cameraMode, filter, burstMode, short // adding more than TakePhoto class not a problem,cant do less than
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.short = short;
    }
}
// adding story
class Youtubes {
    constructor(cameraMode, filter, burstMode, short // adding more than TakePhoto class not a problem,cant do less than
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.short = short;
    }
    createStory() {
        console.log("first");
    }
}
