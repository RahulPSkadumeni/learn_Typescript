//Class

class User {
  email: string;
  name: string;
  readonly city: string = "EKM";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const Rahul = new User("r@gmail.com", "Rahul");
Rahul.city;

//############################################
//private

class User1 {
  public email: string;
  name: string;

  private readonly city: string = "EKM"; // set as private so cant access it ,but only accessible within the class ;everthing you don't mark is public
  constructor(email: string, name: string, city: string) {
    this.email = email;
    this.name = name;
    this.city = city; // access private inside the class possible
  }
}

const Rahul1 = new User1("r@gmail.com", "Rahul", "kannur");
// Rahul1.city  //cant access because its private
//console.log(Rahul1);

//?? production way of class

class User2 {
  readonly city: string = "EKM";
  constructor(
    public email: string,
    public name: string,
    private userID: string
  ) {}
}

const Rahul2 = new User2("r@gmail.com", "Rahul", "kannur");

console.log(Rahul2);

//##Getters and Setters

class User3 {
  private courseCount: number = 1; //for show setter
  courseCount2 = 2;
  readonly city: string = "EKM";
  constructor(
    public email: string,
    public name: string,
    private userID: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCourseCount(): number {
    return this.courseCount;
  }
  //   set setCourseCount(courseNum) {//some error here need to looks into it
  //     // no return type

  //     if (courseNum <= 1) {
  //       throw new Error("should be more than 1");
  //     }
  //     this.courseCount = courseNum;
  //   }
  // private methods
  private deleteToken() {
    console.log("token deleted");
  }
}

const Rahul3 = new User3("r@gmail.com", "Rahul", "kannur");

console.log(Rahul3);

//??Inheritance

// cant get properties that is marked as private

class subUser extends User3 {
  isFamily: boolean = true; // adding new features
  changeCourseCount() {
    // this.courseCount = 4; // cant beacause courseCount is private in class user3

    this.courseCount2 = 4; // its public , can change
  }
}
