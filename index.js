/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(someFood) {
    if (this.stomach.length < 10) {
      this.stomach.push(someFood);
    }
  }
  poop() {
    this.stomach = [];
  }
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

const newPerson = new Person('bob', 99);
newPerson.eat('food');
console.log(newPerson.stomach)

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons) {
    this.tank += gallons;
  }
  drive(distance) {
    let x = 1 / this.milesPerGallon;
    for (let i = 1; i <= distance; i++) {
      if (this.tank >= x) {
        this.odometer += 1;
        this.tank -= x;
      } else {
        this.fuel = 0;
        return `I ran out of fuel at ${i - 1} miles!`;
      }
    }
  }
}

const truck = new Car('truck', 5);
truck.fill(10);
console.log(truck.drive(51))

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location= obj.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

let student = new Lambdasian({
  name: 'Bob',
  age: 33,
  location: 'Chicago'
});

console.log(student.speak())

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(studentObj, subject, /* STRETCH -->*/addOrSubtract = '') {
    let num = Math.floor(Math.random() * 11);
    if (addOrSubtract.toLowerCase() === 'add') {
      studentObj.grade += num;
    } else if (addOrSubtract.toLowerCase() === 'subtract') {
      studentObj.grade -= num;
    }
    return `${studentObj.name} receives a ${studentObj.grade} on ${subject}`;
  }
}

let theInstructor = new Instructor({
  name: 'Phil',
  age: 72,
  location: 'New Jersey',
  specialty: 'Everything',
  favLanguage: 'JavaScript',
  catchPhrase: 'Bada bing'
});
console.log(theInstructor.catchPhrase);
console.log(theInstructor.grade({
  name: 'Clyde',
  age: 107,
  grade: 90,
  location: 'Washington'
}, 'HTML'));

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
    // STRETCH 
    this.grade = obj.grade;
  }
  listSubjects() {
    return `Loving ${this.favSubjects}!`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a pull request for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade > 70) {
      return `CONGRATULATIONS ON GRADUATING FROM LAMBDA SCHOOL!!! yayyyy`;
    } else {
      return `Sorry, you're gonna have to flex`;
    }
  }
}

let goodStudent = new Student({
  name: 'Tony',
  age: 43,
  location: 'New York',
  previousBackground: 'Cook',
  className: 'CS132',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
  grade: 85
});
console.log(goodStudent.PRAssignment('JavaScript'));
console.log(goodStudent.graduate())

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @${slackChannel} standy times!`;
  }
  debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
  }
}

const pm = new ProjectManager({
  name: 'Alice',
  age: 30,
  location: 'Texas',
  specialty: 'Everything',
  favLanguage: 'JavaScript',
  catchPhrase: 'Bada bing',
  gradClassName: 'CS1',
  favInstructor: 'Phil'
});
console.log(pm.name);
console.log(pm.debugsCode({
  name: 'Jerry',
  age: 23,
  location: 'Mexico'
}, 'CSS'));

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
