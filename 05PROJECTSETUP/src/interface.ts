//protocol's , if you want to do some thing , u should do in this way
// scenario  in a mobile app camera

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstMode: number;
}

// anybody making an app, that take a photo always need to follows this interface

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {}
}

class Youtube implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    public short: string // adding more than TakePhoto class not a problem,cant do less than
  ) {}
}

interface Story {
  createStory(): void;
}

// adding story
class Youtubes implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    public short: string // adding more than TakePhoto class not a problem,cant do less than
  ) {}
  createStory(): void {
    console.log("first");
  }
}
